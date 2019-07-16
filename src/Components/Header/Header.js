import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div>
      <section className="navigation">
        <ul className="navigation-links-1">
          <li className="navigation-link-1">Shop</li>
          <li className="navigation-link-1">Read</li>
          <li className="navigation-link-1">Visit</li>
          <li className="navigation-link-1">Search</li>
        </ul>
        <ul className="navigation-links-2">
          <li className="navigation-link-2">Login</li>
          <li className="navigation-link-2">Cart</li>
        </ul>
      </section>
      
      <h1>Aēsop</h1>
      <h2>Protection in direct and incidental sunlight</h2>
      <p>Introducing Avail Facial Lotion with Sunscreen, to hydrate and help protext the face with broad-spectrum SPF25 coverage</p>
      <button>Explore SPF25</button>
    </div>
  )
}
