import React from 'react';
import './Footer.css';

export default function Footer() {
  return(
    <div className="footer">
      <article className="email-notification">
        <p>I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest.</p>
        <p>Email address</p>
      </article>
      <article className="contact-us">
        <h4>Contact Us</h4>
        <ul>
          <li>Contact Us</li>
          <li>Delivery and returns</li>
          <li>Terms and conditions</li>
          <li>FAQs</li>
          <li>Track your order</li>
          <li>Check Gift Card balance</li>
          <li>Accessibility</li>
        </ul>
      </article>
      <article className="about">
        <h4>About</h4>
        <ul>
          <li>Our story</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Corporate gifts</li>
          <li>Facial appointments</li>
        </ul>
      </article>
      <article className="social">
        <h4>Social</h4>
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </article>
    </div>
  )
}