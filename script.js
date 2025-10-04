// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  // TODO: Write your code here
  const name=prompt("What's your name?");

  if(!name) {
    render("<h1>Please enter your name.</h1>");
    return;
  } 
    render("<h5>Hello, " + name + "!</h5>");
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers () {
  // TODO: Write your code here
//dont do this one
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  // TODO: Write your code here
  const h= new Date().getHours();

  let message='';

  if(h<12) {
    message='Good morning!';
  } else if (h>=12 && h<18) {
    message = 'Good afternoon!';
  } else {
    message = 'Good evening!';
  }

  render(`<p>${message}</p>`);
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  // TODO: Write your code here
const min=parseInt(prompt("Enter a minimum number"));
  const max=parseInt(prompt("Enter a maximum number"));

if(isNaN(min) || isNaN(max)) {
  render("<h3>Please enter the numbers</h3>");
  return;
} 

if(min>=max) {
  render("<h3>Please make sure your minimum number is less than your maximum number</h3>");
  return;
}

const randomNumber=Math.floor(Math.random()*(max-min+1)+min);
render(randomNumber);
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  // TODO: Write your code here
render("<p>Output Cleared</p>");
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/

document.getElementById('btnTitle').addEventListener('click', title)
document.getElementById('btnColor').addEventListener('click', color)
document.getElementById('btnBgColor').addEventListener('click', bgColor)
document.getElementById('btnDouble').addEventListener('click', double)


function title() {
  //change page title
  const h1=document.getElementById('h1');
  const changeTitle='🍂 🍂 🍂 🍂 🍂 Happy Fall! 🍂 🍂 🍂 🍂 🍂 🍂';

  h1.innerHTML=`${changeTitle}`;
}


function color() {
  const colorNames=['red','green','orange','blue','purple','#431407'];
  // let i=Math.floor(Math.random()*colorNames.length);

  for(let i=0; i<colorNames.length; i++) {
      render(`<p style=\"color:${colorNames[i]};\">Output will appear here…</p>`);
  }
}

function bgColor() {
  const bgs=['red','green','blue','purple','white','orange','yellow'];
    let i=Math.floor(Math.random()*bgs.length);
    document.getElementById('out').classList.remove('bg-light');
    document.getElementById('out').style.backgroundColor=bgs[i];
}


function double() {
  const number=parseInt(prompt("Enter any number"));

  if(isNaN(number)) {
render("<h3>Please enter a number</h3>");
  return;
  }

  const doubled=number*2;
  render(`<p>Your doubled number: ${doubled}</p>`);
}
