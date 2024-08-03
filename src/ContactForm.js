import React, { useState } from 'react';
import './ContactForm.css'; // Make sure to include your CSS

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Handle changes in the textarea
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setStatus('Sending...'); // Set status to indicate that the message is being sent

    try {
      // Perform the fetch request to the serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
        body: JSON.stringify({ message }), // Send the message in the request body
      });

      // Check if the response is OK (status code 200-299)
      if (response.ok) {
        setStatus('Message sent successfully!'); // Update status on success
        setMessage(''); // Clear the message field
      } else {
        // If response is not OK, update the status with an error message
        setStatus('Failed to send message.');
      }
    } catch (error) {
      // Catch and handle any errors
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <div className="contact-form">
      <h4>Contact Us</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Type your message here..."
          rows="5"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;