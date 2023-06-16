import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const { orderList }: { orderList: Product[] } = await request.json();

  console.log(orderList);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const transformedData =
    orderList.map<Stripe.Checkout.SessionCreateParams.LineItem>((item) => ({
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: { name: item.title, description: item.place },
      },
    }));
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: transformedData,
      mode: "payment",
      success_url: `https://eventsinkandy.vercel.app/`,
      cancel_url: `https://eventsinkandy.vercel.app/`,
      metadata: {
        email: "test@test.com",
      },
    });
    console.log();
    return NextResponse.json(session.url, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ data: "something went wrong" }, { status: 500 });
  }
}
