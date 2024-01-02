function showAlert() {
    alert("Normally this link would bring you to another website! It works. This is a testing link.");
}
function toggle(flavor) {
    const menuBlur = document.getElementById("menu-blur");
    menuBlur.classList.toggle('active');
    const modal = document.getElementById("modal");
    const flavorImage = document.getElementById("flavor-image")

    // Set the image source based on the selected flavor
    if (flavor === 'French Vanilla') {
        flavorImage.src = "./images/french-vanilla.jpg";
    } else if (flavor === 'Caramel Macchiato') {
        flavorImage.src = "./images/caramel-macchiato.jpg";
    }

    modal.classList.toggle('active');
}