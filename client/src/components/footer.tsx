import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="py-6 w-full border-t border-white/10">
      <div className="flex flex-col gap-4 items-center text-center">
        <nav className="flex gap-4 items-center sm:gap-6 text-muted-foreground">
          <Link
            to="/terms-of-service"
            className="text-xs hover:underline underline-offset-4"
            title="Terms of Service"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="text-xs hover:underline underline-offset-4"
            title="Privacy Policy"
          >
            Privacy
          </Link>
          <Link
            to="/contact"
            className="text-xs hover:underline underline-offset-4"
            title="Contact Us"
          >
            Contact Us
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} zarhinio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
