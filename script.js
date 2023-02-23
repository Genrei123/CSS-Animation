const message = document.querySelector(".message");
const gauge = document.querySelector(".gauge");

const messages = ["STAND BY", "FLIGHT MODE"];
let times_clicked = 0;

gauge.addEventListener("click", () => {

    times_clicked += 1;

    if (times_clicked >= 2)
    {
        
        times_clicked = 0;
    }

    message.innerHTML = messages[times_clicked];
 
    if (times_clicked === 0)
    {
        let wings = document.getElementById("torso_wing");
        wings.style.opacity = "0";
        let helmet = document.getElementById("head_cover");
        helmet.style.opacity = "0";
        let image = document.getElementById("image")
        image.style.opacity = "0";
    }

    if (times_clicked === 1)
    {
        let wings = document.getElementById("torso_wing");
        wings.style.opacity = "1";
        let helmet = document.getElementById("head_cover");
        helmet.style.opacity = ".9";
        let image = document.getElementById("image")
        image.style.opacity = "1";
    }

});




