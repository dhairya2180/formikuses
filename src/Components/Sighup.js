import React from "react";
import { Formik, Form } from "formik";
import { TextFile } from "./TextFile";
import * as Yup from "yup";
const Sighup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "must be 15 char")
      .required("FirstName is required"),
    LastName: Yup.string()
      .max(15, "Must be 15 char")
      .required("LastName is required "),
    Email: Yup.string()
      .email("Email is invalid format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password min  8 Char")
      .required("Password  Require"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password Must be Match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        LastName: "",
        Email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1>Welecomm to SignUp</h1>
          <Form>
            <TextFile label="First Name" name="firstName" type="text" />
            <TextFile label="Last Name" name="LastName" type="text" />
            <TextFile label="Email" name="Email" type="text" />
            <TextFile label="Password" name="password" type="text" />
            <TextFile
              label="ConfirmPassword"
              name="confirmPassword"
              type="text"
            />
            <div className="buttonstyle">
              <button className="btn btn-dark" type="submit">
                Register
              </button>
              <button className="btn btn-danger ss" type="reset">
                Rest
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Sighup;
