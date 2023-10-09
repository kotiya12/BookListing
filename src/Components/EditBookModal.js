import React, { useState } from "react";
import bookApi from "../api/bookApi";
import { useDispatch } from "react-redux";
import { editBookDetail } from "../store/slices/BookSlice";
import "../Pages/page.css";

const EditBookModal = ({ book, onClose, onUpdate }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    try {
      const updatedBook = { ...book, id: book.id, title, author };
      const response = await bookApi.put(`/books/${book.id}`, updatedBook);
      dispatch(editBookDetail(response.data));
      onClose();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="edit-modal">
      <h2>Edit Book</h2>
      <div className="edit-form">
        <label>Title:</label>
        <input
          className="input-edit"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="edit-form">
        <label>Author:</label>
        <input
          className="input-edit"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="edit-btn">
        <button onClick={handleUpdate}>Update </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditBookModal;
