export function createAnimate(scene, camera, rendering, world, player)
{
    function animate()
    {
        // Boucle d'animation
        requestAnimationFrame(animate);

        // Mettre à jour le joueur
        player.update();

        // Mettre à jour le monde physique
        world.step(1 / 60);

        // Rendu
        rendering.render(scene, camera);
    }

    animate();
}