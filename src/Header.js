import React from 'react';
import "./Header.css"; 
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  return (
      <div className='header'>
          <Link to= '/'> <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/></Link>
              
          <div className='header__search'>
              <input className='header__searchInput' type='text' />
              {/*Logo*/}
            <SearchIcon className='header__searchIcon' type="text" />
          </div>
          <div className='header__nav'>
              <div className='header__option'>
                  <span className='header__optionLineOne'>Hello Harish</span>
                  <span className='header__optionLineTwo'>Sign In</span>
              </div>
              <div className='header__option'>
                  <span className='header__optionLineOne'>Returns</span>
                  <span className='header__optionLineTwo'>& Orders</span>
              </div>
              
              <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>      
                <span className='header__optionLineTwo'>Prime</span>
              </div >

              <Link to='/Checkout'>
                <div className='header__optionBasket'>
                    <ShoppingBasket />
                    <span className='header__optionLineTwo header__BasketCount'>0</span>
                </div>
              </Link>
          </div>
      </div>
      
  )
}

export default Header;

