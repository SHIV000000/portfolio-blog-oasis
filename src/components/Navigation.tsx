import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur z-50 border-b border-muted">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Portfolio
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`text-lg hover:text-primary transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`text-lg hover:text-primary transition-colors ${
                location.pathname.includes("/blog") ? "text-primary" : "text-foreground"
              }`}
            >
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;