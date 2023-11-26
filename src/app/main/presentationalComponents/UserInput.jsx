const UserInput = (props) => {
  return (
    <div>
      <input
        value={props.input !== null ? props.input : ""}
	  type={"number"}
        onChange={(e) => {
		props.handleChange(e)
        }}
        placeholder={"add some calories..."}
      />
    </div>
  );
};
export default UserInput;
