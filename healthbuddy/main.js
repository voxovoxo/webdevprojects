import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
const camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
});

//
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);
///
const x = 0, y = 0;
const heartShape = new THREE.Shape();
heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff2} );
const heart = new THREE.Mesh( geometry, material ) ;
heart.setColor = function(color){
  heart.material.color.set(color);
}
heart.setColor(0xA6A0CF) 
scene.add(heart);

///
const pointlight = new THREE.PointLight(0xffffff)
pointlight.position.set(5,5,5)

const ambientlight = new THREE.AmbientLight(0xffffff);
scene.add(pointlight, ambientlight)

//const gridhelper = new THREE.GridHelper(200, 50);
//scene.add(gridhelper)
const controls = new OrbitControls(camera, renderer.domElement);

const mainbg = new THREE.TextureLoader().load('mainbg.jpg');
scene.background = mainbg;

//
function ring(){
  const geometry = new THREE.RingGeometry( 1, 3, 18 ); 
  const material = new THREE.MeshBasicMaterial( { color: 0x5b4682, side: THREE.DoubleSide, wireframe:true } );
  const mesh = new THREE.Mesh( geometry, material );

const [x, y, z] = Array(2).fill().map(() => THREE.MathUtils.randFloatSpread(100));
mesh.position.set(x, y,z);
scene.add(mesh );
}
Array(30).fill().forEach(ring)

//
function love(){
const heartShape = new THREE.Shape();
heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff } );
const heart = new THREE.Mesh( geometry, material ) ;
const [x1, y1, z1] = Array(5).fill().map(() => THREE.MathUtils.randFloatSpread(100));
heart.position.set(x1, y1,z1);
function animate(){
requestAnimationFrame(animate);
heart.rotation.x -= 0.01;
heart.rotation.y += 0.005;
heart.rotation.z -= 0.02;
}
animate()
heart.setColor = function(color){
  heart.material.color.set(color);
}
heart.setColor(0xA6A0CF) 
scene.add( heart );
}
Array(5).fill().forEach(love)

///
function movecam(){
 const t = document.body.getBoundingClientRect().top;
 mesh.rotation.x +=0.05;
 mesh.rotation.y += 0.075;
 mesh.rotation.z += 0.05;
 
 camera.position.z= t * -0.01;
 camera.position.x = t * -0.0002;
 camera.position.y = t * -0.002
}
document.body.onscroll = movecam

///
function animate(){
  requestAnimationFrame(animate);
  heart.rotation.x += 0.01;
  heart.rotation.y += 0.005;
  heart.rotation.z += 0.02;

  controls.update();
  renderer.render(scene, camera);
}
animate()

/// features
var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

  

