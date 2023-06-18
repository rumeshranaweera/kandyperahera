"use client";
import CheckoutProduct from "@/components/checkoutProduct";
import PageDiv from "@/components/pageDiv";
import SectionTitle from "@/components/sectionTitle";
import { useStore } from "@/store/store";
import Link from "next/link";
import { IoTicket } from "react-icons/io5";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Checkout",
  description: "Events In Kandy - Buy your Tickets",
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
);
const Checkout = () => {
  const router = useRouter();
  const orderList = useStore((state) => state.orderList);
  const clearCart = useStore((state) => state.clearCart);
  console.log(orderList);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios
      .post("api/stripe-checkout-session", {
        orderList,
      })
      .then((res) => {
        console.log("data", res.data);
        router.push(res.data);
      });
  };

  return (
    <PageDiv className="mt-24">
      <>
        <SectionTitle title="checkout" />
        <div className="flex flex-col p-5 space-y-10 ">
          {orderList.length === 0 ? (
            <>
              <div>
                <h4 className="pb-4 text-3xl font-semibold">
                  Your cart is empty
                </h4>
                <IoTicket
                  className="mx-auto my-3 opacity-20 text-slate-400"
                  size={170}
                />
              </div>
              <Link
                href={"/#seats"}
                className="px-6 py-4 mx-auto text-3xl font-extrabold text-black capitalize bg-yellow-400 rounded-full cursor-pointer w-fit"
              >
                back to Tickets section
              </Link>
            </>
          ) : (
            <>
              <div className="space-y-5">
                {orderList.map((item, index) => (
                  <CheckoutProduct
                    index={index}
                    title={item.title}
                    price={item.price}
                    place={item.place}
                    key={index}
                  />
                ))}
              </div>

              <button
                onClick={createCheckoutSession}
                className="px-6 py-4 mx-auto text-3xl font-extrabold text-black capitalize bg-yellow-400 rounded-full cursor-pointer w-fit"
              >
                proceed to checkout
              </button>

              <button
                className="block px-4 py-2 mx-auto mt-4 text-xl font-bold bg-red-700 rounded-full"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      </>
    </PageDiv>
  );
};

export default Checkout;
