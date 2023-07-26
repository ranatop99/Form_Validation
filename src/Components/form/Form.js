import React, { useState } from "react";
import "./Form.css";
const Form = ({ handleSubmit }) => {
  const COUNTRY = "Nepal";

  const initialValues = {
    fullname: "",
    email: "",
    phonenumber: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: COUNTRY,
  };

  const [personaldetails, setPersonalDetails] = useState(initialValues);

  const formHandler = (event) => {
    event.preventDefault();
    handleSubmit(personaldetails);
    setPersonalDetails(initialValues);
  };

  return (
    <div>
      <h1 className="heading_title">User Signup Form</h1>
      <form className="form_container" onSubmit={(event) => formHandler(event)}>
        <div>
          <label htmlFor="fullname">Name : </label>
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
        <div>
          <label htmlFor="email">Email : </label>
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
        <div>
          <label htmlFor="phonenumber">Phone Number : </label>
          <input
            type="tel"
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

        <div>
          <label htmlFor="dob">DOB : </label>
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
        <div>
          <label>Address :</label>
          <div>
            <div>
              <label htmlFor="city">City : </label>
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
            <div>
              <label htmlFor="district">District : </label>
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
            <div>
              <label htmlFor="provinces">Province : </label>
              <select
                id="provinces"
                name="provinces"
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
            <div>
              <label htmlFor="country">Country : </label>
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
