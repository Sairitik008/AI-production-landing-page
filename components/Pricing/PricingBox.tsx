"use client";
import React from "react";

const PricingBox = ({
  title,
  impact,
  subtitle,
  children,
}: {
  title: string;
  impact: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="wow fadeInUp relative z-10 flex flex-col justify-between rounded-md bg-white px-8 py-10 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800 h-full">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
          </div>

          <p className="mb-2 text-lg font-semibold text-dark dark:text-white">
            {impact}
          </p>
          <p className="mb-6 text-base text-body-color">{subtitle}</p>

          <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
