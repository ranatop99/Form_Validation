import React, { useEffect, useState } from "react";
import "./Signup.css";
import List from "./list/List";
import Form from "./form/Form";
import Modal from "react-modal";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    <div className="main">
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

      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontFamily: "Poppins" }} align="center" >Fullname</TableCell>
              <TableCell style={{ fontFamily: "Poppins" }} align="center">Email</TableCell>
              <TableCell style={{ fontFamily: "Poppins" }} align="center">Phone Number</TableCell>
              <TableCell style={{ fontFamily: "Poppins" }} align="center">Date of Birth</TableCell>
              <TableCell style={{ fontFamily: "Poppins" }} align="center">City</TableCell>
              <TableCell style={{ fontFamily: "Poppins" }} align="center">District</TableCell>
              <TableCell style={{ fontFamily: "Poppins" }} align="center">Province</TableCell>
              <TableCell style={{ fontFamily: "Poppins" }} align="center">Country</TableCell>
              <TableCell style={{ fontFamily: "Poppins" }} align="center">Action</TableCell>
              <TableCell style={{ fontFamily: "Poppins" }} align="center">Profile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {detailstorages.map((details, index) => {
              return (
                <List
                  key={index}
                  details={details}
                  deleteHandler={deleteHandler}
                  updateStatus={updateStatus}
                  handleSubmit={handleSubmit}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
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
