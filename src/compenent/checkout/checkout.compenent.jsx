import { useSearchParams } from "react-router-dom"
import { useState,useEffect } from "react"
// 
import Checkpage from "./checkout.page.compenent"
import no_valid from "../../src/No_Image_Available.jpg"
//
const Checkout = () => {
    //data
    const data = {
        id:0,
        name:'null',
        images:0
    }
    //Header
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${btoa('ck_89abc5d333fa2782a2cbc3d39d16fc867939868a:cs_b13fd2b4e1b50b5215f30bb606aa121ab5b79f59')}`);
    myHeaders.append("Cookie", "total_page=1; tinvwl_wishlists_data_counter=0");
  
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    //Setting id 
    const [queryParameters] = useSearchParams()
    const id = queryParameters.get('id')
    //ini useState
    const [prd,setprd] = useState(data)
    console.log(prd)
    //useEffect
    useEffect(()=>{
        fetch(`https://alandaloussimeuble.shop/wp-json/wc/v3/products/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => setprd(result))
        .catch((error) => console.log(error));
    },data)
    //template
    console.log(prd)
    //
    return(
    <div>
        <Checkpage p={prd}/>
    </div>
    )
}
//
export default Checkout