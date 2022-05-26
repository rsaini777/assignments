import React, { useState } from "react";

import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateTodo } from "../redux/actions";
import "./InvoiceModal.css";

function InvoiceModal({
  changescreen,
  setChangescreen,
  editable,
  setEditable,
}) {
  let dispatch = useDispatch();
  let todos = useSelector((state) => state);

  const sendData = () => {
    dispatch(
      addTodo({
        id: uuid(),
        input,
      })
    );
    setInput("");
  };
  const editData = () => {
    dispatch(
      updateTodo({
        ...todos,
        id: uuid(),
        input,
      })
    );
    setInput("");
    setEditable(false);
  };

  const [input, setInput] = useState({
    client_name: "",
    client_email: "",
    street_address: "",
    city: "",
    zip: "",
    country: "",
    invoice_date: "",
    payment_date: "",
    product_description: "",
    item_name: "",
    qty: "",
    tax: "",
    price: "",
  });
  const error = {
    client_name: "",
    client_email: "",
    street_address: "",
    city: "",
    zip: "",
    country: "",
    invoice_date: "",
    payment_date: "",
    product_description: "",
    item_name: "",
    qty: "",
    tax: "",
    price: "",
  };
  console.log(error)
  const showResult = () => {
    let emailre = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let numre = /^\d*(\.\d+)?$/
    let emailresult=emailre.test(input.client_email)
    if (input.client_name=="") {
      error.client_name = "This field is required";
    } else if (input.client_name < 4) {
      error.client_name = "Please Use Valid Name";
    }
    if (input.client_email=="") {
      error.client_email = "This field is required";
    } else if (!emailresult) {
      error.client_email = "Please Use Valid Email";
    }
    if (input.street_address=="") {
      error.street_address = "This field is required";
    } else if (input.street_address < 4) {
      error.street_address = "Please Use Valid Street_Address";
    }
    if (input.city=="") {
      error.city = "This field is required";
    } else if (input.city < 4) {
      error.city = "Please Use Valid City";
    }
    if (input.zip=="") {
      error.city = "This field is required";
    } else if (!numre.test(input.zip)) {
      error.zip = "Please Use Valid Zip";
    }
    if (input.country=="") {
      error.country = "This field is required";
    } else if (input.country < 4) {
      error.country = "Please Use Valid State";
    }
    if (input.invoice_date=="") {
      error.invoice_date = "This field is required";
    }
    if (input.payment_date=="") {
      error.payment_date = "This field is required";
    }
    if (input.product_description=="") {
      error.product_description = "This field is required";
    } else if (input.product_description < 10) {
      error.product_description = "Please Use Valid Product_Description";
    }
    if (input.item_name=="") {
      error.item_name = "This field is required";
    } else if (input.item_name < 4) {
      error.item_name = "Please Use Valid Item_Name";
    }
    if (input.qty=="") {
      error.qty = "This field is required";
    } else if (!numre.test(input.zip)) {
      error.qty = "Please Use Valid Qty";
    }
    if (input.tax=="") {
      error.tax = "This field is required";
    } else if (!numre.test(input.zip)) {
      error.tax = "Please Use Valid Tax";
    }
    if (input.price=="") {
      error.price = "This field is required";
    } else if (!numre.test(input.zip)) {
      error.price = "Please Use Valid Price";
    } else {
      if (editable) {
        editData();
      } else {
        sendData();
      }
      setChangescreen(false);
    }
  };
  return (
    <>
      <div className="container main mt-5">
        <h1 className="mx-auto mt-5">Enter Details</h1>
        <div className="row mt-5">
          <div className="col-6">
            <label for="name">Client Name:</label>
            <input
              value={input.client_name}
              onChange={(e) =>
                setInput({ ...input, client_name: e.target.value })
              }
              type="text"
              className="col form-control"
              id="name"
            />
            <label className="error">{error.client_name}</label>
          </div>

          <div className="col-6">
            <label for="name">Email:</label>
            <input
              value={input.client_email}
              onChange={(e) =>
                setInput({ ...input, client_email: e.target.value })
              }
              type="email"
              className="col form-control"
              id="name"
              required
            />
            <label className="error">{error.client_email}</label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <label for="name">Address:</label>
            <input
              value={input.street_address}
              onChange={(e) =>
                setInput({ ...input, street_address: e.target.value })
              }
              type="text"
              className="col form-control"
              id="name"
            />
            <label className="error">{error.street_address}</label>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-4">
            <label for="name">City:</label>
            <input
              value={input.city}
              onChange={(e) => setInput({ ...input, city: e.target.value })}
              type="text"
              className="col form-control"
            />
            <label className="error">{error.city}</label>
          </div>
          <div className="col-4">
            <label for="name">Zip:</label>
            <input
              value={input.zip}
              onChange={(e) => setInput({ ...input, zip: e.target.value })}
              type="text"
              className="col form-control"
            />
            <label className="error">{error.zip}</label>
          </div>
          <div className="col-4">
            <label for="name">State:</label>
            <input
              value={input.country}
              onChange={(e) => setInput({ ...input, country: e.target.value })}
              type="text"
              className="col form-control"
            />
            <label className="error">{error.country}</label>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <label for="name">Invoice date:</label>
            <input
              value={input.invoice_date}
              onChange={(e) =>
                setInput({ ...input, invoice_date: e.target.value })
              }
              type="date"
              className="col form-control"
            />
            <label className="error">{error.invoice_date}</label>
          </div>
          <div className="col-6">
            <label for="name">Payment date:</label>
            <input
              value={input.payment_date}
              onChange={(e) =>
                setInput({ ...input, payment_date: e.target.value })
              }
              type="date"
              className="col form-control"
            />
            <label className="error">{error.payment_date}</label>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <label for="name">Product Description:</label>
            <textarea
              class="form-control"
              placeholder="Leave a description here"
              id="floatingTextarea"
              value={input.product_description}
              onChange={(e) =>
                setInput({ ...input, product_description: e.target.value })
              }
            ></textarea>
            <label className="error">{error.product_description}</label>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-3">
            <label for="name">Item name:</label>
            <input
              value={input.item_name}
              onChange={(e) =>
                setInput({ ...input, item_name: e.target.value })
              }
              type="text"
              className=" form-control"
            />
            <label className="error">{error.item_name}</label>
          </div>
          <div className="col-3">
            <label for="name">Item quantity:</label>
            <input
              value={input.qty}
              onChange={(e) => setInput({ ...input, qty: e.target.value })}
              type="number"
              className=" form-control"
            />
            <label className="error">{error.qty}</label>
          </div>
          <div className="col-3">
            <label for="name">Tax percentage:</label>
            <input
              value={input.tax}
              onChange={(e) => setInput({ ...input, tax: e.target.value })}
              type="text"
              className=" form-control"
            />
            <label className="error">{error.tax}</label>
          </div>
          <div className="col-3">
            <label for="name">Item Price:</label>
            <input
              value={input.price}
              onChange={(e) => setInput({ ...input, price: e.target.value })}
              type="text"
              className=" form-control"
            />
            <label className="error">{error.price}</label>
          </div>
        </div>

        <button onClick={showResult} className="btn btn-primary mt-5 btn-lg">
          {editable ? "Edit" : "Create Invoice"}
        </button>
      </div>
    </>
  );
}

export default InvoiceModal;
