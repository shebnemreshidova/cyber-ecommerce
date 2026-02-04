import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 py-5">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.path ? (
              <Link
                to={item.path}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-gray-800">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
