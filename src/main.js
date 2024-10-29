// Imports
import * as THREE from 'three';
import { createScene } from './core/scene';
import { createCamera } from './core/camera';
import { createRendering } from './core/rendering';
import { createAnimate } from './core/animate';
import { autoResize } from './core/autoResize';

const scene = createScene(THREE);
const camera = createCamera(THREE);
const rendering = createRendering(THREE);

// Boucle d'animation de notre projet
createAnimate(scene, camera, rendering);

// autoResize
autoResize(rendering, camera);