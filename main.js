canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;
car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_carImage = "racing.png";
function add() {
backgroundImage_tag = new Image();
backgroundImage_tag.onload = uploadBackground_car;
backgroundImage_tag.src = background_carImage;
car1Image_tag = new Image();
car1Image_tag.onload = uploadCar1_white;
car1Image_tag.src = car1_image;
car2Image_tag = new Image();
car2Image_tag.onload = uploadCar2_green;
car2Image_tag.src = car2_image;
}
function uploadBackground_car() {
ctx.drawImage(backgroundImage_tag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1_white() {
ctx.drawImage(car1Image_tag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2_green() {
ctx.drawImage(car2Image_tag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == "38"){
car1_up();
console.log("up arrow key");
}
if(keyPressed == "40"){
car1_down();
console.log("down arrow key");
}
if(keyPressed == "37"){
car1_left();
console.log("left arrow key");
}
if(keyPressed == "39"){
car1_right();
console.log("right arrow key");
}
if(keyPressed == "87"){
car2_w();
console.log("key w");
}
if(keyPressed == "65"){
car2_a();
console.log("key a");
}
if(keyPressed == "84"){
car2_s();
console.log("key s");
}
if(keyPressed == "69"){
car2_d();
console.log("key d");
}
}