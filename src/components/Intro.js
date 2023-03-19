import masterLogo from '../images/logo-mastercraft.svg';
import  { Breakpoint } from 'react-socks';
import { useState } from "react";
import '../styles/Intro.css';

function Intro(props) {
  return (
    <div className="intro ctr-stl mrg-auto mrg-auto--intro">
      <div className="intro__logo-container">
        <img className="intro__logo" src={masterLogo} alt="mastercraft logo" />
      </div>

      <h1 className="intro__title">Mastercraft Bamboo Monitor Riser</h1>
      <p className="intro__body">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

      <div className="intro__btn-container">
        <button className="intro__back-btn alike-stl hv-stl" onClick={() => props.backBtnAction('intro')}>Back this project</button>
        <BookmarkButton />
      </div>
    </div>
  );
}

export default Intro;

function BookmarkButton() {
  const [style, setStyle] = useState("intro__bookmark-btn");
  const [bookmark, setBookmark] = useState("intro__bookmark-bg")

  const bookmarkClicked = () => {
    if (style.includes('bmk')) {
      setStyle("intro__bookmark-btn");
      setBookmark("intro__bookmark-bg")
    } else {
      setStyle("intro__bookmark-btn bmk-clicked");
      setBookmark("intro__bookmark-bg bg-clicked")
    }
  }

  return (
    <>
    <Breakpoint customQuery="(min-width: 200px) and (max-width: 500px)">
      <div className={style} onClick={bookmarkClicked}> 
        <svg className={bookmark} width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
      </div>
    </Breakpoint>

    <Breakpoint customQuery="(min-width: 501px)">
      <div className={style} onClick={bookmarkClicked}> 
        <svg className={bookmark} width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
        <p className="intro__bookmark-body">Bookmark</p>
      </div>
    </Breakpoint>
    </>
  );
}
