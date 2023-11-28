import UserInputContainer from "../statefulComponents/UserInputContainer";
const Card = ( props ) => {

  return (
	  <div className=" w-[100vw] h-[100vh] fixed  top-0 left-0 transition-all duration-500 ease-in-out backdrop-blur-sm">
    <div className="fixed flex h-[80vh] w-[80vw]  bg-white border border-black z-10 flex-wrap flex-col cursor-auto top-[50vh] left-[50vw] translate-x-[-51%] translate-y-[-51%] text-center justify-around">
      
	  <p>This is an input card</p>

      
	  <UserInputContainer 
	  insertToPayload={props.insertToPayload}
	  id={0}/>
 
	  <div
        className="flex flex-col border border-black cursor-pointer w-[80%] self-center rounded bg-blue-400 text-white"
        onClick={props.handleToggle}
      >
        <p> putApi test</p>
      </div>
    </div>
	  </div>
  );
};

export default Card;
