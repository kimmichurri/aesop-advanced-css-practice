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
          <img
            className="product-image"
            src={InTwoMindsFacialToner}
            alt="bottle of In Two Minds Facial Toner"
          />
          <img
            className="product-image"
            src={ParsleySeedSerum}
            alt='dropper of Parsley Seed Serum for Eyes'
          />
          <img
            className="product-image"
            src={MandarinFacialHydratingCream}
            alt="small tub of Mandarin Facial Hydrating Cream"
          />
          <img
            className="product-image"
            src={PurifyingFacialExfoliantPaste}
            alt="tube of Purifying Facial Exfoliant Paste"
          />
          <img
            className="product-image"
            src={AromatiqueRoomSpray}
            alt="bottle of Aromatique Room Spray"
          />
          <img
            className="product-image"
            src={DepartureTravelSet}
            alt="picture of various products in Departure Travel Set"
          />
          <img
            className="product-image"
            src={ResurrectionRinseFree}
            alt="bottle of Resurrection Rinse Free wash"
          />
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
          <img
            className="product-image"
            src={AmazingFaceCleanser}
            alt="bottle of Amazing Face Cleanser"
          />
          <img
            className="product-image"
            src={AvailBodyLotion}
            alt="bottle of Avail Body Lotion"
          />
          <img
            className="product-image"
            src={AvailFacialLotion}
            alt="bottle of Avail Facial Lotion"
          />
          <img
            className="product-image"
            src={BitterOrangeAstringentToner}
            alt="bottle of Bitter Orange Astringent Toner"
          />
          <img
            className="product-image"
            src={NashvilleProductLine}
            alt="picture of various products from Nashville Product Line"
          />
          <img
            className="product-image"
            src={ResurrectionDuetHandBalm}
            alt="two bottles of Resurrection Duet Hand Balm"
          />
        </article>
      </section>
    </div>
  )
}