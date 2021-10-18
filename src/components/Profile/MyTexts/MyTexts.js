

function MyTexts(props) {
  function handleSubmit2(formData) {
    props.sendMyText(formData.target.text2.value);
    formData.preventDefault();
  }

  return (
    <div>
      <p>My texts</p>
      <div>
        {props.myTexts.map(text => <TextItem text={text} setMainText={props.setMainText} />)}
      </div>
      <form onSubmit={handleSubmit2}>
        <ul>
          <li><textarea name="text2" id="textId" cols="44" rows="4"></textarea></li>
          <li><input type="submit" value="send" /></li>
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
    <div>
      <p>{props.text}</p>
      <button onClick={() => chooseText()}>Choose</button>
    </div>
  )
}


export default MyTexts;