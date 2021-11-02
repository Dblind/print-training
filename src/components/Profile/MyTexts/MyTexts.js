import cssForm  from '../../common/css/CommonFormCSS.module.css';
import css from './MyTexts.module.css';

function MyTexts(props) {
  function handleSubmit2(formData) {
    props.sendMyText(formData.target.text2.value);
    formData.preventDefault();
  }

  return (
    <div className={css.body}>
      <div>
        {props.myTexts.map(text => <TextItem text={text} setMainText={props.setMainText} />)}
      </div>
      <form onSubmit={handleSubmit2} className={cssForm.form + " " + css.form}>
        <ul>
          <li>
            <textarea name="text2" id="textId" cols="44" rows="4"
              className={cssForm.form__textarea}
            />
            </li>
          <li><input type="submit" value="Send" className={cssForm.form__submit} /></li>
        </ul>
      </form>
    </div>
  )
}

function TextItem(props) {
  function chooseText() {
    props.setMainText(props.text);
  }

  return (
    <div className={css.textTemplate}>
      <p className={css.textTemplate__text}>{props.text}</p>
      <button onClick={() => chooseText()} className={cssForm.form__submit}>Choose</button>
    </div>
  )
}


export default MyTexts;