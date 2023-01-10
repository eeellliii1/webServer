var video = document.getElementById("richardTumble");
var button = document.getElementById("button");

button.addEventListener("click", 
    function()
    {
        button.style.display = "none";
        video.play();
    });
