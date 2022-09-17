import React, { ReactElement, useEffect, useState } from "react";
import { ASCII } from "./ASCII";

export var handleUpdate = (text: string) => {};

const Output = () => {
	const [outputList, setOutputList] = useState<ReactElement[]>([]);

	useEffect(() => {
		handleUpdate("welcome");
	}, []);

	useEffect(() => {
		if (outputList.length !== 0) {
			const lastElement = document.getElementById(outputList[outputList.length - 1].props.id);
			if (lastElement) lastElement.scrollIntoView();
		}
	}, [outputList]);

	const appendOutputList = (text: string) => {
		const newList = [...outputList];
		const timestamp = new Date().getTime();
		newList.push(
			<span id={timestamp.toString()} key={timestamp} className="whitespace-pre-wrap">
				{text}
			</span>
		);
		setOutputList(newList);
	};

	handleUpdate = (command: string) => {
		command = command.toLowerCase();
		let output = "";
		output =
			"$ " +
			command +
			`

`;
		if (command === "clear" || command === "cls") {
			setOutputList([]);
			return;
		} else if (command === "banner") output += ASCII;
		else if (command === "welcome")
			output +=
				ASCII +
				`
    
Welcome to Toby's portfolio, what would you like to do?
    
Commands:
    about me
    projects
    contact
    help
    
    `;
		else if (command === "about me")
			output += "I am a fullstack software developer with a focus on React.JS, python, and swift. I love photography, production, and everything to do with technology. When I'm not at my desk I play basketball, go mountain biking, and love hiking.";
		else if (command === "projects") {
			output += `
Apollo
  Description
    A web application for a made-up small boutique cinema. 
    Including a stock management system and booking system, 
    this project worked to dynamically store and retrieve data from a Real-time Firebase Database.
  Link
    https://apollo.tobyclark.dev/
SCNR
  Description   
    A web application for a small business on the sunshine coast. 
    This website was designed in webflow and hosted on Firebase, 
    it utilised Firebase Functions for the backend code.
  Link
    https://sunshine-coast-neuro-rehab.web.app/
Wordle
  Description  
    A web application for wordle clone designed in React with Typescript.
  Link
    https://wordle.tobyclark.dev/
  GitHub
    https://github.com/tobsterclark/wordle-clone-dev
Pomodoro
  Description 
    A pomodoro based timer web application designed in React with Typescript.  
  Link
    https://tobsterclark.github.io/pomodoro/
  GitHub
    https://github.com/tobsterclark/pomodoro
  
`;
		} else if (command === "contact") {
			output += `
email: me@tobyclark.dev
portfolio: tobyclark.dev
      `;
		} else if (command === "help") {
			output += `
about me    Displays information about me
projects    Gives a showcase of all of my major projects
contact     Provides a method for contacting me
welcome     Displays welcome message
banner      Displays ASCII Banner
`;
		} else output += "Uknown command: " + command;
		appendOutputList(output);
	};

	return <div className="flex flex-col">{outputList}</div>;
};

export default Output;
