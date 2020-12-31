Driver License Simulation(운전 뽀개기)
===

## Trailer video
* If you want to watch our trailer video, please click on the image.

[![](https://img.youtube.com/vi/fStbaCUpIW0/0.jpg)](http://www.youtube.com/watch?v=fStbaCUpIW0 "")

## Title
### 운전 뽀개기
* To help get a license by simulating a driver's license test

## Detail Description
### Map
- Map consist of roads, side blocks, grass, sky, traffic lights, and street lights.
#### Road, Side block, Grass
![1](https://github.com/JunHeon-Ch/Driver_License_Simulation/blob/main/wiki_image/1.png)
- Roads and grasses are composed of Plane Geometry, and side blocks are composed of Box Geometry.
1. Import images through TextureLoader.
2. Define how to map.
3. Define Material using MeshLamberMaterial.
4. Define the object and position it, then add it to the scene.
#### Sky
![2](https://github.com/JunHeon-Ch/Driver_License_Simulation/blob/main/wiki_image/2.png)
- Sky used the CubeTextureLoader to load the image of the sky and put it in the scene background.
#### Traffuc lights
이미지3
- The traffic light consists of three SphereGeometry in the BoxGeometry, which controls the material color of SphereGeometry through setInterval.
#### Street lights
이미지4
- The streetlights consist of CylinderGeometry, BoxGeometry, and SphereGeometry.

### Car
이미지5
- Cars and wheels are created in jason files, so uploads car and wheel objects using jason parsing. The four wheels are made up of Mesh, the front two wheels and the body are made of Object3D to control the left and right directions. All objects were added to Object3D to control the entire car at once.
#### Driving
- Wheel rotation: heel rotation is controlled by keyboard J, L. When a keydown event occurs, increase the wheel rotation angle to rotate the wheel.
- Gear: Gear changes are controlled by the keyboard a, s, d, and f. Gear changes are possible with the current speed at 0 and the brakes applied.
- Driving: Driving is controlled by the keyboard w, r. w is accelerator, r is the brake. The accelerator increases the speed of the car when you press the accelerator, and the accelerator decreases when you release the accelerator. Also, applying the brakes reduces the speed of the car.
#### Speedometer
이미지7
- The speedometer displays the car speed to html by mapping it from 0 to 200.

### Veiw point change
이미지6
- Point-in-time transformation is controlled by keyboards 1, 2, and 3. 1 is the back, 2 is the inside, and 3 is the front.
- When a keydown event occurs, remove the existing camera and add a new camera to root Object3D and set the camera coordinates. At this time, the camera uses a Perspective Camera.

### T-zone(parking) test
이미지8
- The countdown starts when the car enters the T-shaped area. If you park and exit within the time limit, you will succeed, and if you do not succeed within the time limit, you will fail.
- Compare the T-shaped entrance coordinates with the car's coordinates to determine if the T-shaped section has entered. After that, compare the parking space coordinates with the car's coordinates to determine if the parking was successful and if you arrive at the T-entry coordinates again, you will be successful.

### Sudden burst
이미지9
- Sudden burst occurs at random between 1 and 2 minutes, when the car must be stopped and the emergency button clicked.

### Light source
- We used Ambient Light and Directial Light to express the sun.

## Member Information & Role
||최준헌 | 양희림 | 장하영 |
|:-|:-:|:-:|:-:|
Student ID| 201533673 | 201735853 | 201735872 |
Email |chjh121@gmail.com|qkq1002@naver.com|hyj9829@gmail.com|
Role |View point changes, Car Object, Driving, Gear change, Final Presentation|Start UI, Stopwatch/T section timer, Speedometer, Sudden burst, Map(Sky), Proposal/Final PPT|Map(Road/Side block/Grass/Traffic light/Street Lamp), Traffic light change, Proposal Persentation|
