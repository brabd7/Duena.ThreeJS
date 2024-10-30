export class EntityBody {
    constructor(CANNON, world)
    {
        this.CANNON = CANNON;
        this.world = world;

        // Le corps physique du joueur
        this.body = new CANNON.Body({
            mass: 1,
            position: new CANNON.Vec3(0, 10, 0),
            shape: new CANNON.Sphere(1)
        })

        // L'ajouter au monde
        this.world.addBody(this.body);
    }
}