import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { playerControls } from "./playerControls";
import { playerMovements } from "./playerMovements";
import { EntityBody } from "../EntityBody";

export class Player {
    constructor(THREE, CANNON, world, camera, rendering)
    {
        this.THREE = THREE;
        this.CANNON = CANNON;
        this.world = world;
        this.camera = camera;
        this.rendering = rendering;

        this.playerBody = new EntityBody(this.CANNON, this.world);
        this.cameraControl = new PointerLockControls(this.camera, this.rendering.domElement);

        // Movements
        this.speedMove = 15;
        this.forwardMove = false;
        this.backwardMove = false;
        this.rightMove = false;
        this.leftMove = false;
        this.jumpForce = 5;
        this.jumpMove = false;
        this.slideMove = false;
        this.slideForce = 0.1;

        this.forwardVector3 = new this.THREE.Vector3();
        this.sideVector3 = new this.THREE.Vector3();

        // Contrôles du joueur
        playerControls(this);

        // Verrouiller le pointeur pour permettre au joueur de contrôler la caméra
        this.lockPointer();
    }

    update()
    {
        // Mouvements du joueur
        playerMovements(this);

        // Mettre à jour la caméra pour qu'elle suive le joueur
        this.cameraUpdate();
    }

    cameraUpdate()
    {
        this.camera.position.copy(this.playerBody.body.position);
    }

    lockPointer()
    {
        // Verrouiller le pointeur afin que la souris contrôle la caméra
        document.addEventListener('click', () => {
            this.cameraControl.lock();
        });
    }
}