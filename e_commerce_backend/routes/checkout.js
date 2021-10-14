var express = require('express');
const app = require('../app');
var router = express.Router();
const {uuid}= require("uuidv4");
const stripe = require("stripe")("sk_test_51JhRBrECGNUUIhhjH0ft95P6jY80N538YN7d1xaAn0kkfW0aulfmEBfphaMOZxD6v7USiLeYUPmNfFSkELtVkb7L00y1SboNnB");


const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};



const YOUR_DOMAIN = 'http://localhost:3000';

router.post('/', async (req, res) => {
  console.log("REQUEST:" + req.headers)
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          unit_amount: 1000,
          currency: 'usd',
          product_data:{
            name: "Motherfucker"
          }          
        },
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/cart?success=true`,
    cancel_url: `${YOUR_DOMAIN}/cart?canceled=true`,
  });
  res.redirect(303, session.url)
  //res.json({url: session.url})
});




 /* router.post("/", async (req, res) => {
    let error;
    let status;
    try {
      //const { product, token } = req.body;
      const { token,amount } = req.body;
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotencyKey = uuid();
      const charge = await stripe.charges.create (
        {
          
          amount: amount * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotencyKey,
        }
      );
      console.error("Charge:", {charge});
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
    
    
    res.json();
    
   
  
  });  */




module.exports = router;