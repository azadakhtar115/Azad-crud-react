import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../src/action/contactAction";
import { useHistory, useParams } from "react-router-dom";

export default function EditContacts() {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
 
  const contact = useSelector((state) => state.contact.contact);

  console.log(contact);
  useEffect(() => {
    dispatch(getContact(id));
  }, []);

  const onUpdateContact = (data) => {
    dispatch(updateContact(data));
    console.log(data);
    history.push("/");
  };

  return (
    <form
      className="createadd"
      onSubmit={handleSubmit(onUpdateContact)}
      key="id"
    >
      <input
        type="number"
        Value={contact ? contact.id : ""}
        id="id"
        name="id"
        placeholder="id"
        ref={register}
      />

      <input
        name="name"
        Value={contact ? contact.name : ""}
        ref={register}
        placeholder="name"
      />
      <input
        name="username"
        ref={register}
        Value={contact ? contact.username : ""}
        placeholder="username"
      />
      <input
        name="email"
        ref={register}
        Value={contact ? contact.email : ""}
        placeholder="email"
      />
      <input type="submit" />
    </form>
  );
}
