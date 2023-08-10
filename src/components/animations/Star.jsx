import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { degToRad } from 'three/src/math/MathUtils'
import { isMobile } from 'react-device-detect'

export const Star = () => {
  let renderer, scene, camera
  const clock = new THREE.Clock()
  let shapeObj, meshObj
  let parameters
  let materials = []
  let speedGrl = 0.1
  let speedObj = 0.2
  let widthScreen = window.innerWidth
  let heightScreen = window.innerHeight
  let cursorX = 0
  let cursorY = 0
  let totalMove = 0.02
  let scale = 1
  const loaderObj = new GLTFLoader()

  useEffect(() => {
    if (document.getElementById('canvas-bg') === null && !isMobile) {
      // renderer
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.domElement.id = 'canvas-bg'
      document.body.appendChild(renderer.domElement)
      renderer.outputEncoding = THREE.sRGBEncoding

      document.getElementById('canvas-bg').classList.add('-z-10')

      // scene
      scene = new THREE.Scene()
      scene.environment = new THREE.Color(0xffffff)
      scene.background = new THREE.Color(0x090c10)
      scene.fog = new THREE.FogExp2(0x090e10, 0.01)

      // camera
      camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        1000,
      )
      camera.position.set(0, 0, 30)

      // probe
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      scene.add(directionalLight)

      const light = new THREE.PointLight(0x4cc2b3, 30, 100)
      light.position.set(1, 0, 0)
      scene.add(light)

      const geometry = new THREE.BufferGeometry()
      const vertices = []

      const textureLoader = new THREE.TextureLoader()

      const sprite1 = textureLoader.load('../img/spark1.png')

      for (let i = 0; i < 10000; i++) {
        const x = Math.random() * 2000 - 1000
        const y = Math.random() * 2000 - 1000
        const z = Math.random() * 2000 - 1000

        vertices.push(x, y, z)
      }

      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3),
      )

      parameters = [
        [[0.4, 1, 0.5], sprite1, 6],
        [[0.3, 1, 0.5], sprite1, 7],
        [[0.5, 1, 0.5], sprite1, 4],
      ]

      for (let i = 0; i < parameters.length; i++) {
        const color = parameters[i][0]
        const sprite = parameters[i][1]
        const size = parameters[i][2]

        materials[i] = new THREE.PointsMaterial({
          size: size,
          map: sprite,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          transparent: true,
        })
        materials[i].color.setHSL(color[0], color[1], color[2])

        const particles = new THREE.Points(geometry, materials[i])

        particles.rotation.x = Math.random() * 6
        particles.rotation.y = Math.random() * 6
        particles.rotation.z = Math.random() * 6

        // scene.add( particles );
      }

      loaderObj.load(
        '../gltf/forweb.glb',
        (gltf) => {
          meshObj = gltf.scene.getObjectByName('test01')

          const materialChange = new THREE.MeshPhysicalMaterial({
            color: 'rgb(33,21,135)',
            wireframe: true,
            roughness: 0.2,
            transmission: 0.8,
            metalness: 0.3,
            emissive: new THREE.Color('rgb(33,21,135)'),
            emissiveIntensity: 0.4,
          })

          meshObj.material = materialChange

          shapeObj = gltf.scene
          shapeObj.rotation.y = degToRad(90)
          scene.add(shapeObj)
          animate()
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
          console.log(error)
        },
      )

      // listener
      document.addEventListener('mousemove', updatePointer)
      document.addEventListener('resize', onWindowResize)
      document.addEventListener('wheel', accelAnimation)
      document.addEventListener('click', (e) => {
        changeColor({ r: Math.random(), g: 0, b: 1 })
      })
    }
  }, [])

  function changeColor(rgb) {
    const { r, g, b } = meshObj.material.emissive

    const red = (rgb.r - r) / 100
    const green = (rgb.g - g) / 100
    const blue = (rgb.b - b) / 100

    const interMin = setInterval(() => {
      meshObj.material.emissive.r += red
      meshObj.material.emissive.g += green
      meshObj.material.emissive.b += blue
    }, 10)

    setTimeout(() => {
      clearInterval(interMin)
    }, 999)
  }

  function updatePointer(e) {
    cursorX = e.pageX
    cursorY = e.pageY
  }

  function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight)

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    animate()
  }

  function normalizeAnimation() {
    speedGrl = 0.1
    speedObj = 0.2
  }

  function accelAnimation(e) {
    speedGrl = 2
    speedObj = 5
    setTimeout(normalizeAnimation, 500)
  }

  function scaleObjMin(e) {
    const interMin = setInterval(() => {
      scale -= 0.005
    }, 10)

    setTimeout(() => {
      clearInterval(interMin)
    }, 1000)
  }

  function scaleObjMax(e) {
    const inter = setInterval(() => {
      scale += 0.05
    }, 10)

    setTimeout(() => {
      clearInterval(inter)
    }, 1000)
  }

  function animate() {
    requestAnimationFrame(animate)

    const delta = clock.getDelta()

    shapeObj.rotation.x += speedObj * delta
    shapeObj.rotation.y += speedObj * delta

    for (let i = 0; i < scene.children.length; i++) {
      const object = scene.children[i]

      if (object instanceof THREE.Points) {
        object.rotation.y += delta * speedGrl
      }
    }

    /* move lookAt */
    /* let midPoint = widthScreen / 2;
    let positionX = ((cursorX - midPoint) * 100) / midPoint
    let cameraPositionX = positionX * totalMove;
    camera.position.x = cameraPositionX;
    camera.lookAt( scene.position ); */

    meshObj.scale.set(scale, scale, scale)

    /* move free */
    let midPoint = widthScreen / 2
    let midPointY = heightScreen / 2
    let positionX = ((cursorX - midPoint) * 100) / midPoint
    let positionY = ((cursorY - midPointY) * 100) / midPointY
    let cameraPositionX = positionX * totalMove
    let cameraPositionY = positionY * totalMove
    camera.position.x = cameraPositionX
    camera.position.y = cameraPositionY

    renderer.render(scene, camera)
  }
}
