const express = require('express');
const stripe = require('stripe')('sk_test_JbQYpS47bHjAnH6iyGfpTN6z00omKRfxgS');
const router = express.Router();

router.post('/', async (req, res) => {
	const { amount, currency } = req.body;
	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: amount,
		currency: currency,
		metadata: { integration_check: 'accept_a_payment' }
	});

	// Send publishable key and PaymentIntent details to client
	res.send({
		publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
		clientSecret: paymentIntent.client_secret
	});
});

module.exports = router;
