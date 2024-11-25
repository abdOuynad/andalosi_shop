import no_valid from '../../src/No_Image_Available.jpg'
//
const Checkpage =(product)=>{
    console.log(product.p.images)
    const images = product.p.images
    return(
    <div>
                <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="output.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        </head>
        <section class="bg-white">
        <div class="container py-24 px-2 mx-auto">
            <h3 class="text-[#282626] text-2xl md:text-5xl lg:text-6xl text-center font-bold font-['TT Interfaces'] leading-[76px] pb-6">{product.p.name} {product.p.price} DA</h3>
            <div class="flex flex-col lg:flex-row items-start gap-8 justify-between">
                <div class="w-full lg:w-1/2 pb-6 order-2 lg:order-1">
                    <form id="checkout" class="text-[#282626]">
                        <div class="flex flex-col gap-2 items-center justify-center shadow-xl border rounded-lg px-4 py-6">
                            <h3 class="text-[#282626] text-center text-base font-bold font-['TT Interfaces'] leading-[76px]">املأ بياناتك لطلب هذا المنتج</h3>
                            <div class="flex flex-col md:flex-row justify-between gap-2 md:gap-4 w-full">
                                <div class="flex flex-col gap-1 w-full">
                                    <input type="hidden" id="product" name="" value={product.p.id}/>
                                    <input type="hidden" id="prix" name="" value={product.p.price}/>
                                    <label for="" class="text-end">الاسم الكامل</label>
                                    <input type="text" id="name" name="name" class="border border-[#e4e2e2] px-2 py-3 rounded-lg font-bold font-['TT Interfaces']"/>
                                </div>
                                <div class="flex flex-col gap-1 w-full">
                                    <label for="" class="text-end">رقم الهاتف</label>
                                    <input type="text" id="tel" name="tel" class="border border-[#e4e2e2] px-2 py-3 rounded-lg font-bold font-['TT Interfaces']"/>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row justify-between gap-2 md:gap-4 w-full">
                                <div class="flex flex-col gap-1 w-full">
                                    <label for="" class="text-end">ولاية</label>
                                    <select name="wilaya" id="wilaya" class="w-full border border-[#e4e2e2] px-2 py-3 rounded-lg font-bold font-['TT Interfaces']">
                                        <option value="Adrar">01 Adrar</option>
                                        <option value="Chlef">02 Chlef</option>
                                        <option value="Laghouat">03 Laghouat</option>
                                        <option value="Oum El Bouaghi">04 Oum El Bouaghi</option>
                                        <option value="Batna">05 Batna</option>
                                        <option value="Béjaïa">06 Béjaïa</option>
                                        <option value="Biskra">07 Biskra</option>
                                        <option value="Béchar">08 Béchar</option>
                                        <option value="Blida">09 Blida</option>
                                        <option value="Bouira">10 Bouira</option>
                                        <option value="Tamanrasset">11 Tamanrasset</option>
                                        <option value="Tébessa">12 Tébessa</option>
                                        <option value="Tlemcen">13 Tlemcen</option>
                                        <option value="Tiaret">14 Tiaret</option>
                                        <option value="Tizi Ouzou">15 Tizi Ouzou</option>
                                        <option value="Alger">16 Alger</option>
                                        <option value="Djelfa">17 Djelfa</option>
                                        <option value="Jijel">18 Jijel</option>
                                        <option value="Sétif">19 Sétif</option>
                                        <option value="Saïda">20 Saïda</option>
                                        <option value="Skikda">21 Skikda</option>
                                        <option value="Sidi Bel Abbès">22 Sidi Bel Abbès</option>
                                        <option value="Annaba">23 Annaba</option>
                                        <option value="Guelma">24 Guelma</option>
                                        <option value="Constantine">25 Constantine</option>
                                        <option value="Médéa">26 Médéa</option>
                                        <option value="Mostaganem">27 Mostaganem</option>
                                        <option value="M'Sila">28 M'Sila</option>
                                        <option value="Mascara">29 Mascara</option>
                                        <option value="Ouargla">30 Ouargla</option>
                                        <option value="Oran">31 Oran</option>
                                        <option value="Bayadh">32 Bayadh</option>
                                        <option value="Illizi">33 Illizi</option>
                                        <option value="Bordj Bou Arreridj">34 Bordj Bou Arreridj</option>
                                        <option value="Boumerdès">35 Boumerdès</option>
                                        <option value="El Tarf">36 El Tarf</option>
                                        <option value="Tindouf">37 Tindouf</option>
                                        <option value="Tissemsilt">38 Tissemsilt</option>
                                        <option value="El Oued">39 El Oued</option>
                                        <option value="Khenchela">40 Khenchela</option>
                                        <option value="Souk Ahras">41 Souk Ahras</option>
                                        <option value="Tipaza">42 Tipaza</option>
                                        <option value="Mila">43 Mila</option>
                                        <option value="Aïn Defla">44 Aïn Defla</option>
                                        <option value="Naâma">45 Naâma</option>
                                        <option value="Aïn Témouchent">46 Aïn Témouchent</option>
                                        <option value="Ghardaïa ">47 Ghardaïa </option>
                                        <option value="Relizane">48 Relizane</option>
                                        <option value="Timimoun ">49 Timimoun </option>
                                        <option value="Bordj Badji Mokhtar ">50 Bordj Badji Mokhtar </option>
                                        <option value="Ouled Djellal ">51 Ouled Djellal </option>
                                        <option value="Béni Abbès">52 Béni Abbès</option>
                                        <option value="In Salah ">53 In Salah </option>
                                        <option value="In Guezzam">54 In Guezzam</option>
                                        <option value="Touggourt">55 Touggourt</option>
                                        <option value="Djanet">56 Djanet</option>
                                        <option value="M'Ghair">57 M'Ghair</option>
                                        <option value="El Meniaa">58 El Meniaa</option>
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1 w-full">
                                    <label for="" class="text-end">البلدية</label>
                                    <input type="text" id="commune" name="commune" class="border border-[#e4e2e2] px-2 py-3 rounded-lg font-bold font-['TT Interfaces']" />
                                </div>
                            </div>
                            <div class="flex justify-between gap-4 w-full border-b-2 border-[#282626] pb-8">
                                <div class="flex flex-col gap-1 w-full">
                                    <label for="">الكمية</label>
                                    <div class="flex gap-6 items-center">
                                        <span class="material-symbols-outlined cursor-pointer bg-slate-500 text-white border p-2 rounded" id="add">add</span>
                                        <span class="text-[#282626] text-center text-base font-bold font-['TT Interfaces']" id="show">1</span>
                                        <span class="material-symbols-outlined cursor-pointer bg-slate-500 text-white border p-2 rounded" id="sub">check_indeterminate_small</span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1 w-full items-end">
                                    <label for=""  name="coleur" id="coleur">لون</label>
                                    <select class="w-full border border-[#e4e2e2] px-2 text-end py-3 rounded-lg font-bold font-['TT Interfaces']">
                                        <option value="">أبيض</option>
                                        <option value="">أسود</option>
                                    </select>
                                </div>
                            </div>
                            <div class="w-full flex flex-col border rounded-lg px-3 py-4 shadow-lg">
                                <div class="flex items-center gap-2 self-end py-4">
                                    <span class="material-symbols-outlined">shopping_cart</span>
                                    <h3 class="text-[#282626] text-xl font-bold font-['TT Interfaces']">ملخص الطلب</h3>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center justify-between">
                                        <p ><span id="item_prix">{product.p.price}</span> DA * <span id="quantite_item"></span></p>
                                        <h3 class="text-[#282626] text-base font-bold font-['TT Interfaces']">سعر الطلب</h3>
                                    </div>
                                    <div class="flex items-center justify-between border-b border-[lightgrey] pb-2">
                                        <p><span id="livrison">500</span><span>DA</span></p>
                                        <h3 class="text-[#282626] text-base font-bold font-['TT Interfaces']">خدمة التوصيل</h3>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <p><span id="total">{Number(product.p.price)+500}</span> DA</p>
                                        <h3 class="text-[#282626] text-base font-bold font-['TT Interfaces']">المبلغ الإجمالي</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full py-3">
                                <input type="submit" value="اشتري الآن" class="shadow-xl cursor-pointer py-3 px-6 w-full bg-green-600 hover:bg-green-700 transition-all text-white rounded-md"/>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div class="flex flex-col order-1 lg:order-2 items-center gap-2 md:gap-4 w-full lg:w-1/2 overflow-hidden">
                    <div class="w-full">
                        {
                            product.p.images.length > 0
                            ? <img id="mainImage" src={product.p.images[0].src} alt="" class="w-full"/>
                            : <img id="mainImage" src={no_valid} alt="" class="w-full"/>
                        }
                    </div>
                    <div class="flex flex-col items-center gap-2 md:gap-4 w-full">
                        <div class="flex items-center gap-4 justify-center">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src={require("../../function/script")}></script>
    <script src={require('../../function/checkout')}></script>
    </div>
    )
}
//
export default Checkpage