

function MyTexts(props) {
  function handleSubmit2(formData) {
    props.sendMyText(formData.target.text2.value);
    formData.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit2}>
        <ul>
          <li><textarea name="text2" id="textId" cols="44" rows="4"></textarea></li>
          <li><input type="submit" value="send" /></li>
        </ul>
      </form>
    </div>
  )
}


export default MyTexts;