import React, { useState } from "react";
import "./style/style.scss";
import Header from "./component/Header";
import ChooseOption from "./component/ChooseOption";
import Options from "./component/Options";
import AddOption from "./component/AddOptions";
import ModalComponent from "./component/Modal";
import { Tasks as initialTasks } from "./component/initialTasks";

function App() {
	const [options, setOptions] = useState(initialTasks);
	const [selectedOption, setselectedOption] = useState(undefined);

	const handleChoose = () => {
		let filter = options?.filter((res) => !res?.complete);
		const randomNum = Math.floor(Math.random() * filter.length);
		const option = filter[randomNum];
		setselectedOption(option);
	};

	const removeAllOptions = () => {
		setOptions([]);
	};

	const removeOption = (optionToRemove) => {
		setOptions(() =>
			options.filter((option) => optionToRemove !== option?.text)
		);
	};
	const completeFun = (index) => {
		setOptions((prev) =>
			prev.map((item, ind) =>
				ind === index ? { ...item, complete: !item?.complete } : item
			)
		);
	};

	const handleAddOption = (option) => {
		let editoption = option.replace(/(^\s+|\s+$)/g, "");
		if (editoption.trim() === "") {
			return "Enter valid value to add item";
		} else if (options.indexOf(editoption) > -1) {
			return "This Value already exist";
		}

		setOptions((prev) => [...prev, { text: editoption, complete: false }]);
	};

	const closeModal = () => {
		setselectedOption("");
	};

	const editTask = () => {
		console.log("Edit");
	};
	console.log(options);
	return (
		<>
			<div style={{ paddingBottom: "3rem" }}>
				<Header />
				<ChooseOption handleChoose={handleChoose} checkOptions={options} />
				<Options
					options={options}
					removeAll={removeAllOptions}
					removeOption={removeOption}
					editTask={editTask}
					completeFun={completeFun}
				/>
				<AddOption addOption={handleAddOption} />
				<ModalComponent
					optionSelected={selectedOption}
					closeModal={closeModal}
				/>
			</div>
		</>
	);
}

export default App;
