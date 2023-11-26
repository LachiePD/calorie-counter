import BurgerBar from './BurgerBar';


const MainLayout = ({children})=>{
return(
<div className="flex  p-2 h-full w-full">
{children}
<BurgerBar /> 
</div>
);

}

export default MainLayout;
