export function playerMovements(player)
{
    forwardBackwardMovement(player);
    rightLeftMovement(player);
    jumpMovement(player);
    slideMovement(player);
}

function forwardBackwardMovement(player)
{
    // Récupérer la direction dans laquelle le joueur regarde avec son pointeur
    player.cameraControl.getDirection(player.forwardVector3);

    if (player.forwardMove)
    {
        player.playerBody.body.velocity.x = player.forwardVector3.x * player.speedMove;
        player.playerBody.body.velocity.z = player.forwardVector3.z * player.speedMove;
    }
    else if (player.backwardMove)
    {
        player.playerBody.body.velocity.x = -player.forwardVector3.x * player.speedMove;
        player.playerBody.body.velocity.z = -player.forwardVector3.z * player.speedMove;
    }
    else
    {
        player.playerBody.body.velocity.x = 0;
        player.playerBody.body.velocity.z = 0;
    }
}

function rightLeftMovement(player)
{
    // On doit calculer la droite et la gauche en fonction de la direction dans
    // laquelle regarde le joueur car elle change tout le temps,
    // grâce à un produit vectoriel.
    player.sideVector3.crossVectors(player.forwardVector3, new player.THREE.Vector3(0, 1, 0)).normalize();

    if (player.rightMove)
    {
        player.playerBody.body.velocity.x += player.sideVector3.x * player.speedMove;
        player.playerBody.body.velocity.z += player.sideVector3.z * player.speedMove;
    }
    else if (player.leftMove)
    {
        player.playerBody.body.velocity.x -= player.sideVector3.x * player.speedMove;
        player.playerBody.body.velocity.z -= player.sideVector3.z * player.speedMove;
    }
}

function jumpMovement(player)
{
    if (player.jumpMove && player.playerBody.body.position.y <= 1)
    {
        player.playerBody.body.velocity.y = player.jumpForce;
    }
    player.jumpMove = false;
}

function slideMovement(player) {
    if (player.slideMove && player.playerBody.body.position.y <= 1) {
        console.log('s')
    }
    player.slideMove = false;
}