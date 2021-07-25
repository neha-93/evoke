import React from "react";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/signUp.component";
import "./SignInAndSignUpPage.styles.scss";

const SignInAndSignUp = () => {

    return (
        <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
        </div>
    );
}

export default SignInAndSignUp;
