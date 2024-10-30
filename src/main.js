// Imports
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { createScene } from './core/scene';
import { createWorld } from './core/world';
import { createCamera } from './core/camera';
import { createRendering } from './core/rendering';
import { createAnimate } from './core/animate';
import { autoResize } from './core/autoResize';
import { addStaticObjects } from './objects/addStaticObjects';
import { Player } from './entities/Player/Player';

const scene = createScene(THREE);
const camera = createCamera(THREE);
const rendering = createRendering(THREE);
const world = createWorld(CANNON);

// Notre joueur
const player = new Player(THREE, CANNON, world, camera, rendering);

// Ajouter les objets statiques
addStaticObjects(THREE, CANNON, scene, world);

// Boucle d'animation de notre projet
createAnimate(scene, camera, rendering, world, player);

// autoResize
autoResize(rendering, camera);