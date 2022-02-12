var gl;
var theta;
var thetaLoc;
var color;
var colorLoc;
var direction = false;
var translationLocX, translationX = 0;
var translationLocY, translationY = 0;
var scaleLoc, scale = 1;
var delay = 200;
var red = 0.0, green = 0.0, blue = 0.0;






window.onload = function init() {
	const canvas = document.querySelector("#glcanvas");
	// Initialize the GL context
	gl = canvas.getContext("webgl");
	// Only continue if WebGL is available and working
	if (!gl) {
		alert("Unable to initialize WebGL. Your browser or machine may not support it.");
		return;
	}
	
	
	
	
	
	
	var program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);

function menu_listener(event) {
	switch (event.target.value) {
		case '0' :
			direction=!direction;
			break;
		case '1':
			delay /= 2.0;
			break;
		case '2':
			delay *= 2.0;
			break;
	}

}

	var myButton = document.getElementById("DirectionButton");
	myButton.addEventListener("click",direction_button_listener);

	var m = document.getElementById("mymenu");
	m.addEventListener("click", menu_listener);
	colorLoc = gl.getUniformLocation(program, "color");




document.getElementById("boyut").oninput=boyut;


document.getElementById("sliderblue").oninput = sliderblue;
	document.getElementById("sliderred").oninput = sliderred;
	document.getElementById("slidergreen").oninput = slidergreen;
	
	document.getElementById("slidepink").onclick = sliderpink;
	document.getElementById("slidepurple").onclick = sliderpurple;
	document.getElementById("slidegrey").onclick = slidergrey;
	
	
	document.getElementById("speed").oninput=speed;
	

	

document.getElementById("sarıplan").onclick = sarıplan;
	document.getElementById("kırmızıplan").onclick = kırmızıplan;
	document.getElementById("yeşilplan").onclick = yeşilplan;
	document.getElementById("maviplan").onclick = maviplan;
	document.getElementById("pembeplan").onclick = pembeplan;
	document.getElementById("morplan").onclick =morplan;

	

	document.getElementById("Red").onclick = sliderRed;
	document.getElementById("Green").onclick = slideGreen;
	document.getElementById("Blue").onclick = slideBlue;
	document.getElementById("red").onclick = sliderRedd;
	document.getElementById("green").onclick = slideGreenn;
	document.getElementById("blue").onclick = slideBluee;
	
	
	color = [red, green,blue];


	scaleLoc = gl.getUniformLocation(program, "scale");
	document.getElementById("ScaleBigger").onclick = ScaleBigger ;
	document.getElementById("ScaleSmaller").onclick =  ScaleSmaller ;

	translationLocX = gl.getUniformLocation(program, "translationX");
	document.getElementById("slideX").oninput = translationXlist;


	translationLocY = gl.getUniformLocation(program, "translationY");
	document.getElementById("slideY").oninput = translationYlist ;
	
	
	

	var vertices = new Float32Array([
		//D harfi
		
		-0.4, 0.5,
		-0.2, 0.5,
		-0.4, -0.5,
		-0.2, -0.5,
		
		-0.2, 0.5,
		-0.2, 0.3,
		0.1, 0.2,
		0.0, 0.2,
		
		0.1, 0.2,
		0.0, 0.2,
		0.1, -0.2,
		0.0, -0.2,
		
		-0.2, -0.5,
	    -0.2, -0.3,
		0.1, -0.2,
		0.0, -0.2,
		
	//E harfi

		0.2, 0.5,
		0.4, 0.5,
		0.2, -0.5,
		0.4, -0.5,

		0.4, 0.5,
		0.7, 0.5,
		0.4, 0.3,
		0.7, 0.3,
		
		0.4, 0.1,
		0.7, 0.1,
		0.4, -0.1,
		0.7, -0.1,
		
		0.4,-0.1,
		0.7,-0.1,
		0.7,0.1,
		
		0.4, -0.3,
		0.7, -0.3,
		0.4, -0.5,
	     
		
		0.4, -0.5,
		0.7, -0.5,
		0.7, -0.3,
		
		
		
		
	
		
	
	   
		
		

		

		

		

		

		

	]);

	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

	// Associate out shader variables with our data buffer
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);

	thetaLoc = gl.getUniformLocation(program, "theta");
	theta = 0;

	window.addEventListener("keydown", keyboard_func, true);
	// Set clear color to black, fully opaque
	gl.clearColor(1.0, 1.0 ,1.0, 1.0);
	requestAnimFrame(render);
};

function render() {
	// Clear the color buffer with specified clear color
	setTimeout(function () {
		gl.clear(gl.COLOR_BUFFER_BIT);
		theta += (direction ? -0.1 : 0.1);
		gl.uniform1f(thetaLoc, theta);
		gl.uniform3fv(colorLoc, color);
		gl.uniform1f(translationLocX, translationX);
		gl.uniform1f(translationLocY, translationY);
		gl.uniform1f(scaleLoc, scale);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
		gl.drawArrays(gl.TRIANGLES, 1, 3);
		gl.drawArrays(gl.TRIANGLES, 4, 3);
		gl.drawArrays(gl.TRIANGLES, 5, 3);
		gl.drawArrays(gl.TRIANGLES, 8, 3);
		gl.drawArrays(gl.TRIANGLES, 9, 3);
		gl.drawArrays(gl.TRIANGLES, 12, 3);
		gl.drawArrays(gl.TRIANGLES, 13, 3);
		gl.drawArrays(gl.TRIANGLES, 16, 3);
		gl.drawArrays(gl.TRIANGLES, 17, 3);
		gl.drawArrays(gl.TRIANGLES, 20, 3);
		gl.drawArrays(gl.TRIANGLES, 21, 3);
		gl.drawArrays(gl.TRIANGLES, 24, 3);
		gl.drawArrays(gl.TRIANGLES, 27, 3);
		gl.drawArrays(gl.TRIANGLES, 28, 3);
		gl.drawArrays(gl.TRIANGLES, 31, 3);
		gl.drawArrays(gl.TRIANGLES, 34, 3);
		requestAnimFrame(render);
	}, delay);
}




function color_listener(event){
	const r = parseInt(event.target.value.substr(1, 2), 16);
	const g = parseInt(event.target.value.substr(3, 2), 16);
	const b = parseInt(event.target.value.substr(5, 2), 16);
	color = [r / 255, g / 255, b / 255];
} 



function sarıplan() {
		gl.clearColor(1.0, 1.0, 0.0, 1.0);
}
	
	function kırmızıplan() {
		gl.clearColor(1.0, 0.0, 0.0, 1.0);
}
function morplan() {
		gl.clearColor(0.3, 0.3, 1.0, 1.0);
}
function yeşilplan() {
		gl.clearColor(0.0, 1.0, 0.0, 1.0);
}
function maviplan() {
		gl.clearColor(0.0, 0.0, 1.0, 1.0);
}

function pembeplan() {
		gl.clearColor(1.0, 0.0, 0.9, 1.0);
}



 
 
 

function sliderRed() {red=red+0.1;
color=[red,green,blue]; }
function slideGreen() { green = green+0.1;
color=[red,green,blue]; };
function slideBlue() { blue=blue+0.1;
color=[red,green,blue];
 };




function sliderRedd() {red=red-0.1;
color=[red,green,blue]; }
function slideGreenn() { green = green-0.1;
color=[red,green,blue]; };
function slideBluee() { blue=blue-0.1;
color=[red,green,blue];
 };




function slidergrey() {
color=[0.8,0.8,0.8]; }
function sliderpink() { 
color=[1.0,0.0,0.9]; };
function sliderpurple() {
color=[0.3,0.3,1.0];
 };























function sliderred() {red=this.value;
color=[red,green,blue]; }
function slidergreen() { green = this.value;
color=[red,green,blue]; };
function sliderblue() { blue=this.value;
color=[red,green,blue];
 };
 
 
 
 
 
 

 

 
 
 
 
function boyut() {
	if(this.value>5) {
scale=1;
scale=scale+this.value/10;
	}
	else 
		scale=0.5;
scale=scale+this.value/10;
};


 function speed () {
if(this.value==1)
	delay=200;
else {
delay=200;
	 delay=delay/(this.value*3);
      
}

 };
function direction_button_listener () { 
	direction = !direction;
	};
 
 
 
 

 


function keyboard_func(event) {          
	if (event.defaultPrevented) {
		return; 
	}
	switch (event.key) {
		case "y":
		color = [0.1, 1.0,0.0];
		break;
		case "m":
		color = [0.1, 0.0,1.0];
       break;
	    case "k":
		color = [1.0, 0.0,0.0];
		break;
		case "s": 
		translationY -= 0.1;
			break;
		case "w": 
	     translationY += 0.1;
			break;
		case "a": 
	       translationX -= 0.1;
			break;
		case "d" : 
		  translationX += 0.1;
			break;
			  case "p":
			direction = !direction;
			break;
		case "+": 
		scale=scale+0.1;
			break;
			case "-": 
			scale=scale-0.1;
			break;
			default:
			return; 
	}

	

}




function translationXlist() { translationX = this.value; };
function translationYlist() { translationY = this.value; };
function ScaleBigger() { scale += 0.1; };
function ScaleSmaller() { scale = (scale - 0.1) < 0.2 ? 0.2 : scale - 0.1; };




