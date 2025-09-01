"use client";

import React from "react";
import {
  Users,
  Archive,
  PackageCheck,
  UserCircle,
  BarChart2,
  CreditCard,
  PlaySquare,
  HelpCircle,
} from "lucide-react";

// Card data - easy to manage and update
const helpCategories = [
  {
    icon: <Users size={24} className="text-gray-800" />,
    title: "Community",
    tags: ["Share", "Discussion", "Network"],
  },
  {
    icon: <Archive size={24} className="text-gray-800" />,
    title: "Orders",
    tags: ["Tracking", "Delivery", "Management"],
  },
  {
    icon: <PackageCheck size={24} className="text-gray-800" />,
    title: "Return and Refund",
    tags: ["Methods", "Process"],
  },
  {
    icon: <UserCircle size={24} className="text-gray-800" />,
    title: "Account Issues",
    tags: ["Profile", "Settings", "Password"],
  },
  {
    icon: <BarChart2 size={24} className="text-gray-800" />,
    title: "Business Help",
    tags: ["Dashboard", "Reports", "Logistics"],
  },
  {
    icon: <CreditCard size={24} className="text-gray-800" />,
    title: "Payment",
    tags: ["Methods", "VAT", "Security"],
  },
  {
    icon: <PlaySquare size={24} className="text-gray-800" />,
    title: "Guides",
    tags: ["Tutorials", "Blogs", "Newsletters"],
  },
  {
    icon: <HelpCircle size={24} className="text-gray-800" />,
    title: "FAQ",
    tags: ["Help", "Articles"],
  },
];

/**
 * A reusable card component for each help category.
 * @param {object} props - The props for the component.
 * @param {React.ReactNode} props.icon - The icon element.
 * @param {string} props.title - The title of the card.
 * @param {string[]} props.tags - An array of tags.
 */
const HelpCard = ({
  icon,
  title,
  tags,
}: {
  icon: React.ReactNode;
  title: string;
  tags: string[];
}) => (
  <div className="bg-white  cursor-pointer p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-6">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100">
        {icon}
      </div>
    </div>
  </div>
);

/**
 * The main component for the "How can we help?" section.
 */
export default function HelpCenterBox() {
  return (
    <section className=" w-full py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How can we help?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpCategories.map((category) => (
            <HelpCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              tags={category.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
