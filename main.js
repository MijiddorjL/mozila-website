
 // Use a CSS selector to identify an element
 const foxImage = document.querySelector('img');
 
foxImage.onclick = () => {
     alert('Ouch! Stop poking me!');
  const mySrc = foxImage.getAttribute("src");
  if (mySrc === "Firefox-icon.png") {
    foxImage.setAttribute("src", "fox.png");
  } else {
    foxImage.setAttribute("src", "Firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};


      function tend() {
        document.getElementById('my').style.visibility='visible';
      }
      function tn() {
        document.getElementById('my').style.visibility='hidden';
      }

