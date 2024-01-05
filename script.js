function showAlert() {
  alert(
    "Normally this link would bring you to another website! It works. This is a testing link."
  );
}
function toggle(flavor) {
  const menuBlur = document.getElementById("menu-blur");
  menuBlur.classList.toggle("active");
  const modal = document.getElementById("modal");
  const flavorImage = document.getElementById("flavor-image");
  const flavorDescription = document.getElementById("flavor-description");

  // Set the image source based on the selected flavor
  if (flavor === "Caramel") {
    flavorImage.src = "./images/caramel.jpg";
    flavorDescription.textContent =
      "Coffee, milk and caramel come together for this sweet and foamy treat.";
  } else if (flavor === "Hazelnut") {
    flavorImage.src = "./images/hazelnut.jpg";
    flavorDescription.textContent =
      "This Hazelnut flavored coffee is a special blend of International coffee beans with a predominant Hazelnut flavor and subtle background notes of coconut.";
  } else if (flavor === "Espresso") {
    flavorImage.src = "./images/espresso.jpg";
    flavorDescription.textContent =
      "It's a process of brewing coffee and is instead made by forcing high-pressured hot water through very finely ground coffee beans.";
  } else if (flavor === "Cinnamon") {
    flavorImage.src = "./images/cinnamon.jpg";
    flavorDescription.textContent =
      "Cinnamon coffee adds a tasty and warming treat to any original pressed coffee.";
  } else if (flavor === "Mocha") {
    flavorImage.src = "./images/mocha.jpg";
    flavorDescription.textContent =
      "Mocha is a coffee bean and is also a beverage made by mixing coffee and chocolate.";
  } else if (flavor === "Chocolate") {
    flavorImage.src = "./images/chocolate.jpg";
    flavorDescription.textContent =
      "It's a simple drink that combines creamy dark chocolate and freshly brewed coffee.";
  } else if (flavor === "Donut") {
    flavorImage.src = "./images/donut.jpg";
    flavorDescription.textContent =
      "Doughnut, a small ring of sweet leavened dough that has been fried or sometimes baked.";
  } else if (flavor === "Cherry Pie") {
    flavorImage.src = "./images/cherrypie.jpg";
    flavorDescription.textContent =
      "Cherry pie is a pie baked with a cherry filling. Traditionally, cherry pie is made with sour cherries rather than sweet cherries";
  } else if (flavor === "Cheesecake") {
    flavorImage.src = "./images/cheesecake.jpg";
    flavorDescription.textContent =
      "Cheesecake is a dessert made with a soft fresh cheese eggs, and sugar.";
  } else if (flavor === "Cinnamon Buns") {
    flavorImage.src = "./images/cinnamon-roll.jpg";
    flavorDescription.textContent =
      "An easy cinnamon roll recipe made from scratch with no yeast, proofing, or kneading necessary! Just the thing for a quick breakfast treat.";
  } else if (flavor === "Cake") {
    flavorImage.src = "./images/cake.jpg";
    flavorDescription.textContent =
      "Cake is a flour confection made from flour, sugar, and other ingredients and is usually baked.";
  } else if (flavor === "Cupcakes") {
    flavorImage.src = "./images/cupcake.jpg";
    flavorDescription.textContent =
      "Cupcakes are small, tasty snack cakes that are favored for their portability and portion-control.";
  }

  modal.classList.toggle("active");
}

let number = 0;
function increment() {
  document.getElementById("value").value = ++number;
}
function decrement() {
  if (number > 0) {
    document.getElementById("value").value = --number;
  }
}

const reset = function () {
  number = 0;
  document.getElementById("value").value = 0;
}

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  reset();
});

function addtoCart() {
    console.log("Added to cart", number);
}