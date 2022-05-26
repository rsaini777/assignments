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
  const [errors_client_name,setErrors_client_name]=useState("")
  const [errors_client_email,setErrors_client_email]=useState("")
  const [errors_street_address,setErrors_street_address]=useState("")
  const [errors_city,setErrors_city]=useState("")
  const [errors_zip,setErrors_zip]=useState("")
  const [errors_country,setErrors_country]=useState("")
  const [errors_invoice_date,setErrors_invoice_date]=useState("")
  const [errors_payment_date,setErrors_payment_date]=useState("")
  const [errors_product_description,setErrors_product_description]=useState("")
  const [errors_item_name,setErrors_itme_name]=useState("")
  const [errors_qty,setErrors_qty]=useState("")
  const [errors_tax,setErrors_tax]=useState("")
  const [errors_price,setErrors_price]=useState("")
  
  

  const showResult = () => {
    let emailre = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let numre = /^\d*(\.\d+)?$/
    let emailresult=emailre.test(input.client_email)
    if (input.client_name=="") {
     
      setErrors_client_name("This Field Is Required") 
    } else if (input.client_name < 4) {
      setErrors_client_name("Please Use Valid Name")
    }
    if (input.client_email=="") {
      setErrors_client_email("This Field Is Required")  
    } else if (!emailresult) {
      
      setErrors_client_email("Please Use Valid Email")
    }
    if (input.street_address=="") {
      setErrors_street_address("This Field Is Required") 
    } else if (input.street_address < 4) {
      setErrors_street_address("Please Use Valid Street_Address")
    }
    if (input.city=="") {
      setErrors_city("This Field Is Required") 
    } else if (input.city < 4) {
      setErrors_city("Please Use Valid City")
    }
    if (input.zip=="") {
      setErrors_zip("This Field Is Required") 
    } else if (!numre.test(input.zip)) {
      setErrors_zip("Please Use Valid Zip")
    }
    if (input.country=="") {
      setErrors_country("This Field Is Required") 
    } else if (input.country < 4) {
      setErrors_country("Please Use Valid State")
    }
    if (input.invoice_date=="") {
      setErrors_invoice_date("This Field Is Required") 
    }
    if (input.payment_date=="") {
      setErrors_payment_date("Please Use Valid Email")  
    }
    if (input.product_description=="") {
      setErrors_product_description("This Field Is Required") 
    } else if (input.product_description < 10) {
      setErrors_product_description("Please Use Valid Product_Description")
    }
    if (input.item_name=="") {
      setErrors_itme_name("This Field Is Required") 
    } else if (input.item_name < 4) {
      setErrors_itme_name("Please Use Valid Item_Name")
    }
    if (input.qty=="") {
      setErrors_qty("This Field Is Required") 
    } else if (!numre.test(input.qty)) {
      setErrors_qty("Please Use Valid Qty")
    }
    if (input.tax=="") {
      setErrors_tax("This Field Is Required") 
    } else if (!numre.test(input.tax)) {
      setErrors_tax("Please Use Valid Tax")
    }
    if (input.price=="") {
      setErrors_price("This Field Is Required")  
    } else if (!numre.test(input.price)) {
      setErrors_price("Please Use Valid Price")
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
            <label className="errors">{errors_client_name}</label>
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
            <label className="errors">{errors_client_email}</label>
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
            <label className="errors">{errors_street_address}</label>
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
            <label className="errors">{errors_city}</label>
          </div>
          <div className="col-4">
            <label for="name">Zip:</label>
            <input
              value={input.zip}
              onChange={(e) => setInput({ ...input, zip: e.target.value })}
              type="text"
              className="col form-control"
            />
            <label className="errors">{errors_zip}</label>
          </div>
          <div className="col-4">
            <label for="name">State:</label>
            <input
              value={input.country}
              onChange={(e) => setInput({ ...input, country: e.target.value })}
              type="text"
              className="col form-control"
            />
            <label className="errors">{errors_country}</label>
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
            <label className="errors">{errors_invoice_date}</label>
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
            <label className="errors">{errors_payment_date}</label>
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
            <label className="errors">{errors_product_description}</label>
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
            <label className="errors">{errors_item_name}</label>
          </div>
          <div className="col-3">
            <label for="name">Item quantity:</label>
            <input
              value={input.qty}
              onChange={(e) => setInput({ ...input, qty: e.target.value })}
              type="number"
              className=" form-control"
            />
            <label className="errors">{errors_qty}</label>
          </div>
          <div className="col-3">
            <label for="name">Tax percentage:</label>
            <input
              value={input.tax}
              onChange={(e) => setInput({ ...input, tax: e.target.value })}
              type="text"
              className=" form-control"
            />
            <label className="errors">{errors_tax}</label>
          </div>
          <div className="col-3">
            <label for="name">Item Price:</label>
            <input
              value={input.price}
              onChange={(e) => setInput({ ...input, price: e.target.value })}
              type="text"
              className=" form-control"
            />
            <label className="errors">{errors_price}</label>
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
