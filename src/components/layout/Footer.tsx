import { usePortfolioConfig } from "../../hooks/usePortfolioConfig.tsx";
// @ts-ignore
import { Link } from "react-scroll";
export const Footer = () => {
  const { personal } = usePortfolioConfig();
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { title: "About Me", href: "hero" },
    { title: "Projects", href: "projects" },
    { title: "Skills", href: "skills" },
    { title: "Experience", href: "experience" },
  ];

  return (
    <footer id={"footer"} className="bg-white dark:bg-gray-900 border-t border-primary-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-primary-900 dark:text-gray-100">
              {personal.name}
            </h3>
            <p className="text-primary-600 dark:text-gray-100 max-w-md">{personal.description}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-title dark:text-gray-300 dark:hover:text-white text-lg font-semibold text-primary-900">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {menuItems.map((menuItem) => (
                <Link
                  smooth={true}
                  className="text-primary-600 dark:text-gray-300 dark:hover:text-white cursor-pointer hover:text-primary-900 transition-colors"
                  to={menuItem.href}
                  key={menuItem.href}
                >
                  {menuItem.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-title text-lg dark:text-gray-300 dark:hover:text-white font-semibold text-primary-900">
              Connect
            </h4>
            <div className="flex space-x-4">
              {personal.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-gray-300 dark:hover:text-white hover:text-primary-900 transition-colors"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-200">
          <p className="text-center text-primary-600 dark:text-gray-300 dark:hover:text-white">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
