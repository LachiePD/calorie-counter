import UserInputContainer from "../statefulComponents/UserInputContainer";
const Card = ( props ) => {

  return (
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
  );
};

export default Card;
