import CardContainer from "../statefulComponents/CardContainer";
import PlusButtonContainer from "../statefulComponents/PlusButtonContainer";
const Home = (props) => {
  const selectDisplay = () => {
    if (props.countingCalories) {
      return (
        <CardContainer
          sendPayload={props.sendPayload}
          toggleCountingCalories={props.toggleCountingCalories}
        />
      );
    } else {
      return (
        <PlusButtonContainer
          toggleCountingCalories={props.toggleCountingCalories}
        />
      );
    }
  };

  return (
    <div className=" flex  flex-col space-y-2 p-2 grow  border ">
      <div className=" flex  w-[70vw] h-[20vw] border border-blue-500 ">
        This will be a running total of calories
      </div>

      <div className="flex relative  grow border border-green-500 w-full">
        <ul>
          <li>This will be a list each input of calories</li>
        </ul>

	  {/*the  styling below should be in the relevant component, they should decide where they sit inside the cointaing div, probably*/}
        <div className="absolute bottom-0 right-0 cursor-pointer">
          {selectDisplay()}
        </div>
      </div>
    </div>
  );
};

export default Home;
