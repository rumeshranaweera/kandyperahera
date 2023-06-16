import { useStore } from "@/store/store";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const CheckoutProduct = ({
  index,
  title,
  price,
  place,
}: {
  index: number;
  title: string;
  price: number;
  place: string;
}) => {
  const removeItem = useStore((state) => state.removeItem);
  return (
    <div className="flex justify-between p-2 border-4 border-yellow-400 border-dashed">
      <div className="text-left grow">
        <h4 className="text-xl font-bold ">{title}</h4>
        <h6>location :{place}</h6>
      </div>
      <div className="mr-5">
        <h4 className="py-4 text-xl font-bold">${price}</h4>
      </div>
      <button onClick={() => removeItem(index)}>
        <HiX size={30} />
      </button>
    </div>
  );
};
export default CheckoutProduct;
