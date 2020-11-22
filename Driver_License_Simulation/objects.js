var textureTop = new THREE.TextureLoader().load("texture/concreteplane2k.jpg");
textureTop.minFilter = THREE.MipMapLinearFilter;
textureTop.magFilter = THREE.NearestFilter;

var textureTop2 = new THREE.TextureLoader().load("texture/plane2.jpg");
textureTop2.minFilter = THREE.MipMapLinearFilter;
textureTop2.magFilter = THREE.NearestFilter;

var textureTopBlack = new THREE.TextureLoader().load("texture/cemento_nero.jpg");
textureTopBlack.minFilter = THREE.MipMapLinearFilter;
textureTopBlack.magFilter = THREE.NearestFilter;

var textureBrown = new THREE.TextureLoader().load("texture/brownConcrete.jpg");
textureBrown.minFilter = THREE.MipMapLinearFilter;
textureBrown.magFilter = THREE.NearestFilter;

/*****************************************************************************************************/

/*****************************************************************************************************/
function palace1(x, y, z, angle, scene) {

    var palace = new THREE.Object3D();

    var textureFacade1 = new THREE.TextureLoader().load("texture/facade1.jpg");
    textureFacade1.wrapS = textureFacade1.wrapT = THREE.RepeatWrapping;
    textureFacade1.minFilter = THREE.MipMapLinearFilter;
    textureFacade1.magFilter = THREE.NearestFilter;
    textureFacade1.repeat.set(2, 2);

    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade1}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade1}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop2}), // top
        new THREE.MeshLambertMaterial({color: 0x000000}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade1}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade1})  // front
    ];
    var cubeSidesMaterial = new THREE.MultiMaterial(materials);
    var part1 = new THREE.Mesh(new THREE.BoxGeometry(2000, 3000, 2000), cubeSidesMaterial);
    palace.add(part1);

    var textureFacade2 = new THREE.TextureLoader().load("texture/facade1.jpg");
    textureFacade2.minFilter = THREE.MipMapLinearFilter;
    textureFacade2.magFilter = THREE.NearestFilter;


    materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade2}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade2}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop2}), // top
        new THREE.MeshLambertMaterial({color: 0x000000}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade2}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade2})  // front
    ];
    cubeSidesMaterial = new THREE.MultiMaterial(materials);


    var part2 = new THREE.Mesh(new THREE.BoxGeometry(500, 1500, 1500), cubeSidesMaterial);
    palace.add(part2);
    part2.position.x = -1250;
    part2.position.y = -750;

    palace.rotation.y = angle;
    palace.position.set(x, y + 1500, z);
    scene.add(palace);
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function palace2(x, y, z, angle, scene) {
    var textureFacade2 = new THREE.TextureLoader().load("texture/facade2.jpg");
    textureFacade2.wrapS = textureFacade2.wrapT = THREE.RepeatWrapping;
    textureFacade2.minFilter = THREE.MipMapLinearFilter;
    textureFacade2.magFilter = THREE.NearestFilter;
    textureFacade2.repeat.set(2, 2);


    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade2}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade2}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTopBlack}), // top
        new THREE.MeshLambertMaterial({color: 0x000000}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade2}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade2})  // front
    ];

    var cubeSidesMaterial = new THREE.MultiMaterial(materials);
    var palace = new THREE.Mesh(new THREE.BoxGeometry(3000, 4000, 7000), cubeSidesMaterial);
    palace.rotation.y = angle;
    palace.position.set(x, y + 2000, z);
    scene.add(palace);
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function palace3(x, y, z, angle, scene) {
    var palace = new THREE.Object3D();

    var textureFacade = new THREE.TextureLoader().load("texture/facade3.jpg");
    textureFacade.wrapS = textureFacade.wrapT = THREE.RepeatWrapping;
    textureFacade.minFilter = THREE.MipMapLinearFilter;
    textureFacade.magFilter = THREE.NearestFilter;
    textureFacade.repeat.set(3, 3);

    var concreteMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, ambient: 0xffffff, map: textureBrown});

    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureBrown}), // top
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureBrown}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade})  // front
    ];

    var cubeSidesMaterial = new THREE.MultiMaterial(materials);

    var structure = new THREE.Mesh(new THREE.BoxGeometry(6000, 1500, 2000), cubeSidesMaterial);
    palace.add(structure);

    var top = new THREE.Mesh(new THREE.BoxGeometry(2200, 250, 800), concreteMaterial);
    palace.add(top);
    top.position.x = 1700;
    top.position.y = 850;
    top.position.z = 400;

    palace.rotation.y = angle;
    palace.position.set(x, y + 750, z);
    scene.add(palace);
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function palace4(x, y, z, angle, scene) {
    var palace = new THREE.Object3D();

    var textureFacade = new THREE.TextureLoader().load("texture/facade4.jpg");
    textureFacade.wrapS = textureFacade.wrapT = THREE.RepeatWrapping;
    textureFacade.minFilter = THREE.MipMapLinearFilter;
    textureFacade.magFilter = THREE.NearestFilter;
    textureFacade.repeat.set(1, 3);

    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // top
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade})  // front
    ];

    var cubeSidesMaterial = new THREE.MultiMaterial(materials);
    var base = new THREE.Mesh(new THREE.BoxGeometry(2000, 9000, 2000), cubeSidesMaterial);
    palace.add(base);


    palace.rotation.y = angle;
    palace.position.set(x, y + 4500, z);
    scene.add(palace);
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function palace5(x, y, z, angle, scene) {
    var palace = new THREE.Object3D();

    var textureFacade = new THREE.TextureLoader().load("texture/facade5.jpg");
    textureFacade.wrapS = textureFacade.wrapT = THREE.RepeatWrapping;
    textureFacade.minFilter = THREE.MipMapLinearFilter;
    textureFacade.magFilter = THREE.NearestFilter;
    textureFacade.repeat.set(1, 1);

    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // top
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade})  // front
    ];

    var cubeSidesMaterial = new THREE.MultiMaterial(materials);
    var base = new THREE.Mesh(new THREE.BoxGeometry(7000, 2000, 3000), cubeSidesMaterial);
    palace.add(base);

    //reload texture
    var textureFacadeCol = new THREE.TextureLoader().load("texture/facade5.jpg");
    textureFacadeCol.wrapS = textureFacadeCol.wrapT = THREE.RepeatWrapping;
    textureFacadeCol.minFilter = THREE.MipMapLinearFilter;
    textureFacadeCol.magFilter = THREE.NearestFilter;
    textureFacadeCol.repeat.set(0.3, 0.6);

    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeCol}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeCol}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // top
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeCol}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeCol})  // front
    ];

    var cubeSidesMaterial = new THREE.MultiMaterial(materials);


    var leftCol = new THREE.Mesh(new THREE.BoxGeometry(2000, 4000, 3000), cubeSidesMaterial);
    palace.add(leftCol);
    leftCol.position.set(2500, 3000, 0);

    var rightCol = new THREE.Mesh(new THREE.BoxGeometry(2000, 4000, 3000), cubeSidesMaterial);
    palace.add(rightCol);
    rightCol.position.set(-2500, 3000, 0);

    var centralCol = new THREE.Mesh(new THREE.BoxGeometry(2000, 1500, 3000), cubeSidesMaterial);
    palace.add(centralCol);
    centralCol.position.set(0, 1750, 0);

    palace.rotation.y = angle;
    palace.position.set(x, y + 1000, z);
    scene.add(palace);
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function palace6(x, y, z, angle, scene) {
    var palace = new THREE.Object3D();

    var textureFacadeL = new THREE.TextureLoader().load("texture/facade6.jpg");
    textureFacadeL.wrapS = textureFacadeL.wrapT = THREE.RepeatWrapping;
    textureFacadeL.minFilter = THREE.MipMapLinearFilter;
    textureFacadeL.magFilter = THREE.NearestFilter;
    textureFacadeL.repeat.set(5, 0.5);

    var textureFacadeC = new THREE.TextureLoader().load("texture/facade6.jpg");
    textureFacadeC.wrapS = textureFacadeC.wrapT = THREE.RepeatWrapping;
    textureFacadeC.minFilter = THREE.MipMapLinearFilter;
    textureFacadeC.magFilter = THREE.NearestFilter;
    textureFacadeC.repeat.set(0.5, 0.5);

    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeC}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeC}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // top
        new THREE.MeshLambertMaterial({color: 0x000000}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeL}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeL})  // front
    ];

    var cubeSidesMaterial = new THREE.MultiMaterial(materials);
    var part1 = new THREE.Mesh(new THREE.BoxGeometry(12000, 1500, 2000), cubeSidesMaterial);
    palace.add(part1)

    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeL}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeL}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // top
        new THREE.MeshLambertMaterial({color: 0x000000}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeC}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacadeC})  // front
    ];

    var cubeSidesMaterial = new THREE.MultiMaterial(materials);

    var part2 = new THREE.Mesh(new THREE.BoxGeometry(2000, 1500, 9000), cubeSidesMaterial);
    palace.add(part2);
    part2.position.x = 7000;
    part2.position.z = -3500;

    palace.rotation.y = angle;
    palace.position.set(x, y + 750, z);
    scene.add(palace);
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function palace7(x, y, z, angle, scene) {
    var palace = new THREE.Object3D();

    var textureFacade = new THREE.TextureLoader().load("texture/facade7.jpg");
    textureFacade.wrapS = textureFacade.wrapT = THREE.RepeatWrapping;
    textureFacade.minFilter = THREE.MipMapLinearFilter;
    textureFacade.magFilter = THREE.NearestFilter;
    textureFacade.repeat.set(2, 2);

    var concreteMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, ambient: 0xffffff, map: textureTop});

    //PILLARS
    //middle
    var pillar = new THREE.Mesh(new THREE.BoxGeometry(100, 500, 100), concreteMaterial);
    palace.add(pillar);

    //left
    var pillar = new THREE.Mesh(new THREE.BoxGeometry(100, 500, 100), concreteMaterial);
    palace.add(pillar);
    pillar.position.x = 1500;

    //right
    var pillar = new THREE.Mesh(new THREE.BoxGeometry(100, 500, 100), concreteMaterial);
    palace.add(pillar);
    pillar.position.x = -1500;

    //middle rear
    var pillar = new THREE.Mesh(new THREE.BoxGeometry(100, 500, 100), concreteMaterial);
    palace.add(pillar);
    pillar.position.z = -1000;

    //rear left
    var pillar = new THREE.Mesh(new THREE.BoxGeometry(100, 500, 100), concreteMaterial);
    palace.add(pillar);
    pillar.position.x = 1500;
    pillar.position.z = -1000;

    //rear right
    var pillar = new THREE.Mesh(new THREE.BoxGeometry(100, 500, 100), concreteMaterial);
    palace.add(pillar);
    pillar.position.x = -1500;
    pillar.position.z = -1000;

    //Structure
    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // top
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureTop}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureFacade})  // front
    ];

    var cubeSidesMaterial = new THREE.MultiMaterial(materials);
    var structure = new THREE.Mesh(new THREE.BoxGeometry(3100, 3000, 1100), cubeSidesMaterial);
    palace.add(structure)
    structure.position.set(0, 1750, -500);

    palace.rotation.y = angle;

    palace.position.set(x, y + 250, z);
    scene.add(palace);

}

/*****************************************************************************************************/

/*****************************************************************************************************/
function stopSignal(x, y, z, angle, scene) {
    var stop = new THREE.Object3D();

    var textureStop = new THREE.TextureLoader().load('texture/stop.png');
    textureStop.minFilter = THREE.MipMapLinearFilter;
    textureStop.magFilter = THREE.NearestFilter;

    var textureMetal = new THREE.TextureLoader().load('texture/metal-texture-7.jpg');
    textureMetal.minFilter = THREE.MipMapLinearFilter;
    textureMetal.magFilter = THREE.NearestFilter;

    var materials = [
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureMetal}), // right
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureStop}), // left
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureMetal}), // top
        new THREE.MeshLambertMaterial({color: 0x000000, map: textureMetal}), // bottom
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureMetal}), // back
        new THREE.MeshLambertMaterial({color: 0xffffff, map: textureMetal})  // front
    ];

    var sidesMaterial = new THREE.MultiMaterial(materials);
    var signal = new THREE.Mesh(new THREE.CylinderGeometry(70, 70, 20, 8, 1, false, 2), sidesMaterial);
    stop.add(signal);
    signal.rotation.z = Math.PI / 2;

    var pole = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 480, 32), new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: textureMetal
    }));
    stop.add(pole);
    pole.position.y = -305;

    stop.position.set(x, y + 500, z);
    stop.rotation.y = angle;
    scene.add(stop);
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function lamp(x, y, z, angle, scene) {
    var streetLamp = new THREE.Object3D();

    var lampMaterial = new THREE.MeshLambertMaterial({color: 0xfffa93, ambient: 0xfffa93});
    var lamp = new THREE.Mesh(new THREE.SphereGeometry(20, 32, 32, 0, Math.PI), lampMaterial);
    lamp.rotation.x = Math.PI / 2;
    streetLamp.add(lamp);

    var textureMetal = new THREE.TextureLoader().load('texture/black-metal.jpg');
    textureMetal.minFilter = THREE.MipMapLinearFilter;
    textureMetal.magFilter = THREE.NearestFilter;

    var pole = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 650, 32), new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: textureMetal
    }));
    lamp.add(pole);
    pole.rotation.x = Math.PI / 2;
    pole.position.y = 100;
    pole.position.z = 305;

    var bracket = new THREE.Mesh(new THREE.BoxGeometry(50, 20, 150), new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: textureMetal
    }));
    lamp.add(bracket);
    bracket.rotation.x = Math.PI / 2;
    bracket.position.y = 30;
    bracket.position.z = -5;

    streetLamp.position.set(x, y + 600, z);
    streetLamp.rotation.y = angle;
    scene.add(streetLamp);
}

/*****************************************************************************************************/
function trafficLight(x, y, z, angle, scene) {
    var streetTrafficLight = new THREE.Object3D();

    var redTrafficLightMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, ambient: 0xff0000});
    var greenTrafficLightMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, ambient: 0x80E12A});
    var yellowTrafficLightMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, ambient: 0xFFA500});
    var redTrafficLight = new THREE.Mesh(new THREE.SphereGeometry(10, 32, 32, 0, Math.PI), redTrafficLightMaterial);
    var greenTrafficLight = new THREE.Mesh(new THREE.SphereGeometry(10, 32, 32, 0, Math.PI), greenTrafficLightMaterial);
    var yellowTrafficLight = new THREE.Mesh(new THREE.SphereGeometry(10, 32, 32, 0, Math.PI), yellowTrafficLightMaterial);
    redTrafficLight.rotation.x = Math.PI / 2;
    greenTrafficLight.rotation.x = Math.PI / 2;
    yellowTrafficLight.rotation.x = Math.PI / 2;
    streetTrafficLight.add(redTrafficLight);
    streetTrafficLight.add(greenTrafficLight);
    streetTrafficLight.add(yellowTrafficLight);

    var textureMetal = new THREE.TextureLoader().load('texture/black-metal.jpg');
    textureMetal.minFilter = THREE.MipMapLinearFilter;
    textureMetal.magFilter = THREE.NearestFilter;

    var pole = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 450, 32), new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: textureMetal
    }));
    greenTrafficLight.add(pole);
    pole.rotation.x = Math.PI / 2;
    pole.position.y = 100;
    pole.position.z = 305;

    var bracket = new THREE.Mesh(new THREE.BoxGeometry(50, 20, 150), new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: textureMetal
    }));
    greenTrafficLight.add(bracket);
    bracket.rotation.x = Math.PI / 2;
    bracket.position.y = 30;
    bracket.position.z = -5;

    streetTrafficLight.position.set(x, y + 600, z);
    streetTrafficLight.rotation.y = angle;
    scene.add(streetTrafficLight);
}
/*****************************************************************************************************/

/*****************************************************************************************************/
function tree(x, y, z, scene) {
    // texture

    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {

        console.log(item, loaded, total);

    };

    var texture = new THREE.Texture();

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    var onError = function (xhr) {
    };

    var woodMaterial = new THREE.MeshLambertMaterial({color: 0x462d1a, ambient: 0x462d1a});

}

/*****************************************************************************************************/

/*****************************************************************************************************/
function seeSawSwing(x, y, z, angle, scene) {
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {

        console.log(item, loaded, total);

    };
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function carousel(x, y, z, angle, scene) {
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {

        console.log(item, loaded, total);

    };
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function slide(x, y, z, angle, scene) {
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {

        console.log(item, loaded, total);

    };
}

/*****************************************************************************************************/

/*****************************************************************************************************/
function block(x, y, z, angle, scene) {
    // texture

    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {

        console.log(item, loaded, total);

    };

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    var onError = function (xhr) {
    };

    var mtlLoader = new THREE.MTLLoader();
    // 로드할 Material 파일 명을 입력합니다.
    mtlLoader.load('obj/large.mtl', function (materials) {
        // 로드 완료되었을때 호출하는 함수
        materials.preload();

    }, function (xhr) {
        // 로드되는 동안 호출되는 함수
        console.log('MTLLoader: ', xhr.loaded / xhr.total * 100, '% loaded');
    }, function (error) {
        // 로드가 실패했을때 호출하는 함수
        console.error('MTLLoader 로드 중 오류가 발생하였습니다.', error);
        alert('MTLLoader 로드 중 오류가 발생하였습니다.', error);
    });

    var loader = new THREE.OBJLoader(manager);
    loader.load('obj/large.obj', function (object) {

        // object.traverse( function ( child ) {
        //
        // 	if ( child instanceof THREE.Mesh ) {
        // 		// child.material.map = textureTop;
        // 	}
        //
        // } );
        object.position.x = x;
        object.position.y = y;
        object.position.z = z;
        object.rotation.y = angle;
        object.scale.set(8, 8, 8);
        scene.add(object);
    }, onProgress, onError);

}

/*****************************************************************************************************/

/*****************************************************************************************************/
function cone(x, y, z, scene) {
    // texture

    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {

        console.log(item, loaded, total);

    };

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    var onError = function (xhr) {
    };

    var material = new THREE.MeshLambertMaterial({color: 0xff0000, ambient: 0xff0000});

    var loader = new THREE.OBJLoader(manager);
    loader.load('obj/road_cone_obj/road_cone_obj.obj', function (object) {

        object.traverse(function (child) {

            if (child instanceof THREE.Mesh) {

                child.material = material;
            }

        });
        object.position.x = x;
        object.position.y = y;
        object.position.z = z;
        object.scale.set(1, 1, 1);
        scene.add(object);


    }, onProgress, onError);

}
