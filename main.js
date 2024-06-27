let song1, song2;
let video;
let canvas;

function preload() {
    song1 = loadSound('song1.mp3'); 
    song2 = loadSound('song2.mp3');
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide(); 
}

function draw() {
    image(video, 0, 0, width, height);
}


