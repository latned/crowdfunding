import '../styles/Counter.css';

function Counter(props) {
  return (
    <div className="counter ctr-stl mrg-auto">
      {props.counters.map((count) => <CreateCounter key={count.id} count={count} />)}
      <div className="counter__progress-bar">
        <div className="counter__progress-bar__fill" style={{width: props.bar + '%'}}></div>
      </div>
    </div>
  ); 
}

export default Counter;

function CreateCounter(props) {
  let border = props.count.vl ? <div className="counter__vl"></div> : null;
  let container = 'counter__count-container';

  if (props.count.vl) {
    container += ' br-right';
  }
  if (props.count.c.startsWith('5')) {
    container += ' pad-left';
  }

  return (
    <div className={container}>
      <h2 className="counter__title">{props.count.c}</h2>
      <p className="counter__body">{props.count.total}</p>
      {border}
    </div>
  );
}
