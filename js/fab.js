function setup() {
createCanvas(window.innerWidth, window.innerHeight);
	collideDebug(true);

}
function draw() {

background('white');
blendMode(DIFFERENCE);
fill('yellow');
text("The mode of abstraction produced in play does not respect the law of the excluded middle. Its logic is that of mutual inclusion. Two different logics are packed into the situation. Both remain present in their difference and cross-participate in their performative zone of indiscernibility. Combat and play come together—and their coming-together makes three. There is one, and the other—and the included middle of their mutual influence. The zone of indiscernibility that is the included middle does not observe the sanctity of the separation of categories, nor respect the rigid segregation of arenas of activity. (6)", 0, 0, 2000, 200);
fill('yellow');
noStroke();
rect(0, 0, 100, 1000);


ellipse(mouseX,mouseY,500,45);

}
