const images = ["cows-7185276_1920.jpg", "donkeys-4340524_1920.jpg", "elephants-6176590_1920.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.append(bgImage);
