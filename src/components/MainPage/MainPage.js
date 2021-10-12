import css from './MainPage.module.css';

function MainPage(props) {
  return (
    <div className={css.mainPage}>
      Main page
      <div className={css.blockContainer}>
        <div className={css.block_1 + " " + css.block}>block 1 ipsum, dolor</div>
        <div className={css.block_2 + " " + css.block}>
          block 2 ipsum, dolor
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </div>
        <div className={css.block_3 + " " + css.block}>block 3 ipsum, dolor</div>
        <div className={css.block_4 + " " + css.block}>block 4 ipsum, dolor</div>
        <div className={css.block_5 + " " + css.block}>block 5 ipsum, dolor</div>
      </div>

      <div className={css.blockContainer}>
        <div  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt qui officia, voluptatum nisi quis eos ex minus dicta! Aperiam recusandae qui tempore impedit earum quas error cum! Aliquam, reiciendis.</div>
        <div >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi sed nihil officia quidem ab soluta, repellat eligendi iste blanditiis minus molestias recusandae debitis laboriosam quae odio culpa exercitationem aperiam.</div>
      </div>

      <div className={css.blockContainer2}>
        <section className={css.sectionBlock}>01 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, repellendus.</section>
        <section className={css.sectionBlock}>02 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, repellendus.</section>
        <section className={css.sectionBlock}>03 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, repellendus.</section>
        {/* <section className={css.block}>04 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, repellendus.</section> */}
        {/* <section className={css.block}>05 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, repellendus.</section> */}
      </div>
      <div className={css.navButtons}>
        <button className={css.button}>button 1</button>
        <button className={css.button}>button 2</button>
        <button className={css.button} style={{"align-self": "flex-end",}}>button 3</button>
        <button className={css.button}>button 4</button>
        <button className={css.button}>button 5</button>
        <button className={css.button}>button 6</button>
      </div>
    </div>
  )
}

export default MainPage;