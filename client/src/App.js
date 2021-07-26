import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);

  return (
    <>
      <h1>Welcome to HomeDepot Interview</h1>
      <div className="product-listing">
        {products.length > 0 &&
          <article className="product-pod">
            {products[0].image &&
              <img
                className="product-pod-image"
                src={products[0].image}
                alt="Home Depot product"
              />
            }
            <section className="product-pod-details">
              {products[0].brand &&
                <p className="product-pod-brand">
                  <b>
                    {products[0].brand}
                  </b>
                </p>
              }
              {products[0].description &&
                <p className="product-pod-description">
                  {products[0].description}
                </p>
              }
              {products[0].value &&
                <span className="product-pod-price">
                  {'$' + products[0].value}
                </span>
              }
            </section>
          </article>
        }
      </div>
    </>
  );
}

export default App;
