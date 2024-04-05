import { StyledLink } from "..";

const Hero = () => {
  return (
    <header className="grid place-items-center py-20 bg-grey">
      <article className="flex flex-col items-center justify-center text-center gap-12 max-w-[45%]">
        <h1 className="font-semibold text-5xl leading-[1.3] tracking-wide">
          Business payments for today's global economy
        </h1>

        <h5 className="tracking-wide text-lg font-medium leading-relaxed">
          The BowalPay multi-currency has everything your business needs to pay,
          get paid, and grow globally
        </h5>

        <StyledLink
          href=""
          label="Open your account"
          extraLabelClasses="text-white"
          extraButtonClasses="rounded-full py-3 px-12 bg-purple hover:opacity-[96%]"
        />
      </article>
    </header>
  );
};

export default Hero;
