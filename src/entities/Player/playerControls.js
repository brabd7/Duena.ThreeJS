export function playerControls(player)
{
    forwardBackwardControls(player);
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