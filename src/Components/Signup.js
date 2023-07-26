import React, { useEffect, useState } from "react";
import Profile from "../Pages/Profile";
import "./Signup.css";
import List from "./list/List";
import Form from "./form/Form";
import Modal from "react-modal";

const Signup = () => {
  const [detailstorages, setDetailsStorages] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");

  function handleSubmit(personalDetail) {
    if (isUpdate) {
      let index = detailstorages.findIndex((detail) => {
        return detail.email.toLowerCase() === currentEmail.toLowerCase();
      });

      let newDetailStorage = [...detailstorages];
      newDetailStorage[index] = personalDetail;
      setDetailsStorages(newDetailStorage);
      setIsUpdate(false);
      setCurrentEmail("");
    } else {
      setDetailsStorages([...detailstorages, personalDetail]);
    }
  }

  function updateStatus(status, email) {
    setCurrentEmail(email);
    setIsUpdate(status);
  }

  function deleteHandler(email) {
    let newDetailStorage = detailstorages.filter((detail) => {
      return email.toLowerCase() !== detail.email.toLowerCase();
    });
    setDetailsStorages(newDetailStorage);
  }

  return (
    <div>
      <div className="main_container">
        <Form handleSubmit={handleSubmit} />
      </div>

      {/** Update Form Modal */}
      <Modal
        isOpen={isUpdate}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <Form handleSubmit={handleSubmit} />
      </Modal>

      <div className="display_section">
        <div className="details_section">
          <div className="input_details">
            <table>
              <tr>
                <th>Fullname</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Date of Birth</th>
                <th>City</th>
                <th>District</th>
                <th>Province</th>
                <th>Country</th>
              </tr>

              {detailstorages.map((details, index) => {
                return (
                  <List
                    key={index}
                    details={details}
                    deleteHandler={deleteHandler}
                    updateStatus={updateStatus}
                  />
                );
              })}
            </table>
          </div>
          <Profile />
        </div>
      </div>
    </div>
  );
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default Signup;
