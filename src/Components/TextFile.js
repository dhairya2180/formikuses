import React from "react";
import { ErrorMessage, Field, useField } from "formik";

export const TextFile = ({ label, ...props }) => {
  const [abc, def] = useField(props);
  //   console.log(abc, "field");
  //   console.log(abc, def);
  //   console.log(def, "this is meta");
  //   console.log(label);
  console.log(def);
  return (
    <div className="mb-4">
      <label className="d-flex justifyContent-start mb-2" htmlFor={abc.name}>
        {label}
      </label>

      <input
        className={`form-control shadow-none ${
          def.touched && def.error && `is-invalid`
        }`}
        {...abc}
        {...props}
      />
      <ErrorMessage component="div" className="  error" name={abc.name} />
    </div>
  );
};
