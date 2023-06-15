"use client";
import CheckoutProduct from "@/components/checkoutProduct";
import PageDiv from "@/components/pageDiv";
import SectionTitle from "@/components/sectionTitle";
import { useStore } from "@/store/store";
import Link from "next/link";
import { IoTicket } from "react-icons/io5";

type Product = {
  title: string;
  price: number;
  place: string;
};

const Checkout = () => {
  const orderdList = useStore((state) => state.orderList);
  const clearCart = useStore((state) => state.clearCart);

  console.log(orderdList);
  return (
    <PageDiv className="mt-24">
      <div>
        <SectionTitle title="checkout" />
        <div className="flex flex-col p-5 space-y-10 ">
          {orderdList.length === 0 && (
            <div>
              <h4 className="pb-4 text-3xl font-semibold">
                Your cart is empty
              </h4>
              <IoTicket
                className="mx-auto my-3 opacity-20 text-slate-400"
                size={170}
              />
            </div>
          )}

          {orderdList.map((item, index) => (
            <CheckoutProduct
              title={item.title}
              price={item.price}
              place={item.place}
              key={index}
            />
          ))}
        </div>
        {orderdList.length > 0 && (
          <h3 className="px-6 py-4 mx-auto text-3xl font-extrabold text-black capitalize bg-yellow-400 rounded-full cursor-pointer w-fit">
            proceed to checkout
          </h3>
        )}

        {orderdList.length === 0 && (
          <Link
            href={"/#seats"}
            className="px-6 py-4 mx-auto text-3xl font-extrabold text-black capitalize bg-yellow-400 rounded-full cursor-pointer w-fit"
          >
            back to Tickets section
          </Link>
        )}
        {orderdList.length > 0 && (
          <button
            className="px-4 py-2 mt-4 text-xl font-bold bg-red-700 rounded-full"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        )}
      </div>
    </PageDiv>
  );
};

export default Checkout;
