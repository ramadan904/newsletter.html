import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[.16em] text-faint">404</p>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <Link to="/" className="text-primary">
        Back to the latest issue
      </Link>
    </div>
  );
};

export default NotFound;
