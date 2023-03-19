import '../styles/Finish.css';
import finishIcon from '../images/icon-check.svg';

function Finish(props) {
  const wid = props.size.width;
  const component = props.component;
  let top;
  let left = wid > 700 ? (wid - 540) / 2 : (wid - 330) / 2;

  if (wid > 1350) {
    top = '440px';
  } else if (wid > 500) {
    top = '375px';
  } else {
    top = '170px';
  }

  if (component.includes('selectBtns')) {
    if (component.slice(-1) === '0') {
      top = '70rem';
    } else if (component.slice(-1) == '1') {
      top = '80rem';
    } else {
      top = '90rem';
    }
  }

  const finishStyles = {
    left: left,
    top: top
  }

  return (
    <div className="finish" style={finishStyles}>
      <img className="finish__img" src={finishIcon} alt="check icon" />
      <h2 className="finish__title">Thanks for your support!</h2>
      <p className="finish__body">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
      <button className="finish__btn" onClick={props.closeFinish}>Got it!</button>
    </div>
  );
}

export default Finish;
