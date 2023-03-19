import '../styles/Pledge.css';
import ChooseComponent from './ChooseComponent.js';

function Pledge(props) {
  return (
    <div className="pledge ctr-stl mrg-auto">
      <About />
      <ChooseComponent component="pledge" btnClick={props.selectBtnAction}/>
    </div>
  );
}

export default Pledge;

function About(props) {
  return (
    <div className="pledge__about-section">
      <h3 className="pledge__about-title">About this project</h3>
      <p className="pledge__about-body">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
      <p className="pledge__about-body">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
    </div>
  );
}

