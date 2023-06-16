import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';  

function Checkout() {
  return (
      <div className='checkout'>
          <div className='checkout__left'>
              <img className='checkout__ad'src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1337644_1736304_US_us_chp_es_us_en_3925599_1500x300_en_US.jpg' alt=""/>
              <div>
                  <h2 className='checkout__title'>Your Shopping Basket</h2>
                  {/* Basket Items */}
                  {/* Basket Items */}
                  {/* Basket Items */}
                  {/* Basket Items */}
                  {/* Basket Items */}
              </div>
          </div>
          <div className='checkout__right'>
              <Subtotal />

          </div>
    </div>
  )
}

export default Checkout;