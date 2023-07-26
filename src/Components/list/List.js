import React from "react";
import "./List.css";

const List = ({ details, deleteHandler, updateStatus }) => {
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
    <tr className="display_section">
      <td>{fullname}</td>
      <td>{email}</td>
      <td>{phonenumber}</td>
      <td>{dob}</td>
      <td>{city}</td>
      <td>{district}</td>
      <td>{province}</td>
      <td>{country}</td>
      <td>
        <button className="delete_btn" onClick={() => deleteHandler(email)}>
          delete
        </button>
      </td>
      <td>
        <button
          className="update_btn"
          onClick={() => updateStatus(true, email)}
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default List;
