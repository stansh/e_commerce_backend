var express = require('express');
const app = require('../app');
var router = express.Router();
const {uuid}= require("uuidv4");
const stripe = require("stripe")("sk_test_51JhRBrECGNUUIhhjH0ft95P6jY80N538YN7d1xaAn0kkfW0aulfmEBfphaMOZxD6v7USiLeYUPmNfFSkELtVkb7L00y1SboNnB");

router.post("/", async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      //const { product, token } = req.body;
      const { token,amount } = req.body;
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          //amount: product.price * 100,
          amount: amount * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          //description: `Purchased the ${product.name}`,
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
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
  });






















module.exports = router;