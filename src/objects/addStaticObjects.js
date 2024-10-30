// Imports des objets statiques
import { createFloor } from "./statics/floor";

export function addStaticObjects(THREE, CANNON, scene, world)
{
    createFloor(THREE, CANNON, scene, world);
}