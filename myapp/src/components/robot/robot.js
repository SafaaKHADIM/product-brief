import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import obj from '../../littlerobot/Little Robot.obj';
OBJLoader(THREE);
class Robot extends Component{











async  componentDidMount(){
    this.THREE = THREE;
    const loader = new this.THREE.OBJLoader();
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      750,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 15

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#FFFFFF')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)







         loader.load(obj, ( object ) =>{
                                           this.scene.add( object );
                                           object.name="my_robot";
                                           console.log("my_robot ",this.scene.getObjectByName('my_robot'));
                                           object.position.x = 0;
                                           object.position.y = 0;
                                           object.position.z = 0;
                                           this.renderer.render(this.scene, this.camera)
                                          },
                                      function ( xhr ) {
                                          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                                         },
                                      function ( error ) {
                                          console.log( 'An error happened' );
                                         }
                                      );



}











componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

//start
 start = () => {
    if (!this.frameId ) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }


//stop
stop = () => {
    cancelAnimationFrame(this.frameId)
  }

//animate
animate = () => {
   // this.cube.rotation.x += 0.01
   // this.cube.rotation.y += 0.01
   this.renderScene()
  // this.frameId = window.requestAnimationFrame(this.animate)
 }


//renderscene
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}


render(){
    return(
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default Robot
