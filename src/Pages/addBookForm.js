import React, { useState } from "react";
import bookApi from "../api/bookApi";
import { useDispatch } from "react-redux";
import { addBook } from "../store/slices/BookSlice";
import "./page.css";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author };
    const response = await bookApi.post("/books", newBook);

    dispatch(addBook(response.data));

    setTitle("");
    setAuthor("");
    navigate("/");
  };

  return (
    <div className="center-container">
      <Typography style={{ color: "darkgray" }} variant="h6">
        Add Book
      </Typography>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            className="input-add"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            className="input-add"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="edit-btn">
          <button className="button-add" type="submit">
            Add Book
          </button>

          <Link to="/">
            {" "}
            <button className="button-add">cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
