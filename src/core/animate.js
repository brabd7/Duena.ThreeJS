export function createAnimate(scene, camera, rendering)
{
    function animate()
    {
        // Boucle d'animation
        requestAnimationFrame(animate);

        // Rendu
        rendering.render(scene, camera);
    }

    animate();
}