"use client";
import PageDiv from "@/components/pageDiv";
import SectionTitle from "@/components/sectionTitle";
import { useForm } from "react-hook-form";

export type FormValue = {
  title: string;
  image: string;
  desc: string;
  category: "food" | "travel";
  map: string;
  address: string;
  rating: number;
};
const Test = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <PageDiv className="mt-48">
      <SectionTitle title="form " />

      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="[&_input]:block [&_input]:bg-yellow-400/10 [&_input]:w-full [&_input]:mx-auto [&_input]:p-4 [&_input]:max-w-xl"
          noValidate
        >
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "user name field required" })}
          />
          <label htmlFor="image">image</label>
          <input type="text" id="image" {...register("image")} />

          <label htmlFor="desc">desc</label>
          <textarea
            rows={10}
            className="block w-full max-w-xl mx-auto bg-yellow-400/10"
            id="desc"
            {...register("desc", { required: "desc name required" })}
          />
          <label htmlFor="category">category</label>
          <select
            className="block w-full max-w-xl mx-auto bg-yellow-400/10"
            id="category"
            {...register("category", { required: "category name required" })}
          >
            <option className="text-black bg-yellow-400 " value="travel">
              travel
            </option>
            <option className="text-black bg-yellow-400 " value="food">
              food
            </option>
          </select>
          <label htmlFor="map">map</label>
          <input type="text" id="map" {...register("map")} />
          <label htmlFor="address">address</label>
          <input type="text" id="address" {...register("address")} />
          <label htmlFor="rating">rating</label>
          <input
            type="text"
            id="rating"
            {...register("rating", {
              valueAsNumber: true,
              validate: (rating) => rating <= 5,
            })}
          />

          <button className="p-5 m-5 text-lg text-black bg-yellow-500">
            submit
          </button>
        </form>

        <button>delete all data </button>
      </div>
    </PageDiv>
  );
};

export default Test;
