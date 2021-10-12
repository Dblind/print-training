import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { reset, setSettings } from "../../store/trainingPageReducer";

let option = "null";
function Profile(props) {
  let [value, setSelect] = useState("text__red1");
  let [correctly, setCorectly] = useState("text__green");

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
        <label>
        mistake
          <select name="mistake" id="g" size="1" value={value} onChange={event => setSelect(event.target.value)}>
            <option value="text__red1">A</option>
            <option value="text__red2">B</option>
            <option value="text__red3">C</option>
          </select>
        </label>
        <label>
        correctly
          <select name="correctly" id="g" size="1" value={correctly} onChange={event => setCorectly(event.target.value)}>
            <option value="text__green1">1</option>
            <option value="text__green2">2</option>
            <option value="text__green3">3</option>
            {/* <option value="b">B</option>
            <option value="c">C</option> */}
          </select>
        </label>
        <input type="submit" valut="submit test" />
      </form>
      <div>{option} {value}</div>
    </div>
  )
}

const mapStateToProps = state => {

};

export default connect(mapStateToProps, {
  reset,
  setSettings,
})(Profile);