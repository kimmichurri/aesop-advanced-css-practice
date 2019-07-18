import React from 'react';
import ParsleySeedSerum from '../../assets/ParsleySeedSerum.png';
import InTwoMindsFacialToner from '../../assets/InTwoMindsFacialToner.png';
import MandarinFacialHydratingCream from '../../assets/MandarinFacialHydratingCream.png';
import PurifyingFacialExfoliantPaste from '../../assets/PurifyingFacialExfoliantPaste.png';

export default function Products() {
  return(
    <div className="products-display-wrapper">
      <section className="products-carousel carousel-1">
        <img
          className="product-image"
          src={ParsleySeedSerum}
          alt='dropper of Parsley Seed Serum for Eyes'
        />
        <img
          className="product-image"
          src={InTwoMindsFacialToner}
          alt="bottle of In Two Minds Facial Toner"
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
      </section>
      <section className="products-carousel carousel-2">
        <p>Products</p>
      </section>
    </div>
  )
}