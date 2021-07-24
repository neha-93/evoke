import "./App.css";
import HomePage from "./pages/HomePage/HomePage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import React, { Fragment } from "react";
import Header from "./components/Header/Header.component";
import SignInAndSignUp from "./pages/SignInAndSignUpPage/SignInAndSignUpPage.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exoct path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUp} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
