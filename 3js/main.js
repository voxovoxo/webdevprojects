import * as THREE from "three";
import './style.css';
import gsap from "gsap"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

//sizes
const sizes ={
  width : window.innerWidth,
  height : window.innerHeight,
}
//light
const light = new THREE.PointLight(0xffffff, 150, 100)
light.position.set(0, 10, 10)
scene.add(light)

//camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 20
scene.add(camera)

//renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)


//resize
window.addEventListener('resize', ()=>{
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  //update camera
  
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
})

//controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 6

const loop = () =>{
  //mesh.position.x += 0.2 slides to right
  controls.update();
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}
loop()

//Timeline magic
const t1 = gsap.timeline({defaults: {duration: 1} })
t1.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})
t1.fromTo("nav", { y: "-100%"}, { y: "0%"})
t1.fromTo(".title", {opacity :0}, {opacity:1})

//mouse Animation color
let mouse = false
let rgb = []
window.addEventListener("mousedown", () => (mouse = true))
window.addEventListener("mouseup", () => (mouse = false))
window.addEventListener("mousemove", (e) => {
  if (mouse){
      rgb = [
        Math.round((e.pageX / sizes.width) * 255),
        Math.round((e.pageY / sizes.height) * 255),
        150, 
      ]
      //lets animate
      let newColor = new THREE.Color('rgb(${rgb.join(",")})')
      gsap.to(mesh.material.color, 
        {r: newColor.r, 
          g:newColor.g, 
          b: newColor.b
        })
  }
})

