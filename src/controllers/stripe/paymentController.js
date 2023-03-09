import Stripe from "stripe";
const stripe = Stripe("sk_test_51Mii7sSF0uNZHKAP6KFEjixWGzTv4ndgfBKd2WBUU3vAM7bYMGSR0zpL1cKPnIJsZC8ZshPFSGFUGsproqwRbSrF00MZCQuEA7");

export const stripeCheckout = async (req, res) => {
  const { heading, price, priceMonth, user } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name:heading,
              description:priceMonth,
              metadata:{
                id: user._id
              }
            },
            unit_amount: price*100
          },
          quantity: 1,
        }
      ],
      mode: "payment",
      success_url: `${process.env.LOCAL_CLIENT_URL}/payment-success`,
      cancel_url: `${process.env.LOCAL_CLIENT_URL}`,
    });

    res.status(200).json({url: session.url});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
