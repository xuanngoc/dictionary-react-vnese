
const Header = (props) => {
  return (
    <header className="bg-sky-100 text-xl">
      <h1 className="pl-12 pt-5 pb-6">{props.pageName}</h1>
    </header>
  );
}

export default Header;
