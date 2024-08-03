import emailjs from 'emailjs-com';

export const sendEmail = (message) => {
  const templateParams = {
    message: message,
  };

  return emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id');
};