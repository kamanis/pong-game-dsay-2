//Global Variabes
//variable for loading the first image
let firstbackimg;
//adding gameState
let gameState;
//variable for loading the background image of create and join room
let main;
//variable for join button
let joinbut;
//variable for creat room button
let createbut;
function setup() {
    createCanvas(windowWidth, windowHeight);
    gameState = "select";
    joinbut=new Button("images/join.png",width-width/4,height/2,width/3,height/2);
    createbut=new Button("images/create.png",width/4,height/2,width/3,height/2);
}

function preload() {
    //loading the first welcome image
    firstbackimg = loadImage("images/first.png");
    
    //background where create and join room is there
    main=loadImage("images/backdrop.png");
   
}

function draw() {
    background(255);
   //ig gameState is select then
    if (gameState === "select") {
        push();
        imageMode(CENTER);
         //IMAGE FOR THE FIRST WELOCOME SCREEN
        image(firstbackimg, width / 2, height / 2, width - width / 2, height - height / 2);
        pop();
        push();
        textFont(BOLD);
        textAlign(CENTER);
        textSize(40);
        //first screen text tap for mobile ond press ok for tv
        text("Tap to Begin for Mobile", width / 2, height - height / 5);
        text("Press Center Button for TV", width / 2, height / 5);
        pop();
    }
    if(gameState==="android"){
        push();
        imageMode(CENTER);
        image(main,width/2,height/2,width,height);
        createbut.display();
        joinbut.display();
        pop();
    }
    if(gameState==="tv"){
        push();
        imageMode(CENTER);
        image(main,width/2,height/2,width,height);
        createbut.display();
        joinbut.display();
        pop();
    }
}

function keyPressed() {
    //RELOADING THE PAGE ON ENTER FOR MY EASE
    console.log(keyCode);
    if (keyCode === 13) {
        location.reload();
    }
    //making gameState tv after keypress
    //remember to play sound when player chooses his device as a tv
    //change keyCode as per the tv
    if (keyCode === 32 && gameState === "select") {
        gameState = "tv";
    }
}

function mousePressed() {
    if(gameState==="select"){
        gameState="android";
    }
}