document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
      
      // Validate the form fields
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const age = document.getElementById('number').value;
      const dropdown = document.getElementById('dropdown').value;
      const radio = document.querySelector('input[name="radio"]:checked');
      const interests = document.querySelectorAll('input[name="interests[]"]:checked');
      
      // Simple validation, you can add more complex validation as needed
      if (name === '' || email === '' || age === '' || dropdown === 'option0' || !radio || interests.length === 0) {
        alert('Please fill out all required fields.'); // Display an alert for validation error
        return;
      }
      
      // Form is valid, display a confirmation message (you can replace this with your desired action)
      const confirmationMessage = `
        Thank you for submitting the form!
        Name: ${name}
        Email: ${email}
        Age: ${age}
        State: ${dropdown}
        Gender: ${radio.value}
        Interests: ${Array.from(interests).map(interest => interest.value).join(', ')}
      `;
      alert(confirmationMessage);
      document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('survey-form');
        const printButton = document.getElementById('printButton');
      
        form.addEventListener('submit', function (e) {
          e.preventDefault(); // Prevent the default form submission behavior
      
          // Validate the form fields (same as before)
          // ...
      
          // Form is valid, collect the form data
          const formData = {
            Name: name,
            Email: email,
            Age: age,
            State: dropdown,
            Gender: radio.value,
            Interests: Array.from(interests).map(interest => interest.value).join(', '),
          };
      
          // Generate the PDF
          const doc = new jsPDF();
          doc.text('Survey Form Data', 10, 10);
          let yPos = 30;
      
          for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
              doc.text(`${key}: ${formData[key]}`, 10, yPos);
              yPos += 10;
            }
          }
      
          // Add a "Print" button on the PDF to allow users to print it
          doc.setProperties({
            title: 'Survey Form Data',
            subject: 'Survey Form Data',
            author: 'Your Name',
          });
      
          // Save the PDF to a file (optional)
          // doc.save('survey_form_data.pdf');
      
          // Open the PDF in a new window for viewing and printing
          const pdfDataUri = doc.output('datauristring');
          const pdfWindow = window.open();
          pdfWindow.document.write('<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe>');
        });
      
        // Handling the "Print" button
        printButton.addEventListener('click', function () {
          window.print();
        });
      });
      
      // You can also submit the form to a server using AJAX if needed
      
      // Clear the form fields (optional)
      form.reset();
    });
  });
  
