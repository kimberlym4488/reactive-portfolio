import React, { useState, useEffect } from "react";

import { validateEmail } from "../../../utils/helpers";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const styles = {
    text: {
      backgroundColor: "rgb(13, 202, 240,.8)",
      color: "white",
    },

    cardBody: {
      background: "rgb(241, 244, 245)",
      background:
        "linear-gradient(95deg, rgba(241, 244, 245,.2) 50%, rgba(255,255,255,1) 50%)",
    },
    buttonPrimary: {
      color: "white",
    },
  };

  const handleClick = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email' && inputValue.length <= 1) {
      setEmail("This field is required")
    } else if (inputType === 'name' && inputValue.length <= 1) {
      setName("This field is required")
    }
      else {
        setMessage("This field is required");
    };
return
    }

  const handleChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    setErrorMessage("");
    setSuccessMessage(
      "Thanks for submitting your message! Look forwarding to talking you real soon!"
    );

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <>
      <div style={styles.text}>
        <div className="text-center py-4">Let's chat!</div>
      </div>
      <form className="d-flex row px-5 py-5" style={styles.cardBody}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            value={name}
            name="name"
            type="name"
            placeholder="John Doe"
            className="form-control"
            onBlur={handleClick}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            value={email}
            name="email"
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onBlur={handleClick}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Your message
          </label>
          <textarea
            value={message}
            name="message"
            type="message"
            rows="3"
            className="form-control"
            placeholder="What's on your mind?"
            onBlur={handleClick}
            onChange={handleChange}
          ></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div>
            <p className="primary-text">{successMessage}</p>
          </div>
        )}
        <div className="col-auto">
          <button
            className="btn btn-info"
            style={styles.buttonPrimary}
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
