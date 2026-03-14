import React, { useContext } from 'react'

import { Appcontext } from '../context/Appcontext';
import Bookcard from '../components/Bookcard';

function Books() {
  const {booksdata,searchquery,selectedcategory}=useContext(Appcontext)
  const filteredbooks=booksdata.filter((book)=>{
    const matchsearch=book.title.toLowerCase().includes(searchquery.toLowerCase())
    const matchcategory= selectedcategory ? book.category ===selectedcategory :true
    return matchcategory && matchsearch
  })
  return (
    <div>
      <h1 className='my-6 text-2xl md:text-5xl font-bold text-gray-800 text-center'>
        All Books 
      </h1>
      <div className='my-10 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        {
          filteredbooks.map((book)=>(
            <Bookcard key={book._id} book={book}/>
          ))
        }
      </div>
    </div>
  )
}

export default Books