import { useContext} from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Myorders from './pages/Myorders';
import AddAddress from './pages/AddAddress';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import { Appcontext } from './context/Appcontext';
import Adminlayout from './pages/admin/Adminlayout';
import Productlist from './pages/admin/Productlist';
import Addproduct from './pages/admin/Addproduct';
import Orders from './pages/admin/Orders';
import Adminlogin from './pages/admin/Adminlogin';
import Publicroute from './pages/Publicroute';

function App() {
  const {isadmin}=useContext(Appcontext)

  
 const location = useLocation();

const hideNavbar =
  location.pathname.includes("admin") 
  
  return (
    <>
     <div className='px-2 md:px-4 lg:px-5 xl:px-7'>
      <Toaster/>
      {hideNavbar  ? null: <Navbar/>}
      
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/book/:id' element={<BookDetails/>}/>
        <Route path='/signup' element={<Signup/>}/>
       <Route path="/login" element={
    <Publicroute>
        <Login />
    </Publicroute>
} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-orders' element={<Myorders/>}/>
        <Route path='/add-address' element={<AddAddress/>}/>
         <Route path='/admin' element={isadmin ? <Adminlayout/>: <Adminlogin/>}>
          <Route index element={isadmin ? <Productlist/>:null}/>
         <Route path='add-product' element={isadmin ? <Addproduct/>:null}/>
         <Route path='orders' element={isadmin ? <Orders/>:null}/>
         </Route>
      </Routes>
      {
        hideNavbar ? null : <Footer/>
      }
     </div>
    </>
  )
}

export default App
