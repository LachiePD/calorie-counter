import PlusButton from '.././presentationalComponents/PlusButton';
import {useState} from 'react';
import {PlusCircleIcon} from '@heroicons/react/24/solid';



const PlusButtonContainer = ({toggleCountingCalories}) =>{
	return(
		<PlusButton
		toggleCountingCalories={toggleCountingCalories}/>
	);
}

export default PlusButtonContainer;
