//radius input and circumference display

/* HTML BODY =>
  
  <h1 id="myh1">ENTER THE RADIUS OF CIRCLE</h1>
    <input type="text" id="myText"><br><br>
    <label>RADIUS: </label>
    <button id="mysubmit">submit</button>
     <script src="index.js"></script>
     <h3 id="myh3"></h3>
*/

const PI = 3.14159; //const
let radius;
let circumference;


document.getElementById("mysubmit").onclick=function(){
  radius=document.getElementById("myText").value
  radius=Number(radius);//string->number
  circumference = 2* PI * radius;//formula
  document.getElementById("myh3").textContent=circumference + `cm`;
  
}