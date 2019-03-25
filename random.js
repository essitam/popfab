// let mobilenet;

// let img;
// const classifier = ml5.imageClassifier('MobileNet', modelReady());

var imgArr = ["image001.png","image002.jpg", "image003.png", "image004.png", "image005.png", "image006.png", "image007.jpg", "picture001.jpg", "picture002.jpg", "picture003.jpg", "picture004.jpg", "picture005.png",
"hijacked001.png", "hijacked002.jpg", "hijacked003.png", "hijacked004.jpg", "hijacked005.png", "hijacked006.jpg", "hijacked007.png", "hijacked008.jpg", "hijacked009.jpg", "hijacked010.jpg", "hijacked011.jpg",
"hijacked012.jpg", "hijacked013.jpg", "hijacked014.jpg", "hijacked015.jpg", "hijacked016.jpg", "hijacked017.jpg",
];



// function modelReady() {
//   console.log('Model is ready!!!');
//   mobilenet.predict(img[0], gotResults);
// }

// function imageReady() {
//   image(img, 0, 0, width, height);
// }

// function gotResults(error, results) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(results);
//     let label = results[0].className;
//     let prob = results[0].probability;
    
//   }
// }

function displayImg(){
    var num = Math.floor(Math.random() * (imgArr.length));
    document.canvas.src="img/"+imgArr[num];
}
