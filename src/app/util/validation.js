
const validInput = (input) => {
    if (isNaN(input)) {
      return false;
    } else if (input <= 0) {
      return false;
    } else {
      return true;
    }
  };


const validPayload = (payload) =>{
	return(true);

}

module.exports= {
validInput,
	validPayload,
}
