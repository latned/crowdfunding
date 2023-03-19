import Intro from './Intro.js';
import Counter from './Counter.js';
import Pledge from './Pledge.js';
import Modal from './Modal.js';
import Finish from './Finish.js';
import '../styles/Main.css';
import { useState, useEffect } from "react";

function Main(props) {
  const size = useWindowSize();
  const [modalStatus, setModalStatus] = useState('');
  const [show, setShow] = useState(false);

  const showModal = status => {
    setModalStatus(status)
    if (show) {
      setShow(false);
      props.dimPage('close')
    } else {
      setShow(true);
      props.dimPage('run')
    }
  }

  let inputMoney;
  const [money, setMoney] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [bar, setBar] = useState(80);

  const handleInput = event => {
    let value = event.target.value;
    let pattern = /^[0-9]*$/i;
    if (pattern.test(value)) {
      inputMoney = value;
    }
  };

  let counters = [
    {id: 0, c: '$' + money, total: 'of $100,000 backed', vl: true},
    {id: 1, c: '' + backers, total: 'total backers', vl: true},
    {id: 2, c: '56', total: 'days left', vl: false}
  ];

  const [finish, setFinish] = useState(false);
  const [finishStatus, setFinishStatus] = useState('');

  const showFinish = (status, price) => {
    if (finish) {
      props.dimPage('close')
      setFinish(false);
    } else {
      showModal('close');
      props.dimPage('run')
      setFinish(true);
      addStats(price);
      setFinishStatus(status)
    }
  }

  const addStats = (price) => {
    let convertedMoney = inputMoney === undefined ? price : Math.round(inputMoney);
    const progress = convertedMoney / 100000 * 100; 
    let tmpBar = bar;
    tmpBar += progress + progress;
    setBar(tmpBar)
    let tmpMoney = money;
    tmpMoney += convertedMoney;
    setMoney(tmpMoney)
    let tmpbackers = backers;
    tmpbackers += 1;
    setBackers(tmpbackers)
  }

  return (
    <main>
      { show && (<Modal backBtnAction={showModal} cmpt={modalStatus} size={size} submitBtn={showFinish} handleInput={handleInput}/>)}
      { finish && (<Finish size={size} closeFinish={showFinish} component={finishStatus}/>)}
      <Intro backBtnAction={showModal}/>
      <Counter counters={counters} bar={bar} />
      <Pledge selectBtnAction={showModal}/>
    </main>
  );
}

export default Main;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowSize;
}
