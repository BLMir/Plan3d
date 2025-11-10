import React, { useState } from 'react';
import './CallToAction.css';

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNotifyMe = async () => {
    if (email) {
      try {
        const response = await fetch('http://localhost:3001/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          alert('Thank you for subscribing!');
          setEmail('');
        } else {
          alert('Failed to subscribe. Please try again later.');
        }
      } catch (error) {
        console.error('Error subscribing:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="call-to-action">
      <h2>Be the First to Know</h2>
      <p>Sign up for our mailing list to be notified when the Planet Lamp is available.</p>
      <div className="signup-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleNotifyMe}>Notify Me</button>
      </div>
    </div>
  );
};

export default CallToAction;
