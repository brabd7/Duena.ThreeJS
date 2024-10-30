export function createFloor(THREE, CANNON, scene, world)
{
    // SOL VISUEL
    const geometry = new THREE.PlaneGeometry(17, 50);
    const material = new THREE.MeshBasicMaterial();
    const floorMesh = new THREE.Mesh(geometry, material);
    floorMesh.rotation.x = -Math.PI / 2;
    scene.add(floorMesh);

    // SOL PHYSIQUE
    const floorBody = new CANNON.Body({ mass: 0 });
    const shape = new CANNON.Plane();
    floorBody.addShape(shape);
    floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(floorBody);
}