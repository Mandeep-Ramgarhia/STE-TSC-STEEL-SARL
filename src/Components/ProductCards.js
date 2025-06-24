import React from 'react';
import Slider from 'react-slick';
import '../styles/ProductCards.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    name: 'C Purline',
    image: '/c-purline.jpg',
    description: 'High-strength structural component used in roofing and wall framing systems.'
  },
  {
    name: 'CR Black Pipes',
    image: '/cr-black--pipes.jpg',
    description: 'Cold rolled pipes known for durability and smooth finish in construction.'
  },
  {
    name: 'CRCA Coils',
    image: '/crca-coils.jpg',
    description: 'Cold rolled close annealed coils used in automotive and electrical applications.'
  },
  {
    name: 'CRCA Sheets',
    image: '/crca-sheets.jpg',
    description: 'Flat cold rolled steel sheets ideal for stamping and pressing.'
  },
  {
    name: 'GP Sheets',
    image: '/gp-sheets.jpg',
    description: 'Galvanized plain sheets used for roofing and paneling with anti-rust protection.'
  },
  {
    name: 'CHQ Plates',
    image: '/chq-plate.jpg',
    description: 'Cold heading quality plates for fastener and bolt manufacturing.'
  },
];

const ProductCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="products-title">Our Products</h2>
        <p className="products-description">
          Our company has made a name for itself in the <strong>Alloy Steel</strong> industry due to the consistency
          of products, excellent metallurgical services, and outstanding after-sales support.
        </p>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div className="product-card-wrapper" key={index}>
              <div className="product-card colorful-bg">
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductCards;
