import React from "react";
import css from './TrainingPage.module.css';

let RED = "text__red", GREEN = "text__green";

class Word extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: props.word,
      chars: props.word.chars,
    }
  }

  rendChars() {
    const a = this.state.chars.map((ch, ind) =>
      <span key={ind + ch.char} className={css[ch.className]}>{ch.char}</span>)
    return a;
  }

  render() {
    return (
      <>
        {this.rendChars()}
      </>
    )
  }


}

export default Word;