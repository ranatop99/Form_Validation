import React, { useState, useEffect } from "react";
import "./Form.css";
import { Box, TextField } from "@mui/material";


const Form = ({ handleSubmit }) => {
  const COUNTRY = "Nepal";
  const PROVINCE = "3";
  const initialValues = {
    fullname: "",
    email: "",
    phonenumber: "",
    dob: "",
    city: "",
    district: "",
    province: PROVINCE,
    country: COUNTRY,
  };

  const [personaldetails, setPersonalDetails] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isClick, setIsClick] = useState(false);//

  const formHandler = (event) => {
    setIsClick(true);
    event.preventDefault();
    setFormErrors(validate(personaldetails)); //
  };

  function isFormValid() {
    if (Object.keys(formErrors).length <= 0 && isClick == true) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    console.log(formErrors)
    if (isFormValid()) {
      handleSubmit(personaldetails)
      setIsClick(false)
      setPersonalDetails(initialValues);
    }
  }, [formErrors])

  const validate = (values) => { //
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.fullname) {
      errors.fullname = "Fullname is required"
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "Phonenumber is required"
    } else if (values.phonenumber.length < 7) {
      errors.phonenumber = "Phonenumber must be 7 digits"
    }
    return errors;
  };

  return (
    <div>
      <h1 className="heading_title">User Signup Form</h1>
      <form className="form_container" onSubmit={(event) => formHandler(event)}>
        <div className="form__control">
          <label htmlFor="fullname">Name<span style={{ color: "red" }}>*</span></label>
          <input
            type="text"
            placeholder="Enter your name"
            name="fullname"
            id="fullname"
            value={personaldetails.fullname}
            onChange={(event) =>
              setPersonalDetails({
                ...personaldetails,
                fullname: event.target.value,
              })
            }
          />
        </div>
        <p className="error">{formErrors.fullname}</p>
        <div className="form__control">
          <label htmlFor="email">Email<span style={{ color: "red" }}>*</span> </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={personaldetails.email}
            onChange={(event) =>
              setPersonalDetails({
                ...personaldetails,
                email: event.target.value,
              })
            }
          />
        </div>
        <p className="error">{formErrors.email}</p>
        <div className="form__control">
          <label htmlFor="phonenumber">Phone Number<span style={{ color: "red" }}>*</span>  </label>
          <input
            type="number"

            placeholder="+977 XXXXXX"
            name="phonenumber"
            id="phonenumber"
            value={personaldetails.phonenumber}
            onChange={(event) =>
              setPersonalDetails({
                ...personaldetails,
                phonenumber: event.target.value,
              })
            }
          />
        </div>
        <p className="error">{formErrors.phonenumber}</p>
        <div className="form__control">
          <label htmlFor="dob">DOB  </label>
          <input
            type="date"
            placeholder="Enter your Date of Birth"
            name="dob"
            id="dob"
            value={personaldetails.dob}
            onChange={(event) =>
              setPersonalDetails({
                ...personaldetails,
                dob: event.target.value,
              })
            }
          />
        </div>
        <div className="form__control">
          <div>
            <div>
              <label htmlFor="city">City  </label>
              <input
                type="text"
                placeholder="Enter your City"
                name="city"
                id="city"
                value={personaldetails.city}
                onChange={(event) =>
                  setPersonalDetails({
                    ...personaldetails,
                    city: event.target.value,
                  })
                }
              />
            </div>
            <div className="form__control">
              <label htmlFor="district">District  </label>
              <input
                type="text"
                placeholder="Enter your District"
                name="district"
                id="district"
                value={personaldetails.district}
                onChange={(event) =>
                  setPersonalDetails({
                    ...personaldetails,
                    district: event.target.value,
                  })
                }
              />
            </div>
            <div className="form__control">
              <label htmlFor="provinces">Province  </label>
              <select
                id="provinces"
                name="provinces"
                defaultValue={personaldetails.province}
                onChange={(event) =>
                  setPersonalDetails({
                    ...personaldetails,
                    province: event.target.value,
                  })
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <div className="form__control">
              <label htmlFor="country">Country  </label>
              <select
                id="country"
                name="country"
                defaultValue={personaldetails.country}
              >
                <option value="Nepal">Nepal</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="btn_submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
