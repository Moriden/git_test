const RevealButton = document.querySelector(".reveal-food");
const hiddenContent = document.querySelector(".hidden-food");


function revealContent() {
    if (hiddenContent.classList.contains("reveal-food"))
    {
        hiddenContent.classList.remove("reveal-food")
    }
    else {
        hiddenContent.classList.add("reveal-food");
    }
}

RevealButton.addEventListener("click", revealContent);


 