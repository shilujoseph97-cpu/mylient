document.addEventListener("DOMContentLoaded", function () {

    const astronaut = document.querySelector(".astronaut");

    console.log("Astronaut found:", astronaut);

    if (astronaut) {
        astronaut.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(-100px)" },
                { transform: "translateY(0px)" }
            ],
            {
                duration: 2000,
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    }

});