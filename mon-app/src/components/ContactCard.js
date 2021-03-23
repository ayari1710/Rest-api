import React from "react";
import { deletcontact, getcontact } from "../action/contact";
import { Editcontact } from "../action/edit";
import {Card}from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const ContactCard = ({ el }) => {
  const Dispatch = useDispatch();
  const handleEdit = () => {
    Dispatch(Editcontact());
    Dispatch(getcontact(el._id));
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{el.email}</Card.Subtitle>
          <Card.Text>{el.phone}</Card.Text>
          <Card.Link href="#"> <Link to="/edit">
        <button onClick={handleEdit}>Edit</button>
      </Link></Card.Link>
          <Card.Link href="#">
      <button onClick={() => Dispatch(deletcontact(el._id))}>delete</button></Card.Link>
        </Card.Body>
      </Card>

     
    </div>
  );
};

export default ContactCard;
