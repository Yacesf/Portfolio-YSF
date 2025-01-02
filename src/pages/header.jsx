import Navbar from "../components/navbar";

function Header() {
  return (
    <header className="my-10 mx-5 md:mx-10 lg:mx-28 flex items-center justify-between">
      <h1 className="tracking-wide font-bold text-3xl sm:text-4xl text-vert">
        Y.SF
      </h1>
      <Navbar />
    </header>
  );
}

export default Header;
