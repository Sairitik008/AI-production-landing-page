"use client";

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" className="fill-current">
    <path d="M3.8 7.5a1 1 0 0 1-.75-.34L.46 4.23a1 1 0 0 1 1.5-1.32L3.8 5.29 8.04.52a1 1 0 0 1 1.52 1.3L4.52 7.15a1 1 0 0 1-.72.35z" />
  </svg>
);

const crossIcon = (
  <svg width="10" height="10" viewBox="0 0 10 10" className="fill-current">
    <path d="M5.7 5l3.1-3.1a.7.7 0 1 0-1-1L4.7 4 1.6.9a.7.7 0 1 0-1 1L3.7 5 .6 8.1a.7.7 0 1 0 1 1L4.7 6l3.1 3.1a.7.7 0 1 0 1-1L5.7 5z" />
  </svg>
);

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="mb-3 flex items-center">
      <span
        className={`mr-3 flex h-[20px] w-[20px] items-center justify-center rounded-full ${
          status === "active"
            ? "bg-primary bg-opacity-10 text-primary"
            : "bg-gray-300 text-gray-500"
        }`}
      >
        {status === "active" ? checkIcon : crossIcon}
      </span>
      <p
        className={`m-0 text-base font-medium ${
          status === "active" ? "text-body-color" : "text-gray-500"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default OfferList;
