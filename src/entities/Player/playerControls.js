export function playerControls(player)
{
    forwardBackwardControls(player);
    rightLeftControls(player);
    jumpControl(player);
    slideControl(player);
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

function jumpControl(player)
{
    document.addEventListener('keydown', (event) => {
        if (event.code == "Space" && !player.jumpMove)
        {
            player.jumpMove = true;
        }
    })
}

function slideControl(player)
{
    document.addEventListener('keydown', (event) => {
        if (event.code == "KeyC" && !player.slideMove)
        {
            player.slideMove = true;
        }
    })
}