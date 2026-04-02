import Button from "@/components/custom/Button";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-4 text-center gap-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Oops! Page not found</h1>
        <p className="text-text-color">
          The page you are looking for does not exist
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/">
          <Button className="w-auto px-6 text-white bg-main">Go Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
