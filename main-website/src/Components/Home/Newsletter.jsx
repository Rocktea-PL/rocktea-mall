function Newsletter() {
  return (
    <section
      className={`bg-newsletter-big h-full  bg-cover bg-center bg-no-repeat text-[var(--white)] flex flex-col items-center justify-center p-12`}
    >
      <h2 className="text-[var(--white)] text-[30px] leading-tight md:text-[50px] font-semibold text-center">
        Subscribe to our Newsletter{" "}
      </h2>
      <p className="text-center mt-2">
        To get the latest news on products and services
      </p>
      <form className="flex items-center flex-col md:flex-row gap-6 mt-5">
        <input
          type="text"
          placeholder="Name"
          className="h-[40px] p-3 rounded-md outline-none w-[250px] mt-0 text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="h-[40px] p-3 rounded-md outline-none  w-[250px] mt-0 text-black"
        />
        <button
          type="submit"
          className=" w-[250px] md:w-[150px] h-[40px] p-3 rounded-md bg-[var(--yellow)] text-black flex items-center justify-center m-auto"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
