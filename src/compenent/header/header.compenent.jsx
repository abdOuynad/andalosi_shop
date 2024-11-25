const header =()=>{
    return(
    <div>
        <header class="text-gray-600 body-font border-gray-100 border-solid border-b-2 fixed top-0 left-0 w-full z-50 bg-white roboto-regular">
            <div class="container-large mx-auto flex items-center">
                <div class="flex items-center md:items-center gap-8 md:gap-0 justify-between w-full h-16">
                    <div class="flex items-start gap-8 flex-col md:flex-row md:items-center">
                        <a href="#" class="font-medium block mb-0 md:mb-0">
                        </a>
                       <div class="md:ml-auto md:mr-auto hidden md:block nav">
                            <nav id="head" class="flex flex-col md:flex-row items-start md:items-center text-base gap-2 justify-center font-medium bg-white">
                                <a href="/" class="sect mr-5 py-0 md:py-5">الرئيسية</a>
                                <a href="/livraison" class="sect mr-5 py-0 md:py-5">خدمة التوصيل</a>
                                <a href="/shop" class="sect active mr-5 py-0 md:py-5">منتجاتنا</a>
                                <a href="/contact" class="sect mr-5 py-0 md:py-5">اتصل بنا</a>
                            </nav>
                       </div>

                   </div>
                
                <div class="btn-scr">
                    <div class=" flex items-end gap-2">
                        <div class="block md:hidden ml-auto cursor-pointer menu-icon">
                            <span class="material-symbols-outlined">menu</span>
                        </div> 
                        <div class="hidden ml-auto cursor-pointer menu-close">
                            <span class="material-symbols-outlined">close</span> 
                        </div> 
                    </div>
                     
                </div>
                
            </div>   
        </div>
    </header>
        </div>
    )
}
//
export default header