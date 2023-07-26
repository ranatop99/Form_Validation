import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./profile.css"
import Form from "../Components/form/Form";
import Modal from 'react-modal';

const Profile = () => {

  const [isUpdate, setIsUpdate] = useState(false);

  const location = useLocation();

  const detail = location.state?.details;
  const handleSubmitFn = location.state?.handleSubmit;

  const {
    fullname,
    email,
    phonenumber,
    dob,
    city,
    district,
    province,
    country,
  } = detail;

  return (
    <div className="profile__container">
      <div>
        <h1>Profile</h1>
        <p><span className="fonts">FullName:</span> {fullname}</p>
        <p><span className="fonts">Email:</span> {email}</p>
        <p><span className="fonts">PhoneNumber:</span> {phonenumber}</p>
        <p><span className="fonts">DOB:</span> {dob}</p>
        <p><span className="fonts">City:</span> {city}</p>
        <p><span className="fonts">District:</span> {district}</p>
        <p><span className="fonts">Province:</span> {province}</p>
        <p><span className="fonts">Country:</span> {country}</p>
        <button
          className="update_btn"
          onClick={() => setIsUpdate(true)}
        >
          Update
        </button>
        <Link to="/">Go to Sign up</Link>
      </div>

      {/** Update Form Modal */}
      <Modal
        isOpen={isUpdate}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <Form handleSubmit={handleSubmitFn} />
      </Modal>

    </div>
  );
};

const customStyles = {

};

export default Profile;
