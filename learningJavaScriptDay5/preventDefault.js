/**
 * The preventDefault method in JavaScript is used to prevent the default action
 *  of an event from occurring. 
 * This method can be particularly useful when you want to stop the browser's 
 * default behavior in response to certain events, such as clicks, 
 * form submissions, keyboard presses, etc.
 */

document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the form from submitting
      console.log('Form submission prevented');
});