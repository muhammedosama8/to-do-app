import Option from "./Option";

const Options = ({
	options,
	removeAll,
	removeOption,
	editTask,
	completeFun,
}) => (
	<div className="container">
		<div className="options">
			<div className="options-head">
				<p>
					Your Tasks <small>(click in task when end it)</small>
				</p>
				<button onClick={removeAll}>Remove All</button>
			</div>
			<div className="options-body">
				{options.length === 0 && (
					<p className="options-alert">Please add your Task</p>
				)}
				{options.map((option, index) => (
					<Option
						key={index}
						optionText={option?.text}
						count={index + 1}
						complete={option?.complete}
						completeFun={() => completeFun(index)}
						removeOption={removeOption}
						editTask={editTask}
					/>
				))}
			</div>
		</div>
	</div>
);

export default Options;
