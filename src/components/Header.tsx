import Logo from "./Logo";
import Nav from "./Nav";
function Header() {
  return (
    <div className="flex justify-between w-full border border-white rounded-2xl">
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
