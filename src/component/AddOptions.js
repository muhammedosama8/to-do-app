import React, { useState } from "react";

const AddOption = ({ addOption }) => {
	const [check, setCheck] = useState(undefined);
	const [disable, setDisable] = useState(undefined);

	const handeAddOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.addOption.value;
		const check = addOption(option);
		setCheck(check);
		setDisable(undefined);
		if (!check) {
			e.target.elements.addOption.value = "";
		}
	};
	const checkInput = (e) => {
		const option = e.target.value;
		setCheck(undefined);
		setDisable(option);
	};

	return (
		<div className="container">
			<div className="addOptions">
				<form onSubmit={handeAddOption} className="form">
					<input
						type="text"
						placeholder="write your task"
						onChange={checkInput}
						name="addOption"
						className="input-text"
					/>
					<button disabled={!disable}>Add Task</button>
				</form>
				{check && <p className="check">{check}</p>}
			</div>
		</div>
	);
};

export default AddOption;
