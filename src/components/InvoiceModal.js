import React, { useState } from "react";

import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateTodo } from "../redux/actions";

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
        id:uuid(),
        input,
      })
    );
    setInput("");
    setEditable(false)
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

  const showResult = () => {
    if (editable) {
      editData();
    } else {
      sendData();
    }
    setChangescreen(false);
  };
  return (
    <div className="row m-2">
      <input
        value={input.client_name}
        onChange={(e) => setInput({ ...input, client_name: e.target.value })}
        type="text"
        className="col form-control"
      />
      <input
        value={input.client_email}
        onChange={(e) => setInput({ ...input, client_email: e.target.value })}
        type="text"
        className="col form-control"
      />
      <input
        value={input.street_address}
        onChange={(e) => setInput({ ...input, street_address: e.target.value })}
        type="text"
        className="col form-control"
      />
      <input
        value={input.city}
        onChange={(e) => setInput({ ...input, city: e.target.value })}
        type="text"
        className="col form-control"
      />
      <input
        value={input.zip}
        onChange={(e) => setInput({ ...input, zip: e.target.value })}
        type="text"
        className="col form-control"
      />
      <input
        value={input.country}
        onChange={(e) => setInput({ ...input, country: e.target.value })}
        type="text"
        className="col form-control"
      />

      <input
        value={input.invoice_date}
        onChange={(e) => setInput({ ...input, invoice_date: e.target.value })}
        type="text"
        className="col form-control"
      />
      <input
        value={input.payment_date}
        onChange={(e) => setInput({ ...input, payment_date: e.target.value })}
        type="text"
        className="col form-control"
      />

      <input
        value={input.product_description}
        onChange={(e) =>
          setInput({ ...input, product_description: e.target.value })
        }
        type="text"
        className="col form-control"
      />

      <input
        value={input.item_name}
        onChange={(e) => setInput({ ...input, item_name: e.target.value })}
        type="text"
        className="col form-control"
      />
      <input
        value={input.qty}
        onChange={(e) => setInput({ ...input, qty: e.target.value })}
        type="text"
        className="col form-control"
      />
      <input
        value={input.tax}
        onChange={(e) => setInput({ ...input, tax: e.target.value })}
        type="text"
        className="col form-control"
      />
      <input
        value={input.price}
        onChange={(e) => setInput({ ...input, price: e.target.value })}
        type="text"
        className="col form-control"
      />

      <button onClick={showResult}>{editable?"Edit":"Create Invoice"}</button>
    </div>
  );
}

export default InvoiceModal;

