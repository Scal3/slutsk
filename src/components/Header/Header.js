import './Header.css';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {

  const [isBurgerMenuBtnActive, setIsBurgerMenuBtnActive] = useState(false); // Стэйт для кнопки бургер-меню

  const changeButtonStateTrue = () => {
    setIsBurgerMenuBtnActive(true)
  }

  const changeButtonStateFalse = () => {
    setIsBurgerMenuBtnActive(false)
  }

    return (
        <header className="header">
          <div className="header__ears">
            <NavLink to="/" className="header__desctop-btn-link">
              <h2 className="header__logo-name">SLk</h2>
            </NavLink>
  
            <div className="header__btn" onClick={changeButtonStateTrue}>
              <span className="header__btn__third-line"/>
            </div>
  
            <Navigation 
              isBurgerMenuBtnActive={isBurgerMenuBtnActive} 
              changeButtonStateFalse={changeButtonStateFalse}>
            </Navigation>
          </div>
        </header>
      );
  }
  
  export default Header;
  