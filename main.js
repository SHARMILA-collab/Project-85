var canvas= document.getElementById ("my_canvas");

ctx= canvas.getContext ("2d");
car_width= 120;
car_height= 70;
background_image= "racetrack.jpg";
car_image= "car1.png";
car_x= 10;
car_y= 10;


function add() {
    background_imgtag= new Image();
    background_imgtag.onload= uploadBackground;
    background_imgtag.src= background_image;

    car_imgtag= new Image();
    car_imgtag.onload= uploadcar;
    car_imgtag.src= car_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadcar() {
    ctx.drawImage(car_imgtag, car_x, car_y, car_width, car_height);

}

window.addEventListener ("keydown", my_keydown);

function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log (keyPressed);

    if (keyPressed=='37') {
        left();
        console.log ("left arrow key");
    }

    if (keyPressed=='38') {
        up();
        console.log ("up arrow key");
    }

    if (keyPressed=='39') {
        right();
        console.log ("right arrow key");
    }

    if (keyPressed=='40') {
        down();
        console.log ("down arrow key");
    }

    if(car_x > 700) {
        console.log("Car1 Won!")
        document.getElementById('game_status').innerHTML = "Car 1 Won!!";
    }
}

function up() {
    if (car_y>=0) {
        car_y= car_y-10;
        console.log("when up arrow is pressed, x="+ car_x+" y="+ car_y);
        uploadBackground();
        uploadcar();
    }
}

function down() {
    if (car_y<=500) {
        car_y= car_y+10;
        console.log("when down arrow is pressed, x="+ car_x+" y="+ car_y);
        uploadBackground();
        uploadcar();
    }
}

function left() {
    if (car_x>=0) {
        car_x= car_x-10;
        console.log("when left arrow is pressed, x="+ car_x+" y="+ car_y);
        uploadBackground();
        uploadcar();
    }
}

function right() {
    if (car_x<=700) {
        car_x= car_x+10;
        console.log("when right arrow is pressed, x="+ car_x+" y="+ car_y);
        uploadBackground();
        uploadcar();
    }

}

