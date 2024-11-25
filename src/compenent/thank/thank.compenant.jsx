import { useSearchParams } from "react-router-dom"
const Thank =()=>{
    //
    const [queryParameters] = useSearchParams()
    const name = queryParameters.get('name')
    //
    return (
        <div>
            <section class="bg-white">
                <div class="container py-24 px-2 mx-auto">
                    <div class="flex h-auto flex-col justify-center items-center gap-8 mt-20">   
                        <h3 class="text-[#282626] text-4xl md:text-5xl lg:text-6xl text-center font-bold font-['TT Interfaces'] leading-[76px] pb-6">
                        {name} شكرا جزيلا على ثِقتكم
                        </h3>
                        <p class="text-center text-[#413f3f] text-lg md:text-xl font-normal font-['TT Interfaces'] leading-normal md:leading-loose tracking-tight w-full md:w-1/3">سيتم الاتصال بك للتأكيد طلبك بعد قليل
                    اي استفسار، يمكنك الاتصال بنا على 0541121430
                    الدفع عند استلام طلبك</p>
                </div>
             </div>
          </section>
        </div>
    )
}
export default Thank