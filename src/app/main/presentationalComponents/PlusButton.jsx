
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const PlusButton = ({toggleCountingCalories}) => {

  return (
    <div>
        <PlusCircleIcon
          onClick={toggleCountingCalories}
          className="w-[10vw] text-green-500"
        />
    </div>
  );
};

export default PlusButton;
