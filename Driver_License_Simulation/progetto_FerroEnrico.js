var clock = new THREE.Clock();

var controlsVeyron = {
				moveForward: false,
				moveBackward: false,
				moveLeft: false,
				moveRight: false
};

var veyron, cameraTarget;
var config = {
	"veyron"	: { r: 0.5,	 model: null, backCam: new THREE.Vector3( 0, 300, -1000 ) }
};

var currentCamera;
var FOLLOW_CAMERA = true;
var i;
var sprites = [];

function main() {

	//PRELIMINARY OPERATIONS
	var stats = initStats();

	// create a scene, that will hold all our elements such as objects, cameras and lights.
	var scene = new THREE.Scene();

	// create a camera, which defines where we're looking at.
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);

	cameraTarget = new THREE.Vector3();

	// create a render and set the size
	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor()
	renderer.setClearColor(new THREE.Color(0xdddddd));
	renderer.setSize(window.innerWidth, window.innerHeight);


	var textureCube = new THREE.CubeTextureLoader()
				.setPath( './texture/Nalovardo/')
				.load( [ 'posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg' ] );

	scene = new THREE.Scene();
	scene.background = textureCube;

	//Import the map
	map(scene);

	//Lights
	var ambientLight = new THREE.AmbientLight( 0x999999 );
	scene.add( ambientLight );
	var light = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );
	light.position.set( 0, 4000, 50000 );
	scene.add(light);



	//CAR
	veyron = new THREE.Car();
	veyron.modelScale = 2.5;
	veyron.backWheelOffset = 2;
	veyron.callback = function( object ) {
		addCar( object, -300, -215, -2000, 0 );
	};
	veyron.loadPartsBinary( "obj/veyron/parts/veyron_body_bin.js", "obj/veyron/parts/veyron_wheel_bin.js" );
	config[ "veyron" ].model = veyron;
	currentCamera = veyron;
	veyron.MAX_SPEED = 3800;


	//USER INTERACTION
	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );
	var cameraControls = new THREE.OrbitControls(camera, renderer.domElement);

	// add the output of the renderer to the html element
	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	render();

	//STATS FUNCTION
	function initStats()
	{
		var stats = new Stats();
		stats.setMode(0); // 0: fps, 1: ms
		// Align top-left
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.left = '0px';
		stats.domElement.style.top = '0px';

		document.getElementById("Stats-output").appendChild( stats.domElement );
		return stats;
	}


	function addCar( object, x, y, z, s ) {
		object.root.position.set( x, y, z );
		scene.add( object.root );
		if ( FOLLOW_CAMERA && object == currentCamera ) {
			object.root.add( camera );
			camera.position.set( 0, 300, -1000 );
			cameraTarget.z = 500;
			cameraTarget.y = 150;
			camera.lookAt( cameraTarget );
		}
	}


	//RENDER FUNCTION
	function render()
	{
		stats.update();
		var delta = clock.getDelta();
		requestAnimationFrame(render);
		renderer.render(scene, camera);
		veyron.updateCarModel( delta, controlsVeyron );
		camera.lookAt( cameraTarget );

		//updatecamera - center
		if ( ! FOLLOW_CAMERA ) {
			cameraTarget.x = currentCamera.root.position.x;
			cameraTarget.z = currentCamera.root.position.z;
		}
	}

	//CAMERA MANAGEMENT
	function setCurrentCamera( car, cameraType ) {
		var oldCamera = currentCamera;
		currentCamera = config[ car ].model;
		if ( cameraType == "front" || cameraType == "back" || cameraType == "internal" ) {
			FOLLOW_CAMERA = true;
			oldCamera.root.remove( camera );
			currentCamera.root.add( camera );
			if ( cameraType == "front" ) {
				camera.position.set( 350, 500, 2200 );
			}
			else if ( cameraType == "internal" ) {
				camera.position.set( 50, 150, -10 );
			}
			else if ( cameraType == "back" ) {
				camera.position.copy( config[ car ].backCam );
			}
			cameraTarget.set( 0, 150, 500 );
		} else {
			FOLLOW_CAMERA = false;
			oldCamera.root.remove( camera );
			camera.position.set( 2000, 5000, 2000 );
			cameraTarget.set( 0, 0, 0 );
		}
	}


	function onKeyDown ( event ) {
		switch( event.keyCode ) {
			case 87: /*W*/ 	controlsVeyron.moveForward = true; break;
			case 83: /*S*/ 	 controlsVeyron.moveBackward = true; break;
			case 65: /*A*/   controlsVeyron.moveLeft = true; break;
			case 68: /*D*/    controlsVeyron.moveRight = true; break;
			case 49: /*1*/	setCurrentCamera( "veyron", "back" ); break;
			case 50: /*2*/	setCurrentCamera( "veyron", "internal" ); break;
			case 51: /*3*/	setCurrentCamera( "veyron", "front" ); break;
			case 52: /*4*/	setCurrentCamera( "veyron", "center" ); break;
		}
	}
	function onKeyUp ( event ) {
		switch( event.keyCode ) {
			case 87: /*W*/ controlsVeyron.moveForward = false; break;
			case 83: /*S*/ 	 controlsVeyron.moveBackward = false; break;
			case 65: /*A*/ 	 controlsVeyron.moveLeft = false; break;
			case 68: /*D*/ 	  controlsVeyron.moveRight = false; break;
		}
	}
}
