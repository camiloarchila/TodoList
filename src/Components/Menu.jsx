import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/App">Task List</Link>
        </li>
      </ul>
    </nav>
  );
}