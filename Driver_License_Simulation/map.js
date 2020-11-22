function map(scene) {
    //GROUND TEXTURE
    var textureRoad = new THREE.TextureLoader().load("texture/strada.jpg");
    textureRoad.wrapT = THREE.RepeatWrapping;
    textureRoad.magFilter = THREE.MipMapLinearFilter;
    textureRoad.minFilter = THREE.LinearFilter;
    textureRoad.repeat.set(1, 10);

    var textureSidewalk = new THREE.TextureLoader().load("texture/sidewalk.jpg");
    textureSidewalk.wrapT = THREE.RepeatWrapping;
    textureSidewalk.magFilter = THREE.LinearFilter;
    textureSidewalk.minFilter = THREE.MipMapLinearFilter;
    textureSidewalk.repeat.set(1, 50);

    var textureNoLine = new THREE.TextureLoader().load("texture/strada_noline.jpg");
    textureNoLine.wrapT = THREE.RepeatWrapping;
    textureNoLine.magFilter = THREE.MipMapLinearFilter;
    textureNoLine.minFilter = THREE.LinearFilter;
    textureNoLine.repeat.set(1, 1);

    var textureContinueLine = new THREE.TextureLoader().load("texture/strada_lineacontinua.jpg");
    textureContinueLine.magFilter = THREE.MipMapLinearFilter;
    textureContinueLine.minFilter = THREE.LinearFilter;

    var textureOneLine = new THREE.TextureLoader().load("texture/strada_oneLine.jpg");
    textureOneLine.magFilter = THREE.MipMapLinearFilter;
    textureOneLine.minFilter = THREE.LinearFilter;

    var textureStop = new THREE.TextureLoader().load("texture/strada_Stop.jpg");
    textureStop.magFilter = THREE.MipMapLinearFilter;
    textureStop.minFilter = THREE.LinearFilter;

    var textureSquare = new THREE.TextureLoader().load("texture/porfido.jpg");
    textureSquare.wrapS = textureSquare.wrapT = THREE.RepeatWrapping;
    textureSquare.magFilter = THREE.NearestFilter;
    textureSquare.minFilter = THREE.MipMapLinearFilter;
    textureSquare.repeat.set(50, 50);

    var textureGrass = new THREE.TextureLoader().load("texture/grasslight-big.jpg");
    textureGrass.wrapS = textureGrass.wrapT = THREE.RepeatWrapping;
    textureGrass.minFilter = THREE.MipMapLinearFilter;
    textureGrass.magFilter = THREE.NearestFilter;
    textureGrass.repeat.set(50, 50);

    //GROUND MATERIAL
    var roadMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: textureRoad});
    var sidewalkMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: textureSidewalk});
    var crossNoLineMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        map: textureNoLine,
        side: THREE.DoubleSide
    });
    var continueLineMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: textureContinueLine});
    var oneLineMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: textureOneLine});
    var stopMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: textureStop});
    var squareMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: textureSquare});
    var grassMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: textureGrass});

    //SQUARE
    // 반쪼가리 잔디밭 2개 그리기
    square = new THREE.Mesh(new THREE.PlaneGeometry(17600, 8600), grassMaterial);
    square.rotation.x = -Math.PI / 2;
    square.position.x = 9500;
    square.position.z = 5000;
    square.position.y = -215;
    scene.add(square);

    square = new THREE.Mesh(new THREE.PlaneGeometry(17600, 8600), grassMaterial);
    square.rotation.x = -Math.PI / 2;
    square.position.x = -9500;
    square.position.z = 5000;
    square.position.y = -215;
    scene.add(square);

    // 바깥에 반쪼가리 잔디밭 2개 더 그리기
    square = new THREE.Mesh(new THREE.PlaneGeometry(21000, 9000), grassMaterial);
    square.rotation.x = -Math.PI / 2;
    square.position.x = 9500;
    square.position.z = 15200;
    square.position.y = -215;
    scene.add(square);

    square = new THREE.Mesh(new THREE.PlaneGeometry(21000, 9000), grassMaterial);
    square.rotation.x = -Math.PI / 2;
    square.position.x = -9500;
    square.position.z = 15200;
    square.position.y = -215;
    scene.add(square);

    square = new THREE.Mesh(new THREE.PlaneGeometry(17600, 17600), grassMaterial);
    square.rotation.x = -Math.PI / 2;
    square.position.x = -9500;
    square.position.z = -9500;
    square.position.y = -215;
    scene.add(square);

    square = new THREE.Mesh(new THREE.PlaneGeometry(17600, 17600), grassMaterial);
    square.rotation.x = -Math.PI / 2;
    square.position.x = 9500;
    square.position.z = -9500;
    square.position.y = -215;
    scene.add(square);

    //STREET
    var street;
    for (i = 0; i < 3; i++) {
        // 가운데 세로로된 길
        street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 12425), roadMaterial);
        street.rotation.x = -Math.PI / 2;
        street.position.x = -19000 + i * 19000;
        street.position.y = -215;
        street.position.z = -9500;
        scene.add(street);
    }

    // T자 길 그리기
    // 길쭉한 길
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 10000), crossNoLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = -10000;
    street.position.y = -213;
    street.position.z = -5700;
    scene.add(street);

    // 주차 공간
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 3000), crossNoLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = -12000;
    street.position.y = -213;
    street.position.z = -6000;
    scene.add(street);

    //SIDEWALK STREET
    var sidewalk;
    for (i = 0; i < 2; i++) {
        // 가운데(왼쪽)랑 오른쪽(왼쪽) 긴부분
        sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 17600, 40), sidewalkMaterial);
        sidewalk.rotation.x = -Math.PI / 2;
        sidewalk.position.x = -18125 + i * 19000;
        sidewalk.position.y = -195;
        sidewalk.position.z = -9500;
        scene.add(sidewalk);

        for (j = 0; j < 9; j++) {
            lamp(-18125 + i * 19000, -175, -1200 - j * 2000, Math.PI / 2, scene);
        }
    }
    for (i = 0; i < 2; i++) {
        // 가운데 윗부분(왼쪽)이랑 오른쪽 윗부분(왼쪽)
        sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 8500, 40), sidewalkMaterial);
        sidewalk.rotation.x = -Math.PI / 2;
        sidewalk.position.x = -18125 + i * 19000;
        sidewalk.position.y = -195;
        sidewalk.position.z = 5000;
        scene.add(sidewalk);

        for (j = 0; j < 4; j++) {   // 가로등 개수 반으로 줄이기
            lamp(-18125 + i * 19000, -175, 1200 + j * 2000, Math.PI / 2, scene);
        }
    }
    for (i = 1; i < 3; i++) {
        // 가운데(오른쪽)랑 오른쪽(오른쪽) 긴부분
        sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 17600, 40), sidewalkMaterial);
        sidewalk.rotation.x = -Math.PI / 2;
        sidewalk.position.x = -19875 + i * 19000;
        sidewalk.position.y = -195;
        sidewalk.position.z = -9500;
        scene.add(sidewalk);

        for (j = 0; j < 9; j++) {
            lamp(-19875 + i * 19000, -175, -1200 - j * 2000, -Math.PI / 2, scene);
        }
    }
    for (i = 1; i < 3; i++) {
        // 가운데 윗부분(왼쪽)이랑 오른쪽 윗부분(왼쪽)
        sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 8500, 40), sidewalkMaterial);
        sidewalk.rotation.x = -Math.PI / 2;
        sidewalk.position.x = -19875 + i * 19000;
        sidewalk.position.y = -195;
        sidewalk.position.z = 5000;
        scene.add(sidewalk);

        for (j = 0; j < 4; j++) {   // 가로등 개수 반으로 줄이기
            lamp(-19875 + i * 19000, -175, 1200 + j * 2000, -Math.PI / 2, scene);
        }
    }

    //AVENUE
    for (i = 0; i < 2; i++) {
        // 왼쪽 가운데,아래 가로로된 길
        street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 12425), roadMaterial);
        street.rotation.x = -Math.PI / 2;
        street.rotation.z = -Math.PI / 2;
        street.position.x = 9500;
        street.position.z = -19000 + i * 19000;
        street.position.y = -215;
        scene.add(street);
    }
    // 왼쪽 반정도에 길 그리기
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 12425), roadMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = 9500;
    street.position.z = -10000 + i * 10000;
    street.position.y = -215;
    scene.add(street);

    for (i = 0; i < 2; i++) {
        // 오른쪽 가운데,아래 가로로된 길
        street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 12425), roadMaterial);
        street.rotation.x = -Math.PI / 2;
        street.rotation.z = -Math.PI / 2;
        street.position.x = -9500;
        street.position.z = -19000 + i * 19000;
        street.position.y = -215;
        scene.add(street);
    }
    // 오른쪽 반정도에 길 그리기
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 12425), roadMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = -9500;
    street.position.z = -10000 + i * 10000;
    street.position.y = -215;
    scene.add(street);

    //SIDEWALK AVENUE
    for (i = 0; i < 2; i++) {
        // 왼쪽 아래(위쪽)과 가운데(위쪽)
        sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 17600, 40), sidewalkMaterial);
        sidewalk.rotation.x = -Math.PI / 2;
        sidewalk.rotation.z = -Math.PI / 2;
        sidewalk.position.z = -18125 + i * 19000;
        sidewalk.position.y = -195;
        sidewalk.position.x = -9500;
        scene.add(sidewalk);

        for (j = 0; j < 9; j++) {
            lamp(-1200 - j * 2000, -175, -18125 + i * 19000, 0, scene);
        }
    }
    for (i = 0; i < 2; i++) {
        // 오른쪽 아래(위쪽)과 가운데(위쪽)
        sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 17600, 40), sidewalkMaterial);
        sidewalk.rotation.x = -Math.PI / 2;
        sidewalk.rotation.z = -Math.PI / 2;
        sidewalk.position.z = -18125 + i * 19000;
        sidewalk.position.y = -195;
        sidewalk.position.x = 9500;
        scene.add(sidewalk);

        for (j = 0; j < 9; j++) {
            lamp(1200 + j * 2000, -175, -18125 + i * 19000, 0, scene);
        }
    }
    for (i = 1; i < 3; i++) {
        // 오른쪽 가운데(아랫쪽)랑 반쪼가리 윗부분(아랫쪽)
        if (i === 1) {
            // T자 주차해야하니까 반으로 잘라서 두번 그려주기
            sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 8500, 40), sidewalkMaterial);
            sidewalk.rotation.x = -Math.PI / 2;
            sidewalk.rotation.z = -Math.PI / 2;
            sidewalk.position.z = -19875 + i * 19000;
            sidewalk.position.y = -195;
            sidewalk.position.x = -5000;
            scene.add(sidewalk);

            sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 7000, 40), sidewalkMaterial);
            sidewalk.rotation.x = -Math.PI / 2;
            sidewalk.rotation.z = -Math.PI / 2;
            sidewalk.position.z = -19875 + i * 19000;
            sidewalk.position.y = -195;
            sidewalk.position.x = -14250;
            scene.add(sidewalk);
        } else {
            sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 17600, 40), sidewalkMaterial);
            sidewalk.rotation.x = -Math.PI / 2;
            sidewalk.rotation.z = -Math.PI / 2;
            sidewalk.position.z = (-19875 + i * 19000) / 2 + 100;
            sidewalk.position.y = -195;
            sidewalk.position.x = -9500;
            scene.add(sidewalk);
        }

        if (i === 1) {  // 가운데 가로등 세우기
            for (j = 0; j < 9; j++) {
                lamp(-1200 - j * 2000, -175, -19875 + i * 19000, Math.PI, scene);
            }
        } else {
            for (j = 0; j < 9; j++) {
                lamp(-1200 - j * 2000, -175, (-19875 + i * 19000) / 2 + 100, Math.PI, scene);
            }
        }
    }
    for (i = 1; i < 3; i++) {
        // 왼쪽 가운데(아랫쪽)랑 반쪼가리 윗부분(아랫쪽)
        if (i === 1) {
            sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 17600, 40), sidewalkMaterial);
            sidewalk.rotation.x = -Math.PI / 2;
            sidewalk.rotation.z = -Math.PI / 2;
            sidewalk.position.z = -19875 + i * 19000;
            sidewalk.position.y = -195;
            sidewalk.position.x = 9500;
            scene.add(sidewalk);
        } else {
            sidewalk = new THREE.Mesh(new THREE.BoxGeometry(350, 17600, 40), sidewalkMaterial);
            sidewalk.rotation.x = -Math.PI / 2;
            sidewalk.rotation.z = -Math.PI / 2;
            sidewalk.position.z = (-19875 + i * 19000) / 2 + 100;
            sidewalk.position.y = -195;
            sidewalk.position.x = 9500;
            scene.add(sidewalk);
        }

        if (i === 1) {  // 가운데 가로등 세우기
            for (j = 0; j < 9; j++) {
                lamp(1200 + j * 2000, -175, -19875 + i * 19000, Math.PI, scene);
            }
        } else {
            for (j = 0; j < 9; j++) {
                lamp(1200 + j * 2000, -175, (-19875 + i * 19000) / 2 + 100, Math.PI, scene);
            }
        }
    }

    // 반쪼가리의 회전하는 부분
    //ANGLE 1
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 6000), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = 19000;
    street.position.z = 6300;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = 17000;
    street.position.z = 10000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.RingGeometry(0.1, 1400, 30, 30, 0, Math.PI / 2), crossNoLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = 18300;
    street.position.z = 9300;
    street.position.y = -215;
    scene.add(street);


    //CROSS A
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 6000), stopMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI;
    street.position.z = 6300;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = -2000;
    street.position.z = 10000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), oneLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.z = 10000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = 2000;
    street.position.z = 10000;
    street.position.y = -215;
    scene.add(street);

    // 반쪼가리의 회전하는 부분
    //ANGLE 2
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 6000), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = -19000;
    street.position.z = 6300;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = -17000;
    street.position.z = 10000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.RingGeometry(0.1, 1400, 30, 30, 0, Math.PI / 2), crossNoLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI;
    street.position.x = -18300;
    street.position.z = 9300;
    street.position.y = -215;
    scene.add(street);

    //CROSS B
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), oneLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = Math.PI;
    street.position.x = -19000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = -19000;
    street.position.y = -215;
    street.position.z = 2000;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = -19000;
    street.position.y = -215;
    street.position.z = -2000;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), stopMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = Math.PI / 2;
    street.position.y = -215;
    street.position.x = -17000;
    scene.add(street);

    //CROSS C
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), crossNoLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.y = -215;
    street.position.z = 2000;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.y = -215;
    street.position.z = -2000;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), stopMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.y = -215;
    street.position.x = -2000;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), stopMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = Math.PI / 2;
    street.position.y = -215;
    street.position.x = 2000;
    scene.add(street);

    //CROSS D
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), oneLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = 19000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = 19000;
    street.position.y = -215;
    street.position.z = 2000;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = 19000;
    street.position.y = -215;
    street.position.z = -2000;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), stopMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.y = -215;
    street.position.x = 17000;
    scene.add(street);

    //ANGLE 4
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = 19000;
    street.position.z = -17000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = 17000;
    street.position.z = -19000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.RingGeometry(0.1, 1400, 30, 30, 0, Math.PI / 2), crossNoLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = 18300;
    street.position.z = -18300;
    street.position.y = -215;
    scene.add(street);


    //CROSS E
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), stopMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.z = -17000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = -2000;
    street.position.z = -19000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), oneLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = Math.PI / 2;
    street.position.z = -19000;
    street.position.y = -215;
    scene.add(street);


    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = 2000;
    street.position.z = -19000;
    street.position.y = -215;
    scene.add(street);


    //ANGLE 3
    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.position.x = -19000;
    street.position.z = -17000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2600), continueLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = -Math.PI / 2;
    street.position.x = -17000;
    street.position.z = -19000;
    street.position.y = -215;
    scene.add(street);

    street = new THREE.Mesh(new THREE.RingGeometry(0.1, 1400, 30, 30, 0, Math.PI / 2), crossNoLineMaterial);
    street.rotation.x = -Math.PI / 2;
    street.rotation.z = Math.PI / 2;
    street.position.x = -18300;
    street.position.z = -18300;
    street.position.y = -215;
    scene.add(street);

    // GREEN
    // left
    var green = new THREE.Mesh(new THREE.PlaneBufferGeometry(18000, 39400), grassMaterial);
    green.rotation.x = -Math.PI / 2;
    green.position.x = 28700;
    green.position.y = -215;
    scene.add(green);

    //right
    var green = new THREE.Mesh(new THREE.PlaneBufferGeometry(18000, 39400), grassMaterial);
    green.rotation.x = -Math.PI / 2;
    green.position.x = -28700;
    green.position.y = -215;
    scene.add(green);

    //up
    var green = new THREE.Mesh(new THREE.PlaneBufferGeometry(75400, 18000), grassMaterial);
    green.rotation.x = -Math.PI / 2;
    green.position.z = 28700;
    green.position.y = -215;
    scene.add(green);

    //down
    var green = new THREE.Mesh(new THREE.PlaneBufferGeometry(75400, 18000), grassMaterial);
    green.rotation.x = -Math.PI / 2;
    green.position.z = -28700;
    green.position.y = -215;
    scene.add(green);


    //Reload texture
    var textureGrass = new THREE.TextureLoader().load("texture/grasslight-big.jpg");
    textureGrass.minFilter = THREE.MipMapLinearFilter;
    textureGrass.magFilter = THREE.NearestFilter;
    var grassMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: textureGrass});

    // angle1
    green = new THREE.Mesh(new THREE.PlaneBufferGeometry(1400, 1400), grassMaterial);
    green.rotation.x = -Math.PI / 2;
    green.position.x = 19000;
    green.position.z = 10000;
    green.position.y = -216;
    scene.add(green);

    //angle 2
    green = new THREE.Mesh(new THREE.PlaneBufferGeometry(1400, 1400), grassMaterial);
    green.rotation.x = -Math.PI / 2;
    green.position.x = -19000;
    green.position.z = 10000;
    green.position.y = -216;
    scene.add(green);

    //angle 3
    green = new THREE.Mesh(new THREE.PlaneBufferGeometry(1400, 1400), grassMaterial);
    green.rotation.x = -Math.PI / 2;
    green.position.x = -19000;
    green.position.z = -19000;
    green.position.y = -216;
    scene.add(green);

    //angle 4
    green = new THREE.Mesh(new THREE.PlaneBufferGeometry(1400, 1400), grassMaterial);
    green.rotation.x = -Math.PI / 2;
    green.position.x = 19000;
    green.position.z = -19000;
    green.position.y = -216;
    scene.add(green);


    //MAP'S OBJECTS

    //Palaces
    // palace1(7000,-175,4000,-Math.PI/2,scene);
    // palace2(3500,-175,9000,0,scene);
    // palace6(8000,-175,16000,0,scene);
    //
    // for(i=0; i<4; i++)
    // 	palace7(-4000-i*3100,-175,3000,0,scene);
    //
    // palace5(-9000,-175,14000,0,scene);
    //
    // palace4(-5000,-175,8000,0,scene);
    // palace4(-15000,-175,8000,0,scene);


    // for(i=0; i<4; i++)
    // 	palace7(-4000-i*3100,-175,-2000,0,scene);
    //
    // palace2(-9000,-175,-16000,Math.PI/2,scene);
    // palace3(-4000,-175,-8500,-Math.PI/2,scene);


    //Stop signals
    stopSignal(-1000, -175, 800, 0, scene);
    stopSignal(-18000, -175, -800, Math.PI, scene);
    stopSignal(800, -175, -1000, Math.PI, scene);
    stopSignal(18000, -175, 800, 0, scene);
    stopSignal(800, -175, -18000, Math.PI / 2, scene);
    stopSignal(-800, -175, 18000, -Math.PI / 2, scene);


    //Trees
    //up
    for (var i = 0; i < 150; i++) {
        var z = 20000 + Math.floor((Math.random() * (35000 - 20000)));
        var x = -30000 + Math.floor((Math.random() * (33000 + 33000)));
        tree(x, -195, z, scene);
    }
    //down
    for (var i = 0; i < 150; i++) {
        z = -35000 + Math.floor((Math.random() * (-20000 + 35000)));
        x = -30000 + Math.floor((Math.random() * (32000 + 32000)));
        tree(x, -195, z, scene);
    }
    //left
    for (var i = 0; i < 75; i++) {
        z = -20000 + Math.floor((Math.random() * (20000 + 20000)));
        x = -35000 + Math.floor((Math.random() * (-20000 + 35000)));
        tree(x, -195, z, scene);
    }
    //right
    for (var i = 0; i < 75; i++) {
        z = -20000 + Math.floor((Math.random() * (20000 + 20000)));
        x = 20000 + Math.floor((Math.random() * (35000 - 20000)));
        tree(x, -195, z, scene);
    }


    //circuit object
    //CROSS C
    // block(-300, -215, -2000, 0,scene);

    // block(-300,-215,900,0,scene);
    // block(300,-215,900,0,scene);
    // block(900,-215,300,Math.PI/2,scene);
    // block(900,-215,-300,Math.PI/2,scene);

    for (i = 2; i < 7; i++) {
        cone(700, -215, -100 * i, scene);
        cone(-100 * i, -215, 650, scene);
    }

    cone(650, -215, -100, scene);
    cone(600, -215, 0, scene);
    cone(550, -215, 100, scene);
    cone(500, -215, 200, scene);
    cone(450, -215, 300, scene);
    cone(375, -215, 375, scene);
    cone(300, -215, 450, scene);
    cone(200, -215, 500, scene);
    cone(100, -215, 550, scene);
    cone(0, -215, 600, scene);
    cone(-100, -215, 650, scene);


    //CROSS B
    // block(-19300,-215,-900,Math.PI,scene);
    // block(-18700,-215,-900,Math.PI,scene);

    for (i = 0; i < 7; i++) {
        cone(-18400 - i * 100, -215, -700, scene);
    }
    for (i = 0; i < 14; i++) {
        cone(-19700, -215, -400 + i * 100, scene);
    }
    cone(-19600, -215, -450, scene);
    cone(-19500, -215, -500, scene);
    cone(-19400, -215, -550, scene);
    cone(-19300, -215, -600, scene);
    cone(-19200, -215, -650, scene);
    cone(-19100, -215, -675, scene);


    //CROSS A and D
    // block(-300,-215,18300,Math.PI,scene);
    // block(300,-215,18300,Math.PI,scene);
    //
    // block(18300,-215,300,-Math.PI/2,scene);
    // block(18300,-215,-300,-Math.PI/2,scene);
    // for (i = 0; i < 12; i++) {
    //     cone(-600 + i * 100, -215, 18400, scene);
    //     cone(18400, -215, -600 + i * 100, scene);
    // }


    //CROSS E
    // block(-900,-215,-19300,-Math.PI/2,scene);
    // block(-900,-215,-18700,-Math.PI/2,scene);

    for (i = 0; i < 7; i++) {
        cone(-700, -215, -18400 - i * 100, scene);
    }
    for (i = 0; i < 14; i++) {
        cone(-400 + i * 100, -215, -19700, scene);
    }
    cone(-450, -215, -19600, scene);
    cone(-500, -215, -19500, scene);
    cone(-550, -215, -19400, scene);
    cone(-600, -215, -19300, scene);
    cone(-650, -215, -19200, scene);
    cone(-675, -215, -19100, scene);


    //Playground area
    seeSawSwing(15000, -175, -6500, 0, scene);
    seeSawSwing(11000, -175, -4300, Math.PI / 2, scene);
    carousel(13000, -175, -3000, 0, scene);
    carousel(13000, -175, -5000, 0, scene);
    carousel(13000, -175, -7000, 0, scene);
    slide(15000, -175, -2800, Math.PI, scene);
    slide(11000, -175, -5900, Math.PI / 2, scene);
    for (i = 0; i < 17; i++) {
        tree(2000, -175, -1500 - i * 1000, scene);
        tree(3500, -175, -2000 - i * 1000, scene);
        tree(5000, -175, -1500 - i * 1000, scene);
        tree(6500, -175, -2000 - i * 1000, scene);
        tree(8000, -175, -1500 - i * 1000, scene);
        tree(9500, -175, -2000 - i * 1000, scene);
    }
};
