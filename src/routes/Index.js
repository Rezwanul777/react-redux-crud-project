import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBook from '../features/books/AddBook'
import BookView from '../features/books/BookView'
import Navbar from '../layout/Navbar'
import Error from '../pages/Error'
import Home from '../pages/Home'

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/show-books' element={<AddBook/>}/>
         <Route path='/add-books' element={<BookView/>}/>
         <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Index