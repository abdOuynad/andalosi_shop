import { Link } from "react-router-dom";
import no_valid from "../../src/No_Image_Available.jpg"
const Product = (prd) => {
    return(
        <div class="rounded overflow-hidden flex flex-col items-center w-full md:w-[12.5rem] border pb-4 bg-white shadow cursor-pointer hover:border-black">
            {prd.pdr.images.length >0 
            ?<img src={prd.pdr.images[0].src} alt="" class="max-w-full h-[22rem] sm:h-[18rem] inline-block align-middle"></img>
            :<img src={no_valid} alt="" class="max-w-full h-[22rem] sm:h-[18rem] inline-block align-middle"></img>
            }
            <div class="flex flex-col items-center gap-2 p-3 bg-white w-full">
                <h3 class="text-[#8e8e8e] text-sm">الفئة</h3>
                <h3 class="text-balck text-base font-bold">{prd.pdr.name}</h3>
                <h3 class="block text-[#00750f] text-base font-semibold">{prd.pdr.price} DA</h3>
            </div>
            <Link to={`/checkout?id=${prd.pdr.id}`} class="py-3 px-4 text-sm text-white bg-[#00750f] rounded-md w-4/5 text-center">اشتري الآن</Link>
        </div> 
    )
}
//
export default Product