import logo from './logo.svg';
import './App.css';
import BookListing from './Pages/BookListing';
import { Route, Routes } from 'react-router-dom';
import AddBookForm from './Pages/addBookForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BookListing/>} />
        <Route path='/add' element={<AddBookForm />} />
        </Routes>
    </div>

  );
}

export default App;
