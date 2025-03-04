import { Link } from "react-router";
import Icon from "../icon/Icon";
import { buttonVariants } from "../ui/button";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
      <nav className="flex items-center gap-8">
        <Link to={`/`}>
          <Icon name="intervu" />
        </Link>
        <Link to={`/`} className="hover:text-secondary">
          Home
        </Link>
        <Link to={`/about`} className="hover:text-secondary">
          About Us
        </Link>
        <Link to={`/pricing`} className="hover:text-secondary">
          Pricing
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link to={`/login`} className={buttonVariants({ variant: "default" })}>
          Login
        </Link>
        <Link to={`/register`} className={buttonVariants({ variant: "outline" })}>
          Register
        </Link>
      </div>
    </header>
  );
}

export default Header;
