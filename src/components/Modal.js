import ChooseComponent from './ChooseComponent.js';
import '../styles/Modal.css';

function Modal(props) {
  const wid = props.size.width;

  let width = `${wid - 48}px`;
  let left = null;
  let top = wid > 500 ? '185px' : '120px';

  if (wid > 750) {
    width = '700px';
    left = (wid - 700) / 2;
  }

  if (props.cmpt === 'selectBtns') {
    top = '70rem';
  }

  const modalStyles = {
    width: width,
    left: left,
    top: top
  }

  return (
    <div className="modal" style={modalStyles}>
      <div className="modal__title-container">
        <h2 className="modal__title">Back this project</h2>
        <button className="modal__close-btn" onClick={() => props.backBtnAction('modal')}>
          <svg className="close-icon" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
        </button>
      </div>
      <p className="modal__body">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
      <ChooseComponent component="modal" btnClick={props.backBtnAction} submitBtn={props.submitBtn} cmpt={props.cmpt} hdIn={props.handleInput}/>
    </div>
  );
}

export default Modal;

