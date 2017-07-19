
var numSquares=6;
var colors=generateRandomColor(numSquares);
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var easyBtn=document.querySelector("#easyBtn");
easyBtn.addEventListener("click",function(){
	numSquares=3;
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
colors=generateRandomColor(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
//hide rest three boxes
for(var i=0;i<squares.length;i++)
{
	if(colors[i])
	{
		squares[i].style.backgroundColor=colors[i];
	}
	else
	{
		squares[i].style.display="none";
	}
}
});
var hardBtn=document.querySelector("#hardBtn");
hardBtn.addEventListener("click",function(){
	numSquares=6;
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
colors=generateRandomColor(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
//hide rest three boxes
for(var i=0;i<squares.length;i++)
{
	
		squares[i].style.backgroundColor=colors[i];
	    squares[i].style.display="block";//to display hidden three boxes
}
});
var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function(){
    //generate new colours
         colors=generateRandomColor(numSquares);
    //pick a new random colour from arr
    pickedColor=pickColor();
    //change colour display to matched picked colour
    colorDisplay.textContent=pickedColor;
    this.textContent="New Colour!!";
    //change colour of squares
    messageDisplay.textContent=" ";
  for(var i=0;i<squares.length;i++)
  {
  	squares[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor="steelblue";
});
for(var i=0;i<squares.length;i++)
{
	//add inintial colour to squared
	squares[i].style.backgroundColor=colors[i];
	//add click listener to squares
	squares[i].addEventListener("click",function(){
	//grab colour of clicked item
	var clickedColour=this.style.backgroundColor;
	//compare colour to picked colour
	if(clickedColour===pickedColor)
	{
		
		messageDisplay.textContent="Correct!!";
		resetButton.textContent="Play Again!!";
		changeColor(clickedColour);
	//	reset();
	}
	else
	{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent="Try Again";
	}
	{

	}
	});
}
function changeColor(color)
{
	//loop through all colour
	for(var i=0;i<squares.length;i++)
	{
      squares[i].style.backgroundColor=color;
	}
	//change colour to given colour
}
function pickColor(){ 
	var random=Math.floor(Math.random() * colors.length);
	return colors[random]; 
} 
function generateRandomColor(num)
{
	//make an arr
	var arr=[];
	//addnum random colours
	for(var i=0;i<num;i++)
	{
		//get random colour and push into arr
		arr.push(randomColor());
	}
	return arr;
}
function randomColor()
{
	//pick a red from 0-255
	var r=Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g=Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 

}