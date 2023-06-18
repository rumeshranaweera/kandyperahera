import PageDiv from "@/components/pageDiv";
import { z } from "zod";

const palceSchema = z.object({
  title: z.enum(["travel", "food"]).default("food"),
  email: z.string().email(),
});

const Test = () => {
  return <PageDiv className="mt-48">Test</PageDiv>;
};

export default Test;
