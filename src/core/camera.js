export function createCamera(THREE)
{
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 150);
    camera.position.set(0, 1, 0);
    return camera;
}