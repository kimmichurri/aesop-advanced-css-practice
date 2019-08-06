import React from 'react';
import './Footer.css';

export default function Footer() {
  return(
    <div className="footer">
      <article className="email-notification">
        <p className="email-instructions">I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest.</p>
        <div className="email-input-wrapper">
          <label
            htmlFor="email-address"
            className="email-address-label">
              Email address
          </label>
          <input
            name="email-address"
            id="email-address"
            className="email-input"
            type="email"
            placeholder="kimberly.achkio@gmail.com"
          />
        </div>
      </article>
      <article className="contact-us">
        <h4 className="footer-heading">Contact Us</h4>
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
        <h4 className="footer-heading">About</h4>
        <ul>
          <li>Our story</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Corporate gifts</li>
          <li>Facial appointments</li>
        </ul>
      </article>
      <article className="social">
        <h4 className="footer-heading">Social</h4>
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </article>
    </div>
  )
}