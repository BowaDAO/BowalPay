import { WHY_BOWALPAY } from "@/constants/data";

const WhyBowalPay = () => {
  return (
    <section className="py-20 pl-[10%] why-bowalpay-background">
      <article className="text-white max-w-[570px] flex flex-col gap-8">
        <h2 className="text-4xl font-bold">{WHY_BOWALPAY.heading} </h2>

        <h3 className="text-base font-medium leading-7">
          {WHY_BOWALPAY.subheading}
        </h3>
      </article>

      <div></div>
    </section>
  );
};

export default WhyBowalPay;
