import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { sendMyText } from "../../store/AuthenticationReducer";
import { reset, setSettings } from "../../store/trainingPageReducer";
import css from '../TrainingPage/TrainingPage.module.css';
import MyTexts from "./MyTexts/MyTexts";

let option = "null";

function Profile(props) {
  let [correctly, setCorectly] = useState(props.settings.classColors[0]);
  let [mistake, setSelect] = useState(props.settings.classColors[1]);

  function handleSubmit(event) {
    console.log(event.target);
    const settings = {
      classColors: [event.target.correctly.value, event.target.mistake.value],
    };
    props.setSettings(settings);
    event.preventDefault();
  }

  return (
    <div>
      <button onClick={props.reset}>Reset</button>
      <NavLink to="/train">Go to train.</NavLink>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>
              mistake
              <select className={css[mistake]} style={{color: "#0d2"}} name="mistake" id="g" size="1" defaultValue={mistake} onChange={event => setSelect(event.target.value)}>
                <option className={css[mistake]} style={{color: "#0d2",}} value="text__red1">A</option>
                <option className={css.text__red2} value="text__red2">B</option>
                <option className={css.text__red3} value="text__red3">C</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              correctly
              <select className={css[correctly]} name="correctly" id="g" size="1" defaultValue={correctly} onChange={event => setCorectly(event.target.value)}>
                <option value="text__green1">1</option>
                <option value="text__green2">2</option>
                <option value="text__green3">3</option>
                {/* <option value="b">B</option>
                <option value="c">C</option> */}
              </select>
            </label>
          </li>
          <label >uuu<input type="text"></input></label>
          <li><input type="submit" valut="submit test" /></li>
        </ul>
      </form>
      <div><MyTexts sendMyText={props.sendMyText} /></div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    settings: state.trainingPage.settings,
  }
};

export default connect(mapStateToProps, {
  reset,
  setSettings,
  sendMyText,
})(Profile);