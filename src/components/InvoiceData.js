import React, { useEffect, useState } from "react";
import "./InvoiceData.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";
import Download from "./Download";
import SendToMail from "./SendToMail";

function InvoiceData({ changescreen, setChangescreen, editable, setEditable,setGooglescreen,setUser,googleDivId }) {
  let todos = useSelector((state) => state);
  let dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [paid, setPaid] = useState(false);

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
  function handleSignOut(e){
    setUser({})
    setGooglescreen(true)
}
  const showInput = () => {
    setChangescreen(true);
    setSearch("");
  };

  const showEditableInput = () => {
    setEditable(true);
    setChangescreen(true);
  };
  function dateCompare(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if (date1 >= date2) {
      return "Outstanding";
    } else if (date1 < date2) {
      return "Pending";
    }
  }

  function PaymentPaid() {
    setPaid("paid");
  }

  return (
    <>
      {show ? (
        <>
          <div
            data-testid="header"
            className="d-flex flex-column justify-content-center align-items-center mx-auto "
          >
            <div
              className="d-flex justfy-content-start mb-5 mt-5 back font2 p-3"
              onClick={GoBack}
            >
              Go Back
            </div>
            <div className="d-flex justify-content-between justify-content-center align-items-center invoice-data mb-5 p-2">
              <div className="d-flex justify-content-between ">
                <div className="mx-1">status</div>
                <div className="mx-5">
                  {paid
                    ? paid
                    : dateCompare(
                        data.input.invoice_date,
                        data.input.payment_date
                      )}
                </div>
              </div>
              <div className="">
                <button className="mx-3 btn botton" onClick={showEditableInput}>
                  edit
                </button>
                <button
                  className="mx-3 btn btn-danger"
                  onClick={() => deleteData(`${data.id}`)}
                >
                  Delete
                </button>
                <button className="mx-3 btn btn-success" onClick={PaymentPaid}>
                  mark as paid
                </button>
              </div>
            </div>

            <div className="invoice-card" id="capture">
              <div className="d-flex justify-content-center mt-3">
                <div className=" font1 mb-5 mt-2 mx-3">
                  <div>
                    <div>
                      <label>ID-</label>
                      {data.id}
                    </div>
                    <hr></hr>
                    <div className="">
                      <div className="">
                        <label>Bill to-</label> {data.input.client_name}
                      </div>
                      <hr></hr>
                      <div className=" ">
                        <div>{data.input.street_address}</div>
                        <div>{data.input.city}</div>
                        <div>{data.input.zip}</div>
                        <div>{data.input.country}</div>
                      </div>
                    </div>
                    <div>
                      <hr></hr>
                      <div>
                        <label>Email-</label>
                        {data.input.client_email}
                      </div>
                    </div>
                    <hr></hr>
                    <div>
                      <label>Item-</label>
                      {data.input.item_name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="  ">
                <div>
                  <hr></hr>
                  <div className="d-flex justify-content-around mb-5">
                    <div>
                      {" "}
                      <label>Invoice Date-</label>
                      {data.input.invoice_date}
                    </div>
                    <div>
                      <label>Payment Date-</label>
                      {data.input.payment_date}
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="d-flex invoice-card-card justify-content-around mx-3 p-4 font2">
                <div>
                  <div className="">Item name</div>
                  <div>{data.input.item_name}</div>
                </div>

                <div className="d-flex justify-content-around">
                  <div className="ms-5">
                    <div className="">Qty.</div>
                    <div>{data.input.qty}</div>
                  </div>

                  <div className="ms-5">
                    <div className="">Tax</div>
                    <div>{data.input.tax}</div>
                  </div>
                  <div className="ms-5">
                    <div className="">Price</div>
                    <div>{`$ ${data.input.price}`}</div>
                  </div>
                  <div className="ms-5">
                    <div className=" ">Total</div>
                    <div>{`$ ${data.input.price * data.input.qty}`}</div>
                  </div>
                </div>
              </div>

              <div className="invoice-card-card-card d-flex justify-content-around align-items-center mb-5 mt-4 font1">
                <div className=" ">Total</div>
                <div>{`$ ${data.input.price * data.input.qty}`}</div>
              </div>
            </div>
            <div className="mt-5 ">
              <SendToMail email={data.input.client_email} />
              <Download rootid={"capture"} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between mx-auto mb-5 invoice container mt-5">
            <h1>Invoices</h1>
            <input
              type="text"
              value={search}
              placeholder="Search Client_Name..."
              onChange={(e) => setSearch(e.target.value)}
              className="wide"
            ></input>
            <button onClick={showInput} className="botton btn font2">
              + New Invoice
            </button>
            <button  className=" btn btn-primary font2" onClick={(e)=>handleSignOut(e)}>
              Logout
            </button>
          </div>

          {todos
            .filter((data) => {
              if (search == "") {
                return data;
              } else {
                return data.input.client_name == search;
              }
              
            })
            .map((todo) => (
              <div
                key={todo.id}
                onClick={() => getId(`${todo.id}`)}
                className="d-flex justify-content-around container invoice-data justify-content-center align-items-center mx-auto  mb-5"
              >
                <div onClick={() => getId(`${todo.id}`)}>{todo.id}</div>
                <div>Due {todo.input.payment_date}</div>
                <div>{todo.input.client_name}</div>
                <div>{todo.input.qty * todo.input.price}</div>
                <div>{todo.input.client_email}</div>
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default InvoiceData;
