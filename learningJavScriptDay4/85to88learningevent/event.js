document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ContactUs');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting in the traditional way
  
      // Get the form field values
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Log the values to the console (or handle them as needed)
      console.log('Name:', name);
      console.log('Age:', age);
      console.log('Email:', email);
      console.log('Message:', message);
   SubmitEvent;
      // You can now use these values as needed, such as sending them to a server
    });
  });
  