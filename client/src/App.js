import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const product = products.length > 0 ? products[0] : null;

  return (
    <div className="product-listing">
      {product &&
        <article className="product-pod">
          {product.image &&
            <img
              className="product-pod-image"
              src={product.image}
              alt="Home Depot product"
            />
          }
          <section className="product-pod-details">
            {product.brand &&
              <p className="product-pod-brand">
                <b>
                  {product.brand}
                </b>
              </p>
            }
            {product.description &&
              <p className="product-pod-description">
                {product.description}
              </p>
            }
            {product.value &&
              <span className="product-pod-price">
                {'$' + product.value}
              </span>
            }
          </section>
        </article>
      }
    </div>
  );
}

export default App;
