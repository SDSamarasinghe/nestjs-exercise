import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Book.css";
import sorticon from "./img/sort-up.svg";


const BookDashboard = () => {
  const [books, setBooks] = useState([]);
  const [EmSearch , setemSearch] = useState("");
  const [order, setOrder] = useState("ASC");

  

  useEffect(() => {
    axios.get("http://localhost:3004/book").then((res) => {
        setBooks(res.data.books);
    });
  }, []);

  const deleteBook = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Book!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:3004/book/${id}`)
          .then(() => {
            swal("Book Deleted Successfully!", {
              icon: "success",
            });

            axios
              .get("http://localhost:3004/book")
              .then((res) => {
                setBooks(res.data.books);
              });
          });
      }
    });
  };

  //add sorting algorithm
  const sorting =(col)=>{
    if(order === "ASC"){
      const sorted = [...books].sort((a,b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setBooks(sorted);
      setOrder("DSC")
    }


    if(order === "DSC"){
      const sorted = [...books].sort((a,b) =>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setBooks(sorted);
      setOrder("ASC")
    }
  }


  return (
    <>
      <div className="store-container d-flex justify-content-center p-5">
        <div className=" w-100" id="store-admin-admin456412123">
          <h1> Books </h1>
          <hr/>
          <div className="d-flex">
            <Link to="/add-book">
              <button class="btn btn-primary">
                <i class="fa-solid fa-plus mx-2"></i> Add Book to System
              </button>
            </Link>
          
          <div class="form-row" style={{width:"400px", marginLeft:"30px"}}>
    {/* <div class="form-group col-md-6">
      <select id="inputState" class="form-control"  onChange={e=>setemSearch(e.target.value)}>
        <option selected>Employee Type</option>
        <option>Full Time</option>
        <option>Part Time</option>
      </select>
    </div> */}
    </div>
          </div>
          <table
            class="table table-bordered"
          >
            <thead>
              <tr>
                <th scope="col" onClick={()=>sorting("title")}>Title <img src={sorticon} alt="title" onClick={()=>sorting("title")}/></th>
                <th scope="col" >Book ID</th>
                <th scope="col" onClick={()=>sorting("description")}>Description <img src={sorticon} alt="description" onClick={()=>sorting("description")}/></th>
                <th scope="col" onClick={()=>sorting("author")}>Author <img src={sorticon} alt="author" onClick={()=>sorting("author")}/></th>
                <th scope="col" onClick={()=>sorting("price")}>Price <img src={sorticon} alt="price" onClick={()=>sorting("price")}/></th>
                <th scope="col" onClick={()=>sorting("category")}>Category <img src={sorticon} alt="category" onClick={()=>sorting("category")}/></th>
                <th scope="col" >Actions</th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.filter(value=>{
                  if(EmSearch ===""){
                    return value;
                  }
                  else if(
                    value.bkType.toLowerCase().includes(EmSearch.toLowerCase())
                  ){
                    return value;
                  }
                }).map((bk,index) => (
                  <tr key={index}>
                    <th scope="row" style={{ width: "300px" }}>
                      {bk.title}
                    </th>
                    <td>
                      {(index+1)}
                    </td>
                    <td>{bk.description}</td>
                    <td>{bk.author}</td>
                    <td>{bk.price}</td>
                    <td>{bk.category}</td>
                    <td style={{ width: "300px" }}>
                      <Link to={`/edit/${bk._id}`}>
                        <button
                          type="button"
                          class="btn btn-outline-warning mx-2"
                        >
                          Edit <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteBook(bk._id)}
                        type="button"
                        class="btn btn-outline-danger"
                      >
                        Delete <i class="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookDashboard;
