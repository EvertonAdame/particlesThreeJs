
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

const textureLoader = new THREE.TextureLoader()
const loader = new THREE.TextureLoader()
const cross = loader.load('./cross.png')

// Debug
const gui = new dat.GUI()

// Canvas

const canvasPhoto = makeScene(document.querySelector('canvas.webgl-photo'));

// Scene
const scene = new THREE.Scene()


const geometryPhoto = new THREE.PlaneBufferGeometry()

for(let i =0; i < 9; i++) {
    const material = new THREE.MeshBasicMaterial({
        map: textureLoader.load(`../static/photographs/${i}.png`)
    })
    
    const img = new THREE.Mesh(geometryPhoto, materialPhoto)

    scene.add(img)
}

// Objects


const materialPhoto = new THREE.PointsMaterial({
    size: 0.005
})



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
 
const rendererPhoto = new THREE.WebGLRenderer({
    canvas: canvasPhoto
})

rendererPhoto.setSize(sizes.width, sizes.height)
rendererPhoto.setPixelRatio(Math.min(window.devicePixelRatio, 2))
rendererPhoto.setClearColor(new THREE.Color('#000000'), 1)



const clockPhoto = new THREE.Clock()

const tickPhoto = () =>
{

    const elapsedTime = clockPhoto.getElapsedTime()

   
    renderer.render(scene, camera)
    rendererPhoto.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tickPhoto()