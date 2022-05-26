import React, { useEffect, useState } from "react";
import "./InvoiceData.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";
import Download from "./Download";
import SendToMail from "./SendToMail";

function InvoiceData({ changescreen, setChangescreen, editable, setEditable }) {
  let todos = useSelector((state) => state);
  let dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  const showData = () => {
    setshow(true);
  };
  const GoBack = () => {
    setshow(false);
  };

  const deleteData = (id) => {
    dispatch(deleteTodo(id));
    setshow(false);
  };

  const getId = (id) => {
    showData();
    for (var i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        setData(todos[i]);
        break;
      }
    }
  };
  
  const showInput = () => {
    setChangescreen(true);
    setSearch("")
  };

  const showEditableInput = () => {
    setEditable(true);
    setChangescreen(true);
  };
  return (
    <>
      {show ? (
        <>
          <div
            data-testid="header"
            className="d-flex flex-column justify-content-center align-items-center mx-auto "
          >
            <div
              className="d-flex justfy-content-start mb-5 invoice"
              onClick={GoBack}
            >
              Go Back
            </div>
            <div className="d-flex justify-content-between justify-content-center align-items-center invoice-data mb-5">
              <div className="d-flex ">
                <div className="mx-1">status</div>
                <div className="mx-5">pending</div>
              </div>
              <div className="">
                <button className="mx-3" onClick={showEditableInput}>
                  edit
                </button>
                <button
                  className="mx-3"
                  onClick={() => deleteData(`${data.id}`)}
                >
                  Delete
                </button>
                <button className="mx-3">mark as paid</button>
              </div>
            </div>
            <div className="invoice-card" id="capture">
              <div className=" d-flex justify-content-between mb-5 mt-2 mx-3">
                <div>
                  <div>{data.id}</div>
                  <div>{data.input.item_name}</div>
                </div>

                <div>
                  <div>{data.input.street_address}</div>
                  <div>{data.input.city}</div>
                  <div>{data.input.zip}</div>
                  <div>{data.input.country}</div>
                </div>
              </div>
              <div className="d-flex justify-content-around mb-5 mx-3">
                <div>
                  <div className="my-3">
                    <div>Invoice date</div>
                    <div>{data.input.invoice_date}</div>
                  </div>
                  <div>
                    <div>Payment date</div>
                    <div>{data.input.payment_due}</div>
                  </div>
                </div>
                <div className="">
                  <div className="my-2">Bill to</div>
                  <div className="my-2">{data.input.client_name}</div>
                  <div className="my-2 ">
                    <div>{data.input.street_address}</div>
                    <div>{data.input.city}</div>
                    <div>{data.input.zip}</div>
                    <div>{data.input.country}</div>
                  </div>
                </div>
                <div>
                  <div className="my-2">Sent to</div>
                  <div>{data.input.client_email}</div>
                </div>
              </div>
              <div className="d-flex invoice-card-card justify-content-between mx-3">
                <div>
                  <div className="my-3">Item name</div>
                  <div>{data.input.item_name}</div>
                </div>
                <div className="d-flex ">
                  <div>
                    <div className="my-3 mx-5">Qty.</div>
                    <div>{data.input.qty}</div>
                  </div>
                  <div>
                    <div className="my-3 mx-5">Price</div>
                    <div>{data.input.price}</div>
                  </div>
                  <div>
                    <div className="my-3 mx-5">Total</div>
                    <div>{data.input.price * data.input.qty}</div>
                  </div>
                </div>

                <div></div>
              </div>
              <div className="invoice-card-card-card d-flex justify-content-between mb-5 mx-3">
                <div>Total</div>
                <div>{data.input.price * data.input.qty}</div>
              </div>
            </div>
            <div className="">
              <SendToMail email={data.input.client_email} />
              <Download rootid={"capture"} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between mx-auto mb-5 invoice">
            <h1>Invoices</h1>
            <input
              type="text"
              value={search}
              placeholder="Client Name..."
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <div className="d-flex">
              <div className="mx-5">
                <select id="mySelect">
                  <option value="Pending">Pending</option>
                  <option value="Outgoing">Outgoing</option>
                  <option value="Paid">Paid</option>
                  <option value="clear filter">Clear filter</option>
                </select>
              </div>
              <button onClick={showInput}>+ New Invoice</button>
            </div>
          </div>
          {todos
            .filter((data) => {
              if (search == "" ) {
                return data
              } else {
                return data.input.client_name == search;;
              }
            })
            .map((todo) => (
              <div
                key={todo.id}
                onClick={() => getId(`${todo.id}`)}
                className="d-flex justify-content-around invoice-data justify-content-center align-items-center mx-auto  mb-5"
              >
                <div onClick={() => getId(`${todo.id}`)}>{todo.id}</div>
                <div>Due {todo.input.invoice_date}</div>
                <div>{todo.input.client_name}</div>
                <div>{todo.input.qty * todo.input.price}</div>
                <div>Pending</div>
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default InvoiceData;
