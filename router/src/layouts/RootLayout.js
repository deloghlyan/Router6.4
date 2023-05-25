import { Link, NavLink, Outlet } from "react-router-dom";
import Location from "../components/Location";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1><Link to="/">Brand new project</Link></h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Career</NavLink>
        </nav>
        <Location />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
