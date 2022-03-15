import * as THREE from 'three'
import { Line } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { threadId } from 'worker_threads'
import { GUI } from 'dat.gui'

//#region Scene 
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = false;
// const gridhelper = new THREE.GridHelper(200, 50);
// scene.add(gridhelper);

//#endregion

//#region Creating Lines
const material = new THREE.LineBasicMaterial({
    color: 0xffffff
});

// Manually Given Points
const points: THREE.Vector3[] = [];
points[0] = new THREE.Vector3(-0.5, 0, 0)
points[1] = new THREE.Vector3(0.5, 0, 0)
const geometry1 = new THREE.BufferGeometry().setFromPoints(points);
const xline1 = new THREE.Line(geometry1, material);
scene.add(xline1);
points[0] = new THREE.Vector3(-0.5, 0.25, 0)
points[1] = new THREE.Vector3(0.5, 0.25, 0)
const geometry2 = new THREE.BufferGeometry().setFromPoints(points);
const xline2 = new THREE.Line(geometry2, material);
scene.add(xline2)
points[0] = new THREE.Vector3(-0.5, 0.5, 0)
points[1] = new THREE.Vector3(0.5, 0.5, 0)
const geometry3 = new THREE.BufferGeometry().setFromPoints(points);
const xline3 = new THREE.Line(geometry3, material);
scene.add(xline3)
points[0] = new THREE.Vector3(-0.5, 0.75, 0)
points[1] = new THREE.Vector3(0.5, 0.75, 0)
const geometry4 = new THREE.BufferGeometry().setFromPoints(points);
const xline4 = new THREE.Line(geometry4, material);
scene.add(xline4)
points[0] = new THREE.Vector3(-0.4, -0.2, 0)
points[1] = new THREE.Vector3(-0.4, 0.95, 0)
const geometry5 = new THREE.BufferGeometry().setFromPoints(points);
const yline1 = new THREE.Line(geometry5, material);
scene.add(yline1)
points[0] = new THREE.Vector3(0, -0.2, 0)
points[1] = new THREE.Vector3(0, 0.95, 0)
const geometry6 = new THREE.BufferGeometry().setFromPoints(points);
const yline2 = new THREE.Line(geometry6, material);
scene.add(yline2)
points[0] = new THREE.Vector3(0.4, -0.2, 0)
points[1] = new THREE.Vector3(0.4, 0.95, 0)
const geometry7 = new THREE.BufferGeometry().setFromPoints(points);
const yline3 = new THREE.Line(geometry7, material);
scene.add(yline3)
//#endregion

//#region Practicing
// debugger
// const newpoints: THREE.Vector3[] = [];
// newpoints[0] = new THREE.Vector3(-0.5, 0, 0)
// newpoints[1] = new THREE.Vector3(0.5, 0, 0)
// console.log(newpoints);
// let i = 0;
// for (let i = 0; i > 4; i++) {
//     const newpoints: THREE.Vector3[] = [];
//     newpoints[0] = new THREE.Vector3(-0.5, 0, 0)
//     newpoints[1] = new THREE.Vector3(0.5, 0, 0)
//     const geometry1 = new THREE.BufferGeometry().setFromPoints(newpoints);
//     const xline1 = new THREE.Line(geometry1, material);
//     scene.add(xline1)
//     console.log("i is executed")
// }
//#endregion

//#region GUI
const gui = new GUI();
const lineFolder = gui.addFolder('Lines')
const xAxis1 = lineFolder.addFolder('X-line1')
const xAxis2 = lineFolder.addFolder('X-line2')
const xAxis3 = lineFolder.addFolder('X-line3')
const xAxis4 = lineFolder.addFolder('X-line4')
const yAxis1 = lineFolder.addFolder('Y-line1')
const yAxis2 = lineFolder.addFolder('Y-line2')
const yAxis3 = lineFolder.addFolder('Y-line3')
xAxis1.add(xline1.position, 'y', -1, 2, 0.25)
xAxis2.add(xline2.position, 'y', -1, 2, 0.25)
xAxis3.add(xline3.position, 'y', -1, 2, 0.25)
xAxis4.add(xline4.position, 'y', -1, 2, 0.25)
yAxis1.add(yline1.position, 'x', -1, 2, 0.4);
yAxis2.add(yline2.position, 'x', -1, 2, 0.4);
yAxis3.add(yline3.position, 'x', -1, 2, 0.4);

//#endregion

//#region WindoREsize
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}
//#endregion

//#region Animate and Render
function animate() {
    requestAnimationFrame(animate)

    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01

    controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}
animate()
//#endregion