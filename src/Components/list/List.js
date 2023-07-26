import React from "react";
import "./List.css";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';


const List = ({ details, deleteHandler, updateStatus, handleSubmit }) => {
  const {
    fullname,
    email,
    phonenumber,
    dob,
    city,
    district,
    province,
    country,
  } = details;

  return (

    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell style={{ fontFamily: "Poppins" }} align="left">{fullname}</TableCell>
      <TableCell style={{ fontFamily: "Poppins" }} align="left">{email}</TableCell>
      <TableCell style={{ fontFamily: "Poppins" }} align="left">{phonenumber}</TableCell>
      <TableCell style={{ fontFamily: "Poppins" }} align="left">{dob}</TableCell>
      <TableCell style={{ fontFamily: "Poppins" }} align="left">{city}</TableCell>
      <TableCell style={{ fontFamily: "Poppins" }} align="left">{district}</TableCell>
      <TableCell style={{ fontFamily: "Poppins" }} align="left">{province}</TableCell>
      <TableCell style={{ fontFamily: "Poppins" }} align="left">{country}</TableCell>
      <TableCell style={{ fontFamily: "Poppins" }} align="right">
        <button className="delete_btn" onClick={() => deleteHandler(email)}>
          Delete
        </button>
        <button
          className="update_btn"
          onClick={() => updateStatus(true, email)}
        >Update</button>
      </TableCell>
      <TableCell style={{ fontFamily: "Poppins", fontWeight: "bold" }} align="center">
        <Link to="/profile" state={{ details }} >Click here</Link>
      </TableCell>
    </TableRow>
  );
};

export default List;
