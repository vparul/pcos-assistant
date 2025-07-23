import type { CardProps } from "./types";

export const Card = ({ icon, heading, subHeading, className }: CardProps) => {
  return (
    <div
      className={`flex py-5 items-center flex-col bg-white shadow-md border-1 border-gray-100 rounded-xl max-w-[14rem] ${className}`}
    >
        {icon && icon}
      <h4 className="text-black-500 font-semibold text-sm">{heading}</h4>
      <p className="text-gray-700 text-center text-xs mt-3 w-[80%]">
        {subHeading}
      </p>
    </div>
  );
};

export default Card;
