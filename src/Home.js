import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" alt='' />


        <div className='home__row'>
          <Product
            id="8765433"
            title='The Lean Startup'
            price={799.99}
            image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={4} />
          
          <Product
          id="1"
          title='OnePlus 11 5G'
          price={22999.99}
          image="https://m.media-amazon.com/images/I/81fRAoUL-fL._AC_SL1500_.jpg"
          rating={5} />
        </div>

        <div className='home__row'>
          <Product
          id="1"
          title='Hard thing Abt Hard things'
          price={899.99}
          image="https://m.media-amazon.com/images/I/51NCFyHpkxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          rating={5} />
          
          <Product id="1"
          title='SKG Smart Watch'
          price={2999.99}
          image="https://m.media-amazon.com/images/I/71JU-bUt-sL._AC_SY355_.jpg"
          rating={5} />
          
          <Product id="1"
          title='Smart Watch Android'
          price={5999.99}
          image="https://m.media-amazon.com/images/I/71ZtWYZACKL._AC_SX425_.jpg"
          rating={5}/>
        </div>

        <div className='home__row'>
        <Product id="1"
          title='Samsung UN78KS9500 Curved'
          price={102999.99}
          image="https://m.media-amazon.com/images/I/91f2b+oH3YL._AC_SX425_.jpg"
          rating={5}/>
        </div>
      </div>
    </div>
  )
}

export default Home
