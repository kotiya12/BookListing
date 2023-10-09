import React, { useState, useEffect } from "react";
import bookApi from "../api/bookApi";
import { fetchBook } from "../store/slices/BookSlice";
import { useDispatch, useSelector } from "react-redux";
import EditBookModal from "../Components/EditBookModal";
import Search from "../Components/Search";
import Heading from "../Components/Heading";
import BookTable from "../Components/BookTable";
import { Typography } from "@mui/material";

const BookListing = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);
  const [filterPages, setFilterPages] = useState("");
  const [editingBook, setEditingBook] = useState();
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const items = useSelector((state) => state.book.data);
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const fetchData = async () => {
    const res = await bookApi.get("/books");
    dispatch(fetchBook(res.data));
    setSearch("");
    setSearchFlag(false);
  };

  const handleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [filterPages]);

  useEffect(() => {
    const sortedBooks = [...books].sort((a, b) =>
      sortDirection === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setBooks(sortedBooks);
  }, [sortDirection]);

  useEffect(() => {
    setBooks(items.data);
  }, [items]);

  const handleSearch = () => {
    let filteredBooks = items.data;
    if (search) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setSearchFlag(true);
    setBooks(filteredBooks);
  };

  const handleFilter = () => {
    let filteredBooks = items.data;

    if (filterPages === "<1000") {
      filteredBooks = filteredBooks.filter((book) => book.pages < 1000);
    } else if (filterPages === ">1000") {
      filteredBooks = filteredBooks.filter((book) => book.pages >= 1000);
    }
    setCurrentPage(0);
    setBooks(filteredBooks);
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleCloseEdit = () => {
    setEditingBook(null);
  };

  return (
    <div className="container">
      <Typography variant="h4" align="center" gutterBottom>
        BOOK LISTING
      </Typography>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        fetchData={fetchData}
        searchFlag={searchFlag}
      />
      <Heading filterPages={filterPages} setFilterPages={setFilterPages} />
      <BookTable
        books={books}
        handleSort={handleSort}
        handleEdit={handleEdit}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
        sortDirection={sortDirection}
      />
      {editingBook && (
        <EditBookModal book={editingBook} onClose={handleCloseEdit} />
      )}
    </div>
  );
};

export default BookListing;
