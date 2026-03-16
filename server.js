const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');

const app = express();
const port = process.env.PORT || 3000;
const stripe = new Stripe('YOUR_SECRET_KEY'); // Replace with your actual Stripe secret key

app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

