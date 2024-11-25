/*const showContext = ()=>{
    //
    const context = document.getElementById('search_box').value;
    console.log('1')
    console.log('value :',context)
    //
}*/
const searchbox = ()=> {
    //
    return (
        <div>
            <input id="search_box" type="Search"/>
             <div>
                <button onClick={()=>{
                        const context = document.getElementById('search_box').value;
                        console.log('1')
                        console.log('value :',context)
                }}>
                    click me
                </button>
             </div>
        </div>
    )
    //
}
//
export default searchbox