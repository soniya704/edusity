import React from 'react';
import './Contact.css';
import msgIcon from '../../assets/micon.svg';

export const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb2d87b8-6b15-4ba5-b99a-56dea740724d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msgIcon} alt='' /></h3>
                <p>Feel free to reach out through contact form or find information below, your
                    feedback, contact, and suggestions are important to as we strive to provide
                    exeptional service to our university community
                </p>
                <ul>
                    <li><i class="fa-solid fa-envelope"></i>contact@Greatestake.dev</li>
                    <li><i class="fa-solid fa-phone-volume"></i>+1 123-456-789</li>
                    <li><i class="fa-solid fa-location-dot"></i>77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
                </ul>

            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                     <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your message here</label>
                    <textarea name='message' rows='7' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now<i class="fa-solid fa-arrow-right"></i></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}
