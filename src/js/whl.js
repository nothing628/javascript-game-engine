import * as WHS from "whs";
import * as THREE from "three";

if (module.hot) {
  module.hot.accept();
}

const app = new WHS.App([
  new WHS.ElementModule(), // Apply to DOM.
  new WHS.SceneModule(), // Create a new THREE.Scene and set it to app.

  new WHS.DefineModule(
    "camera",
    new WHS.PerspectiveCamera({
      // Apply a camera.
      position: new THREE.Vector3(0, 10, 25),
    })
  ),

  new WHS.RenderingModule({ bgColor: 0x162129 }), // Apply THREE.WebGLRenderer
  new WHS.ResizeModule(), // Make it resizable.
]);

app.manager.get("camera").native.lookAt({ x: 0, y: 0, z: 0 });

new WHS.Box({
  // Create sphere comonent.
  geometry: [9, 9, 9],
  position: [0, 0, 0],

  // material: material,
  material: new THREE.MeshPhongMaterial({
  color: 0xF2F2F2
  })
}).addTo(app);

// lights
new WHS.AmbientLight({
  light: {
    intensity: 0.3,
  },
}).addTo(app);

new WHS.PointLight({
  position: [10, 10, 10],
}).addTo(app);

app.start(); // Run app.
