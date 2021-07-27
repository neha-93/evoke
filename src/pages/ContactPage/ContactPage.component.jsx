import React from "react";
import { send } from "emailjs-com";

import FormInput from "../../components/FormInput/FormInput.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";

import "./ContactPage.styles.scss";

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    console.log(this.state);

    send(
      "service_mbc6vjk",
      "template_qc4vkjg",
      this.state,
      "user_q13fYXGzsA30pbBpzFnXq"
    )
      .then((response) => {
        alert("Email sent successfully.")
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        alert("Opps, failed to send email.")
        console.log("FAILED...", err);
      });

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  changeHandler = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="contact-page">
        <h2 className="title">CONTACT ME</h2>
        <div className="desciption">
          This is a protfolio project by Neha. Your suggestions and questions are welcomed.
        </div>
        <form className="contact-form" onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="name"
            value={name}
            handleChange={this.changeHandler}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.changeHandler}
            label="Email"
            required
          />
          <FormInput
            type="text"
            name="subject"
            value={subject}
            handleChange={this.changeHandler}
            label="Subject"
          />
          <FormInput
            type="text"
            name="message"
            value={message}
            handleChange={this.changeHandler}
            label="Message"
          />
          <CustomButton type="submit">SEND</CustomButton>
        </form>
      </div>
    );
  }
}

export default Contact;
