import logo from '../images/logo.svg';
import menuBg from '../images/icon-hamburger.svg';
import close from '../images/icon-close-menu.svg';
import '../styles/Header.css';
import  { Breakpoint } from 'react-socks';
import { useState } from "react";

function Header(props) {

  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    if (menu) {
      setMenu(false);
      props.dimPage('close')
      document.getElementById('mb-menu').src = menuBg;
    } else {
      setMenu(true);
      props.dimPage('run')
      document.getElementById('mb-menu').src = close;
    }
  }

  return (
    <div className="header-wrapper">
      <header>
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="crowdfund logo" />
        </div>
        <Breakpoint className="mb-break" customQuery="(min-width: 200px) and (max-width: 500px)">
          <div className="header__menu-container">
            <img className="header__hamburger-menu" id="mb-menu" onClick={showMenu} src={menuBg} alt="menu button"/>
          </div>
        </Breakpoint>
        <Breakpoint customQuery="(min-width: 501px)">
          <Menu cls='header__nav' />
        </Breakpoint>
        { menu && <Menu cls='mobile-menu' mb={true} /> }
      </header>
    </div>
  );
}

export default Header;

function Page(props) {
  let linkCls = props.mb ? 'mobile-menu__nav-link sl': 'header__nav-link sl';
  if (props.page.id === 'h2') {
    linkCls += ' wbb';
  }

  return <a className={linkCls} href="/">{props.page.title}</a>;
}

function Menu(props) {
  const pages = [
    {id: 'h0', title: 'About'}, 
    {id: 'h1', title: 'Discover'}, 
    {id: 'h2', title: 'Get Started'}
  ];

  return (
    <div className={props.cls}>
      {pages.map((page) => <Page key={page.id} page={page} mb={props.mb}/>)}
    </div>
  )
}
