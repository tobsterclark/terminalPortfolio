import React from "react";
import Input from "./components/Input";
import Output from "./components/output";

const App = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-gray-400 overflow-hidden">
			<div className="w-2/3 h-2/3 bg-slate-800 relative rounded-md p-3 pb-0 pt-8 text-green-500 font-mono">
				<div className="w-full flex space-x-2 absolute top-3 z-10d">
					<div className="w-3 h-3 bg-red-500 rounded-full" />
					<div className="w-3 h-3 bg-orange-500 rounded-full" />
					<div className="w-3 h-3 bg-green-500 rounded-full" />
				</div>
				<div className="h-full relative overflow-x-hidden overflow-y-scroll ">
					<Output />
					<div className="sticky bottom-0 bg-slate-800 py-2">
						<Input />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
