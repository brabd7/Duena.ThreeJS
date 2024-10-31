export function playerControls(player)
{
    forwardBackwardControls(player);
    rightLeftControls(player);
} 

function forwardBackwardControls(player)
{
    document.addEventListener('keydown', (event) => {
        switch (event.code) 
        {
            case "KeyW":
                player.forwardMove = true;
                break;
            case "KeyS": 
                player.backwardMove = true;
                break;
            default:
                break;
        }
    })

    document.addEventListener('keyup', (event) => {
        switch (event.code) {
            case "KeyW":
                player.forwardMove = false;
                break;
            case "KeyS":
                player.backwardMove = false;
                break;
            default:
                break;
        }
    });
}

function rightLeftControls(player)
{
    document.addEventListener('keydown', (event) => {
        switch (event.code) 
        {
            case "KeyQ":
                player.leftMove = true;
                break;
            case "KeyD": 
                player.rightMove = true;
                break;
            default:
                break;
        }
    })

    document.addEventListener('keyup', (event) => {
        switch (event.code) {
            case "KeyQ":
                player.leftMove = false;
                break;
            case "KeyD":
                player.rightMove = false;
                break;
            default:
                break;
        }
    });
}