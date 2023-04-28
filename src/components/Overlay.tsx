import { ColorPicker } from "./ColorPicker";
import PopUp from "./Popup";

export const Overlay = () => {
	return (
		<section className="absolute top-[30%] w-30 left-52 z-10 lg:block">
			<h1 className="text-5xl font-bold text-black tracking-widest">
				Vallejo Dev.
			</h1>
			<p className="text-lg text-gray-700 mt-2 hidden sm:block w-[500px]">
            Would you like the company of a robot that helps you do your housework and is an important part of the care and management of the house?<br></br>
            This little one is ideal for you and for the company you need!
            By: VallejoDev
			</p>{""}
			<h1 className="text-4xl text-gray-800 font-bold mt-10 uppercase">
				Match your Furniture
			</h1>
			<ColorPicker dronePart={"Outer"} />
			<ColorPicker dronePart={"Skeleton"} />
			<PopUp />
		</section>
	);
};