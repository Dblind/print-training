import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { sendMyText } from "../../store/AuthenticationReducer";
import { reset, setMainText, setSettings } from "../../store/trainingPageReducer";
import MyTexts from "./MyTexts/MyTexts";

import cssTP from '../TrainingPage/TrainingPage.module.css';
import common from '../common/css/CommonCSS.module.css';
import cssForm from '../common/css/CommonFormCSS.module.css';
import css from './Profile.module.css';

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
    <div className={common.container + " " + css.profile}  >
      {/* <h3>Options</h3> */}
      {/* <NavLink to="/train">Go to train.</NavLink> */}
      <h3>My texts</h3>
      <div><MyTexts sendMyText={props.sendMyText} myTexts={props.myTexts} setMainText={props.setMainText} /></div>
      <h3>Options</h3>
      <form onSubmit={handleSubmit} className={`${cssForm.form} ${css.form}`}>
        <ul>
          <li>
            <label>
              mistake
              <select className={cssTP[mistake]} style={{ color: "#0d2" }} name="mistake" id="g" size="1" defaultValue={mistake} onChange={event => setSelect(event.target.value)}>
                <option className={css.test} value="text__red1">A</option>
                <option className={cssTP.text__red2} value="text__red2">B</option>
                <option className={cssTP.text__red3} value="text__red3">C</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              correctly
              <select className={cssTP[correctly]} name="correctly" id="g" size="1" defaultValue={correctly} onChange={event => setCorectly(event.target.value)}>
                <option value="text__green1">1</option>
                <option value="text__green2">2</option>
                <option value="text__green3">3</option>
                {/* <option value="b">B</option>
                <option value="c">C</option> */}
              </select>
            </label>
          </li>
          <li>
            <label >uuu<input type="text" className={cssForm.form__inputText}></input></label>
          </li>
          <li>
            <input type="submit" value="Save changes"
              className={cssForm.form__submit}
            />
          </li>
          <li>
            <input type="button" onClick={props.reset} value="Reset" className={cssForm.form__submit} />
          </li>
        </ul>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    settings: state.trainingPage.settings,
    myTexts: state.authentication.myTexts,
  }
};

export default connect(mapStateToProps, {
  reset,
  setSettings,
  sendMyText,
  setMainText,
})(Profile);