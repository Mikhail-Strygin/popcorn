import { NumResults } from "./NumResults";
import { Search } from "./Search";

export function Navbar({ onSearch, numResults }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <Search onSearch={onSearch} />
      <NumResults numResults={numResults} />
    </nav>
  );
}
