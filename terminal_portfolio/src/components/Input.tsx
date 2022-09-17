import { useEffect, useState } from "react";
import { handleUpdate } from "./output";

const Input = () => {
	const [inputText, setInputText] = useState<string>("");

	useEffect(() => {
		const keyDownHandler = (event: any) => {
			if (event.key === "Enter") {
				event.preventDefault();
				handleUpdate(inputText);
				setInputText("");
			}
		};

		document.addEventListener("keydown", keyDownHandler);

		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	});
	return (
		<div className="h-fit w-screen flex items-center space-x-1">
			<span>$</span>
			<input value={inputText} autoFocus onChange={(evt) => setInputText(evt.target.value)} className="bg-transparent focus:outline-none" />
		</div>
	);
};

export default Input;
