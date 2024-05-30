const inputField = document.getElementById("myInput");

inputField.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    // Caps Lock is on
    console.log("Caps Lock is ON");
    // Display warning to the user or take other actions
  } else {
    // Caps Lock is off
    console.log("Caps Lock is OFF");
  }
});

// history.back();
// history.pushState('hello', 'Myhistory', 'https://www.google.co.in/')
// console.log(inputField.my);