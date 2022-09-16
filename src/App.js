import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

function App() {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={() => {
          alert("Login Successful");
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Field required";
          }
          if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Username should be an email";
          }
          if (!values.password) {
            errors.password = "Field required";
          }

          return errors;
        }}
      >
        <Form>
          <label>Email</label>
          <Field id="emailField" name="email" type="email" />
          <ErrorMessage id="emailError" name="email" component="div" />
          <label>Password</label>
          <Field id="pswField" name="password" />
          <ErrorMessage id="pswError" name="password" component="div" />
          <button type="submit" id="submitBtn">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
