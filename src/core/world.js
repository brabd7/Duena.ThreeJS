export function createWorld(CANNON)
{
    const world = new CANNON.World();
    world.gravity.set(0, -9.807, 0);
    return world;
}