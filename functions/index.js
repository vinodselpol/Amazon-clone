const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JtssLI2CTRcrb5XmPId8aNcldqTDK08b0s1Mwl689pQdcXRz2kcyXp6QoCxLReQ4eMkqz5My7UZNESSrYTflY7W00NHRhiuoM"
);

//Setup the express app
//API

//-API config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-65613/us-central1/api
