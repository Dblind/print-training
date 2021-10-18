import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Login from "../Login/Login";
import LoginContainer from "../Login/LoginContainer";
import SignUp from "../Login/SignUp";
import MainPage from "../MainPage/MainPage";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import TrainingPage_v2 from "../TrainingPage/TrainingPage_v2";
import TrainingPage_v2Container from "../TrainingPage/TrainingPage_v2Container";
import css from './Home.module.css';
import MainHeader from "./MainHeader";

function Home(props) {
  return (
    <div className={css.home}>
      <header className={css.container}>
        <MainHeader isAuthorized={props.isAuthorized}/>       
      </header>
      <main className={css.home__main + " " + css.container} >
        <div className={css.home__navbar}>
          <Navbar />
        </div>
        <div className={css.home__content}>
          <Switch >
            <Route path="/train" component={() => <TrainingPage_v2Container />} />
            <Route path="/mainPage" component={() => <MainPage />} />
            <Route path="/profile" component={() => <Profile />} />
            <Route path="/login" component={() => <LoginContainer />} />
            <Route path="/signUp" component={() => <SignUp />} />
          </Switch>
        </div>
      </main>
      <footer className={css.container}>Footer</footer>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.authentication.isAuthorized,
  }
}

export default connect(mapStateToProps, {

})(Home);