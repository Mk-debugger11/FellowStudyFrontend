import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const QuickAccessCard = ({
  icon,
  iconBgColor,
  title,
  description,
  buttonText,
  buttonColor,
  to,
}) => {
  return (
    <div className="w-[500px] h-auto max-w-md p-8 bg-white border rounded-2xl shadow-sm text-center space-y-6 border-gray-200">
      <div
        className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-3xl ${iconBgColor}`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="text-gray-500 text-base px-2 min-h-auto">{description}</p>
      <Link to={to}>
      <Button
        className={`${buttonColor} text-white w-full mt-4 py-2.5 text-base font-medium rounded-md cursor-pointer`}
      >
        {buttonText}
      </Button>
      </Link>
    </div>
  );
};

export default QuickAccessCard;
