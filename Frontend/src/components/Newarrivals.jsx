import  { useContext } from 'react'
import { Appcontext } from './../context/Appcontext';
import Bookcard from './Bookcard';

function Newarrivals() {
  const{booksdata}=useContext(Appcontext)
  return (
    <div className="my-17  ">
      <h1 className='text-2xl md:text-5xl font-bold text-gray-800 text-center'>
        New Arrival 
      </h1>
      <div className='my-10 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        {
          booksdata.slice(0,6).map((book)=>(
            <Bookcard  book={book}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default Newarrivals