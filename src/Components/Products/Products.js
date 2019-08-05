import React from 'react';
import './Products.css'
import InTwoMindsFacialToner from '../../assets/InTwoMindsFacialToner.png';
import ParsleySeedSerum from '../../assets/ParsleySeedSerum.png';
import MandarinFacialHydratingCream from '../../assets/MandarinFacialHydratingCream.png';
import PurifyingFacialExfoliantPaste from '../../assets/PurifyingFacialExfoliantPaste.png';
import AromatiqueRoomSpray from '../../assets/AromatiqueRoomSpray.png';
import DepartureTravelSet from '../../assets/DepartureTravelSet.png';
import ResurrectionRinseFree from '../../assets/ResurrectionRinseFree.png';

import AmazingFaceCleanser from '../../assets/AmazingFaceCleanser.png';
import AvailBodyLotion from '../../assets/AvailBodyLotion.png';
import AvailFacialLotion from '../../assets/AvailFacialLotion.png';
import BitterOrangeAstringentToner from '../../assets/BitterOrangeAstringentToner.png';
import NashvilleProductLine from '../../assets/NashvilleProductLine.png';
import ResurrectionDuetHandBalm from '../../assets/ResurrectionDuetHandBalm.png';

export default function Products() {
  return(
    <div className="products-display-wrapper">
      <section className="products-carousel carousel-1">
        <article className="carousel carousel-1-product-images">
          <div className="product-wrapper">
            <img
              className="product-image"
              src={InTwoMindsFacialToner}
              alt="bottle of In Two Minds Facial Toner"
            />
            <div className="product-image-description">
              <h4>In Two Minds Facial Cleanser</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={ParsleySeedSerum}
              alt='dropper of Parsley Seed Serum for Eyes'
            />
            <div className="product-image-description">
              <h4>Parsley Seed Serum</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={MandarinFacialHydratingCream}
              alt="small tub of Mandarin Facial Hydrating Cream"
            />
            <div className="product-image-description">
              <h4>Mandarin Facial Hydrating Cream</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={PurifyingFacialExfoliantPaste}
              alt="tube of Purifying Facial Exfoliant Paste"
            />
            <div className="product-image-description">
              <h4>Purifying Facial Exfoliant Paste</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={AromatiqueRoomSpray}
              alt="bottle of Aromatique Room Spray"
            />
            <div className="product-image-description">
              <h4>Aromatique Room Spray</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={DepartureTravelSet}
              alt="various products in Departure Travel Set"
            />
            <div className="product-image-description box-set-image">
              <h4>Departure Travel Set</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={ResurrectionRinseFree}
              alt="bottle of Resurrection Rinse Free wash"
            />
            <div className="product-image-description">
              <h4>Resurrection Rinse Free</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          </article>
      </section>
      <section className="products-carousel carousel-2">
        <article className="carousel-product-intro">
          <h4>Seasonal skin care</h4>
          <h3>Summertime rituals</h3>
          <p className="carousel-product-intro-description">
            With the sun's embrace comes the need to adapt our skincare rituals.
            Warmer weather necessitates thorough cleansing, intermittent exfoliation, and lightweight hydration to leave skin refreshed and revived.
          </p>
          <h4>Browse selections</h4>
        </article>
        <article className="carousel carousel-2-product-images">
          <div className="product-wrapper">
            <img
              className="product-image"
              src={NashvilleProductLine}
              alt="various products from Nashville Product Line"
            />
            <div className="product-image-description box-set-image">
              <h4>Nashville Product Line</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={AmazingFaceCleanser}
              alt="bottle of Amazing Face Cleanser"
            />
            <div className="product-image-description">
              <h4>Amazing Face Cleanser</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={AvailBodyLotion}
              alt="bottle of Avail Body Lotion"
            />
            <div className="product-image-description">
              <h4>Avail Body Lotion</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={AvailFacialLotion}
              alt="bottle of Avail Facial Lotion"
            />
            <div className="product-image-description">
              <h4>Avail Facial Lotion</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={BitterOrangeAstringentToner}
              alt="bottle of Bitter Orange Astringent Toner"
            />
            <div className="product-image-description">
              <h4>Bitter Orange Astringent Toner</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
          <div className="product-wrapper">
            <img
              className="product-image"
              src={ResurrectionDuetHandBalm}
              alt="two bottles of Resurrection Duet Hand Balm"
            />
            <div className="product-image-description box-set-image">
              <h4>Resurrection Duet Hand Balm</h4>
              <p>A gentle gel-based formulation.</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}