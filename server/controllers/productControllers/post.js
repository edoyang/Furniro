const Product = require("../../models/product");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = new Product({ name, price, description });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.checkout = async (req, res) => {
  try {
      const { items } = req.body; // Retrieve items from request body

      // Calculate the total amount
      const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100; // Stripe expects the amount in cents

      // Create a Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: items.map(item => ({
              price_data: {
                  currency: 'usd',
                  product_data: {
                      name: item.name,
                  },
                  unit_amount: item.price * 100, // Price in cents
              },
              quantity: item.quantity,
          })),
          mode: 'payment',
          success_url: `${process.env.CLIENT_URL}/success`,
          cancel_url: `${process.env.CLIENT_URL}/cancel`,          
      });

      res.status(200).json({ id: session.id }); // Send session ID back to the client
  } catch (error) {
      console.error('Error in checkout:', error);
      res.status(500).json({ error: error.message });
  }
};