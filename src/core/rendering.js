export function createRendering(THREE)
{
    const rendering = new THREE.WebGLRenderer();
    rendering.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rendering.domElement);

    // Pour mettre la couleur bleu ciel en fond
    rendering.setClearColor(new THREE.Color('skyblue'));

    return rendering;
}