export default function Notfound() {
  return (
    <article className="mt-[200px] flex flex-col items-center justify-center">
      <img
        src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698659355/image_199_dnjrqu.svg"
        alt=""
      />
      <h3 className="text-lg mt-5">Uh Oooooh</h3>
      <p className="mt-7 text-[1.3rem] text-center mx-5 sm:mx-0">
        Sorry we cant find what you’re looking for but you can go
      </p>
      <button className="mt-7 text-blue text-[1.3rem] bg-orange w-[180px] h-14 rounded-md">
        Home
      </button>
    </article>
  );
}
