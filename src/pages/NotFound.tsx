import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-display font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
