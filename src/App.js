//import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
//import { useEffect,useState,createContext,useContext } from 'react';
//import { useContext,useReducer } from 'react';
import { Routes,Route} from 'react-router-dom';
//import { NameContext } from './context/context';
//import Compenent from "./compenent/compenent"
import Prod from "./compenent/products/productCompenent"
import Header from "./compenent/header/header.compenent"
import Footer from "./compenent/footer/footer.compenent"
import Checkout from "./compenent/checkout/checkout.compenent"
import Thank from "./compenent/thank/thank.compenant"
import Error from "./compenent/error/error.compenent"
import Contact from "./compenent/contact/contact.compenent"
import Livraison from "./compenent/livraison/livraison.compenent"
//import Searchbox from "./compenent/searchbox/searchbowCompenet"
//import First from "./compenent/first/firstCompenent"
//
//
//let userContext = createContext()
//
/*function reducer(state,action) {
  console.log({state,action})
  if (action.type === 'REMOVE'){
    return (
      {
        ...state,
        todos: state.todos.filter(todo =>todo !== action.payload )
      }
    )
  }
  return state
}*/
//
/*function Navigation() {
  //
  const namecontext = useContext(NameContext)
  //
  return (
      <div>
        im in navigation
        {namecontext}
        <Outlet/>
      </div>
  );
}
//
function Shop() {
  return (<div>im in shop</div>);
}
//
function Product() {
  const [queryParameters] = useSearchParams()
  const id = queryParameters.get('id')
  return(<div>
    Product {id}
    <Outlet/>
    </div>)
}*/
//
function Items() {
  return (<div>im in items</div>);
}
//
function App() {
  //
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Basic ${btoa('ck_89abc5d333fa2782a2cbc3d39d16fc867939868a:cs_b13fd2b4e1b50b5215f30bb606aa121ab5b79f59')}`);
  myHeaders.append("Cookie", "total_page=1; tinvwl_wishlists_data_counter=0");

  const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
  };
  //init useState singl product 
  const [products,setproducts] = useState([])
  //useEffect
  useEffect(()=>{
    //
    fetch("https://alandaloussimeuble.shop/wp-json/wc/v3/products/", requestOptions)
    .then((response) => response.json())
    .then((result) => setproducts(result,[]))
    .catch((error) => console.log(error));
    //
  })
  //template
  return (
  <div>
    <Header/>
    <Routes>
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/shop' element={<Prod prd={products}/>} />
      <Route path='/thank_you' element={<Thank/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/livraison' element={<Livraison/>} />
      <Route path ='/*' element={<Error/>}/>
    </Routes>
    <Footer/>
  </div>
  );
}
//
export default App;
