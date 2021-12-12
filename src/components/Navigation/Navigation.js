import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation({isBurgerMenuBtnActive, changeButtonStateFalse}) {
    return (
      <nav className={(isBurgerMenuBtnActive ? 'navigation' : 'navigation_inactive')}>
        <div className="navigation__blur"/>

        <div className="navigation__content">
          <button className="navigation__close-btn" onClick={changeButtonStateFalse}></button>

          <div className="navigation__link-list">
            <NavLink to="/" className="navigation__link" activeClassName="navigation__link_active">Новости города</NavLink>
            <NavLink to="/food" className="navigation__link" activeClassName="navigation__link_active">Где покушать</NavLink>
            <NavLink to="/entertainment" className="navigation__link" activeClassName="navigation__link_active">Куда сходить</NavLink>
            <NavLink to="/study" className="navigation__link" activeClassName="navigation__link_active">Учёба в Слуцке</NavLink>
            <NavLink to="/about-city" className="navigation__link" activeClassName="navigation__link_active">История города</NavLink>
          </div>

        </div>

      </nav>
    );
  }
  
  export default Navigation;
  