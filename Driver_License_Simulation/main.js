var clock = new THREE.Clock();

var controlsVeyron = {
    accelerator: false,
    break: false,
    moveLeft: false,
    moveRight: false,
    gearDrive: false,
    gearReverse: false,
    gearParking: true,
    gearNeutral: false
};

var veyron, cameraTarget;
var config = {
    "veyron": {r: 0.5, model: null, backCam: new THREE.Vector3(0, 300, -1000)}
};

var currentCamera;
var FOLLOW_CAMERA = true;
var i;
var sprites = [];

// 주차
var parking_time = 12000;
var parking_timer_f;
var parking_start_cnt = 0;
var parking_success_cnt = 0;

function main() {
    // //PRELIMINARY OPERATIONS
    // var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);

    cameraTarget = new THREE.Vector3();

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    // renderer.setClearColor()
    renderer.setClearColor(new THREE.Color(0xdddddd));
    renderer.setSize(window.innerWidth, window.innerHeight);


    var textureCube = new THREE.CubeTextureLoader()
        .setPath('./texture/Nalovardo/')
        .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);

    scene = new THREE.Scene();
    scene.background = textureCube;

    //Import the map
    map(scene);

    //Lights
    var ambientLight = new THREE.AmbientLight(0x999999);
    scene.add(ambientLight);
    var light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    light.position.set(0, 4000, 50000);
    scene.add(light);

    //CAR
    veyron = new THREE.Car();
    veyron.modelScale = 2.5;
    veyron.backWheelOffset = 2;
    veyron.callback = function (object) {
        addCar(object, -11100, -215, -11100, 0);
    };
    veyron.loadPartsBinary("obj/veyron/parts/veyron_body_binary.js", "obj/veyron/parts/veyron_wheel_binary.js");
    config["veyron"].model = veyron;
    currentCamera = veyron;
    veyron.MAX_SPEED = 3800;

    //USER INTERACTION
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
    var cameraControls = new THREE.OrbitControls(camera, renderer.domElement);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);
    document.getElementById('velocity').innerText = veyron.speed + ' KM';
    render();

    function addCar(object, x, y, z, s) {
        object.root.position.set(x, y, z);
        scene.add(object.root);
        if (FOLLOW_CAMERA && object == currentCamera) {
            object.root.add(camera);
            camera.position.set(0, 300, -1000);
            cameraTarget.z = 500;
            cameraTarget.y = 150;
            camera.lookAt(cameraTarget);
        }
    }


    //RENDER FUNCTION
    function render() {
        document.getElementById('velocity').innerText = Math.abs(Math.round(veyron.speed / veyron.MAX_SPEED * 200)) + ' KM';

        if (veyron.root.position.x <= -5260 && veyron.root.position.x >= -6260 && veyron.root.position.z >= -800 && veyron.root.position.z <= -550) {
            if (parking_start_cnt == 0) {
                startParking();
                parking_start_cnt++;
            }
        }

        if (veyron.root.position.x >= -7500 && veyron.root.position.x <= -7000 && veyron.root.position.z <= -3800 && veyron.root.position.z >= -4200) {
            if (parking_success_cnt == 0) {
                successParking();
                parking_success_cnt++;
            }
        }

        var delta = clock.getDelta();
        requestAnimationFrame(render);
        renderer.render(scene, camera);
        veyron.updateCarModel(delta, controlsVeyron);
        camera.lookAt(cameraTarget);

        //updatecamera - center
        if (!FOLLOW_CAMERA) {
            cameraTarget.x = currentCamera.root.position.x;
            cameraTarget.z = currentCamera.root.position.z;
        }
    }

    //CAMERA MANAGEMENT
    function setCurrentCamera(car, cameraType) {
        var oldCamera = currentCamera;
        currentCamera = config[car].model;

        FOLLOW_CAMERA = true;
        oldCamera.root.remove(camera);
        currentCamera.root.add(camera);
        if (cameraType == "front") {
            camera.position.set(350, 500, 2200);
        } else if (cameraType == "internal") {
            camera.position.set(50, 150, -10);
        } else if (cameraType == "back") {
            camera.position.copy(config[car].backCam);
        }
        cameraTarget.set(0, 150, 500);
    }


    function onKeyDown(event) {
        switch (event.keyCode) {
            case 82: /*R*/
                controlsVeyron.accelerator = true;
                break;
            case 87: /*W*/
                controlsVeyron.break = true;
                break;
            case 65: /*Parking A, R*/
                if (controlsVeyron.break && Math.abs(Math.round(veyron.speed / veyron.MAX_SPEED * 200)) == 0) {
                    controlsVeyron.gearDrive = false;
                    controlsVeyron.gearReverse = false;
                    controlsVeyron.gearParking = true;
                    controlsVeyron.gearNeutral = false;
                    document.getElementById('reverse').style.background = "rgba(0, 0, 0, 0.7)";
                    document.getElementById('drive').style.background = "rgba(0, 0, 0, 0.7)";
                    document.getElementById('parking').style.background = "rgba(250, 167, 2, 0.8)";
                    document.getElementById('neutral').style.background = "rgba(0, 0, 0, 0.7)";
                }
                break;
            case 83: /*Reverse S, R*/
                if (controlsVeyron.break && Math.abs(Math.round(veyron.speed / veyron.MAX_SPEED * 200)) == 0) {
                    controlsVeyron.gearDrive = false;
                    controlsVeyron.gearReverse = true;
                    controlsVeyron.gearParking = false;
                    controlsVeyron.gearNeutral = false;
                    document.getElementById('reverse').style.background = "rgba(250, 167, 2, 0.8)";
                    document.getElementById('drive').style.background = "rgba(0, 0, 0, 0.7)";
                    document.getElementById('parking').style.background = "rgba(0, 0, 0, 0.7)";
                    document.getElementById('neutral').style.background = "rgba(0, 0, 0, 0.7)";
                }
                break;
            case 68: /*Neutral D, R*/
                if (controlsVeyron.break && Math.abs(Math.round(veyron.speed / veyron.MAX_SPEED * 200)) == 0) {
                    controlsVeyron.gearDrive = false;
                    controlsVeyron.gearReverse = false;
                    controlsVeyron.gearParking = false;
                    controlsVeyron.gearNeutral = true;
                    document.getElementById('reverse').style.background = "rgba(0, 0, 0, 0.7)";
                    document.getElementById('drive').style.background = "rgba(0, 0, 0, 0.7)";
                    document.getElementById('parking').style.background = "rgba(0, 0, 0, 0.7)";
                    document.getElementById('neutral').style.background = "rgba(250, 167, 2, 0.8)";
                }
                break;
            case 70: /*Drive F, R*/
                if (controlsVeyron.break && Math.abs(Math.round(veyron.speed / veyron.MAX_SPEED * 200)) == 0) {
                    controlsVeyron.gearDrive = true;
                    controlsVeyron.gearReverse = false;
                    controlsVeyron.gearParking = false;
                    controlsVeyron.gearNeutral = false;
                    document.getElementById('reverse').style.background = "rgba(0, 0, 0, 0.7)";
                    document.getElementById('drive').style.background = "rgba(250, 167, 2, 0.8)";
                    document.getElementById('parking').style.background = "rgba(0, 0, 0, 0.7)";
                    document.getElementById('neutral').style.background = "rgba(0, 0, 0, 0.7)";
                }
                break;
            case 74: /*J*/
                controlsVeyron.moveLeft = true;
                break;
            case 76: /*L*/
                controlsVeyron.moveRight = true;
                break;
            case 49: /*1*/
                setCurrentCamera("veyron", "back");
                break;
            case 50: /*2*/
                setCurrentCamera("veyron", "internal");
                break;
            case 51: /*3*/
                setCurrentCamera("veyron", "front");
                break;
        }
    }

    function onKeyUp(event) {
        switch (event.keyCode) {
            case 82: /*R*/
                controlsVeyron.accelerator = false;
                break;
            case 87: /*W*/
                controlsVeyron.break = false;
                break;
            case 74: /*J*/
                controlsVeyron.moveLeft = false;
                break;
            case 76: /*L*/
                controlsVeyron.moveRight = false;
        }
    }

    // 주차 시작
    function startParking() {
        document.getElementById('parking_background').style.display = "table";
        parking_timer_f = setInterval(timer1Min, 10);
    }

    // 주차 1분 안에 성공했을 때
    function successParking() {
        clearInterval(parking_timer_f);
        document.getElementById('parking_timer').style.color = "#1DDB16";
        document.getElementById('parking_timer').style.fontSize = "50px";
        document.getElementById('parking_timer').innerText = 'SUCCESS!';
        setTimeout(endParking, 3000);
    }

    function endParking() {  // T자 끝
        document.getElementById('parking_background').style.display = "none"
    }
}