import React, { Component } from 'react';
import Product from "../product/product.compenent"
//
const products =(props)=>{
    return(
        <div>
    <section class="bg-white">
        <div class="container py-24 px-2 mx-auto">
            <h3 class="text-[#282626] text-2xl md:text-3xl lg:text-4xl text-center font-bold font-['TT Interfaces'] leading-[76px] pb-6">منتجات أصلية وذات جودة جيدة</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-2 justify-center items-center">
                    {props.prd.map((elm,index)=>(
                        <Product key={index} pdr={elm}/>
                    ))}
            </div>
        </div>
    </section>
        </div>
    )
}
//
export default products