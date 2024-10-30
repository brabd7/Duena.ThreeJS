export function playerMovements(player)
{
    forwardBackwardMovement(player)
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