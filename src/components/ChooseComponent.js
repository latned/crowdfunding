const ChooseComponent = (props) => {
  const noReward = {id: 0, title: "Pledge with no reward", price: 10, left: '', out: false, text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."}

  const optionsContent = [
    {id: 1, title: "Bamboo Stand", price: 25, left: 101, out: false, text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."},
    {id: 2, title: "Black Edition Stand", price: 75, left: 64, out: false, text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."},
    {id: 3, title: "Mahogany Special Edition", price: 200, left: 0, out: true, text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."},
  ];

  if (props.component === 'pledge') {
    return (
    <>
      {optionsContent.map((option) => <Options key={'p' + option.id} option={option} btnClick={() => props.btnClick('selectBtns')}/>)}
    </>
    );
  } else {
    optionsContent.unshift(noReward);
    return (
    <>
      {optionsContent.map((option) => <ModalOptions key={'m' + option.id} option={option} submitBtn={props.submitBtn} cmpt={props.cmpt} hdIn={props.hdIn}/>)}
    </>
    );
  }
}

export default ChooseComponent;

function Options(props) {
  let pledgeBtnCls = 'pledge__option-btn alike-stl hv-stl';
  let btnContent = 'Select Reward';
  let pledgeContainerCls = 'pledge__option-container ctr-stl'; 

  if (props.option.out) {
    pledgeBtnCls = 'pledge__option-btn alike-stl gray-clr';
    btnContent = 'Out of stock';
    pledgeContainerCls += ' pledge__option-container--out';
  }

  return (
    <div className={pledgeContainerCls}>
      <div className="pledge__title-container">
        <h4 className="pledge__option-title">{props.option.title}</h4>
        <p className="pledge__option-sum">Pledge ${props.option.price} or more</p>
      </div>
      <p className="pledge__option-body">{props.option.text}</p>

      <div className="pledge__btn-wrapper">
        <div className="pledge__option-left">
          <span className="num-bold">{props.option.left}</span>
          <p className="tocenter">left</p>
        </div>
        <button className={pledgeBtnCls} onClick={props.option.out ? '' : props.btnClick}>{btnContent}</button>
      </div>
    </div>
  );
}

function ModalOptions(props) {
  const bodyCls = props.option.price === 75 ? 'modal__option-body modal__option-body--sml' : 'modal__option-body';
  const optionCls = props.option.out ? 'modal__option-container modal__option-container--out' : 'modal__option-container'
  let sumContent = `Pledge $${props.option.price} or more`;
  let titleContainer = 'modal__option-title-container';
  let checked = false;
  
  if (props.option.price === 10) {
    sumContent = '';
    titleContainer += ' no-mrg';
  }

  return (
    <div className="modal__option-wrapper" id={'wr' + props.option.id}>
      <div className={optionCls}>
        <label className="custom-radio-btn">
          <span className="label"></span>
          <input type="radio" className="uncheck" name="sample" id={props.option.id} defaultChecked={checked} onClick={(e) => checkRadio(e)} disabled={props.option.out ? "disabled" : ""}></input>
          <span className="checkmark"></span>
        </label>

        <div className={titleContainer}>
          <h4 className="modal__option-title" id={props.option.id} onClick={props.option.out ? null : (e) => checkRadio(e)}>
            {props.option.title}
          </h4>
          <p className="modal__option-sum">{sumContent}</p>
        </div>

        <p className={bodyCls}>{props.option.text}</p>

        <div className="modal__left pledge__option-left">
          <span className="num-bold num-bold--sml">{props.option.left}</span>
          <p style={{marginTop: "2px"}}>{props.option.price === 10 ? '' : 'left'}</p>
        </div>
      </div>
        <ModalSelect option={props.option} submitBtn={props.submitBtn} cmpt={props.cmpt} hdIn={props.hdIn}/>
    </div>
  );
}

const checkRadio = event => {
  if (!event.target.checked) {
    document.querySelectorAll('.uncheck').forEach((element) => {
      element.checked = false;
    });
    
    document.getElementById(event.target.id).checked = true;
  }

  document.querySelectorAll('.modal__option-wrapper').forEach(element => {
    element.style.border = '1px solid var(--brd-clr)';
  });

  document.querySelectorAll('.modal__select-container').forEach(element => {
    element.style.display = 'none';
  });

  document.getElementById('wr' + event.target.id).style.border = '2px solid var(--cyan)';
  document.getElementById('ms' + event.target.id).style.display = 'grid';
}

function ModalSelect(props) {
  const idContinue = props.cmpt + props.option.id;
  return (
    <div className="modal__select-container" id={'ms' + props.option.id}>
      <p className="select__body">Enter your pledge</p>
      <div className="select__pledge-container">
        <p className="select__dollar-sing">&#36;</p>
        <input type="text" className="select__sum" defaultValue={props.option.price} onChange={(e) => props.hdIn(e)}></input>
        <button className="select__submit-btn alike-stl" onClick={() => props.submitBtn(idContinue, props.option.price)}>Continue</button>
      </div>
    </div>
  )
}

