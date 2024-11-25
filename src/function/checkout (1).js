$(document).ready(()=>{
    // sync prix total
    let prix = Number($('#prix').val())
    let qtt = Number($('#show').html())
    let livrison = Number($('#livrison').html())
    let total = (prix*qtt)+livrison
    //
    $('#item_prix').html(prix)
    $('#quantite_item').html(qtt)
    $('#total').html(total)
    // add one
    $('#add').click(()=>{
      //
      qtt = Number($('#show').html())+1
      total = (prix*qtt)+livrison
      //
      $('#quantite_item').html(qtt)
      $('#total').html(total)
      $('#show').html(qtt)
      //
    }) 
    // sub one
    $('#sub').click(()=>{
      //
      qtt = Number($('#show').html())-1
      total = (prix*qtt)+livrison
      //
      $('#quantite_item').html(qtt)
      $('#total').html(total)
      $('#show').html(qtt)
      //
    })
    // form for creat order
    $('#checkout').submit((event)=>{
        //
        event.preventDefault()
        let products = []
        let lines = []
        const item = {
          //
          product_id: 22,
          variation_id: 33,
          quantity:$('#show').html()
          //
        }
        const shipping = {
          //
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: String(Number($('#prix').val())*Number($('#show').html()))
          //
        }
        products.push(item)
        lines.push(shipping)
        const data_={
            //
            name:$('#name').val(),
            commune:$('#commune').val(),
            wilaya:$('#wilaya').val(),
            quantite:$('#quantite').val(),
            coleur:$('#coleur').val(),
            tel:$('#tel').val(),
            product:$('#product').val(),
            prix:$('#prix').val()
            //
        }
        //console.log(data_)
        //
        const data = {
          payment_method: "bacs",
          payment_method_title: "Direct Bank Transfer",
          set_paid: true,
          billing: {
            first_name: data_.name,
            last_name: "",
            address_1: data_.commune,
            address_2: "",
            city: data_.wilaya,
            state: "CA",
            postcode: "16000",
            country: "DZ",
            email: "john.doe@example.com",
            phone: data_.tel
          },
          shipping: {
            first_name: data_.name,
            last_name: "",
            address_1: data_.commune,
            address_2: "",
            city: data_.wilaya,
            state: "CA",
            postcode: "16000",
            country: "DZ"
          },
          line_items:products,
          shipping_lines:lines
        };
        //
    //
    console.log(data)
    //
    $.ajax({
        url:"https://alandaloussimeuble.shop/wp-json/wc/v3/orders",
        method:"POST",
        headers:{
            Authorization:"Basic Y2tfODlhYmM1ZDMzM2ZhMjc4MmEyY2JjM2QzOWQxNmZjODY3OTM5ODY4YTpjc19iMTNmZDJiNGUxYjUwYjUyMTVmMzBiYjYwNmFhMTIxYWI1Yjc5ZjU5"
        },
        data:data,
        success:function(result){
            console.log(result)
            alert('the order success')
        }
    })
    //
    })
})
