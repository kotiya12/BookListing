import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React from "react";

const BookTable = ({
  handleSort,
  books,
  handleEdit,
  currentPage,
  handleChangePage,
  sortDirection,
}) => {
  return (
    <div>
      <div className="responsive-table">
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: "gray" }}>
              <TableRow>
                <TableCell style={{ color: "white" }}>
                  <TableSortLabel
                    style={{ color: "white" }}
                    active
                    direction={sortDirection}
                    onClick={handleSort}
                    className="custom-table-sort-label"
                  >
                    Title
                  </TableSortLabel>
                </TableCell>
                <TableCell style={{ color: "white" }}>Author</TableCell>
                <TableCell style={{ color: "white" }}>Country</TableCell>
                <TableCell style={{ color: "white" }}>Link</TableCell>
                <TableCell style={{ color: "white" }}>Pages</TableCell>
                <TableCell style={{ color: "white" }}>Language</TableCell>
                <TableCell style={{ color: "white" }}>Year</TableCell>
                <TableCell style={{ color: "white" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books &&
                books.length > 0 &&
                books
                  .slice((currentPage + 1) * 5 - 5, (currentPage + 1) * 5)
                  .map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.country}</TableCell>
                      <TableCell>{book.link}</TableCell>
                      <TableCell>{book.pages}</TableCell>
                      <TableCell>{book.language}</TableCell>
                      <TableCell>{book.year}</TableCell>
                      <TableCell>
                        <button onClick={() => handleEdit(book)}>Edit</button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={books && books.length}
            page={currentPage}
            onPageChange={handleChangePage}
            rowsPerPage={5}
            rowsPerPageOptions={[5]}
          />
        </TableContainer>
      </div>
    </div>
  );
};

export default BookTable;
