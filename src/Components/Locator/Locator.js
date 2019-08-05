import React from 'react';
import './Locator.css';
import StoreLocatorImage from '../../assets/StoreLocatorImage.png';

export default function Locator() {
  return (
    <div>
      <article className="store-locator-information">
        <p className="locator-text">Visit</p>
        <p className="locator-text">Store Locator</p>
        <p>In each store, trained consultants will be pleased to host you.</p>
        <button className="store-locator-button">Find a nearby store</button>
      </article>
      <article className="store-locator-image">
        <img
          className="featured-store-image"
          src={StoreLocatorImage}
          alt="Store in Fremont, CA"
        />
      </article>
    </div>
  )
}