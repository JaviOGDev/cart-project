import Filters from "./Filters.jsx";

function Header({ changeFilters }) {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters />
    </header>
  );
}
export default Header;
