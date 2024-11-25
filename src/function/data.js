const data = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    billing: {
      first_name: "John",
      last_name: "Doe",
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
      first_name: "John",
      last_name: "Doe",
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
  const datab = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    billing: {
      first_name: "John",
      last_name: "Doe",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
      email: "john.doe@example.com",
      phone: "(555) 555-5555"
    },
    shipping: {
      first_name: "John",
      last_name: "Doe",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US"
    },
    line_items: [
      {
        product_id: 93,
        quantity: 2
      },
      {
        product_id: 22,
        variation_id: 23,
        quantity: 1
      }
    ],
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "10.00"
      }
    ]
  };
  var settings = {
    "url": "https://alandaloussimeuble.shop/wp-json/wc/v3/orders",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Basic Y2tfODlhYmM1ZDMzM2ZhMjc4MmEyY2JjM2QzOWQxNmZjODY3OTM5ODY4YTpjc19iMTNmZDJiNGUxYjUwYjUyMTVmMzBiYjYwNmFhMTIxYWI1Yjc5ZjU5",
      "Cookie": "total_page=1; tinvwl_wishlists_data_counter=0"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  
{
    Consumer_key:ck_89abc5d333fa2782a2cbc3d39d16fc867939868a
    Consumer_secret:cs_b13fd2b4e1b50b5215f30bb606aa121ab5b79f59
}