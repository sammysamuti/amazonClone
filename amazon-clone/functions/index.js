const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions/v2");
dotenv.config();
const stripe = require("stripe")(
  "sk_test_51OqdOtAgnyK1QBDMM9QnsC2SgoTKwb89fIDu8c3Fj1U10d3AIaQUhUvz4qEBspRcZyGCDfPbPMI45BFbC4MMIjtw00J5NkvCjR"
);
const app = express();

setGlobalOptions({ maxInstances: 10 });
app.use(cors({ orign: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total, 10);
  if (total <= 0) {
    return res.status(403).json({
      message: "total must be greater than 0",
    });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  console.log(paymentIntent);

  res.status(200).json({
    message: "Payment intent created successfully",
    clientSecret: paymentIntent.client_secret,
    paymentIntent,
  });
});

exports.api = onRequest(app);
