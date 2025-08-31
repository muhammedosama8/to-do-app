import React from "react";
import Modal from "react-modal";

const ModalComponent = ({ optionSelected, closeModal }) => (
	<Modal
		isOpen={!!optionSelected}
		contentLabel="Modal"
		ariaHideApp={false}
		className="modal"
		onRequestClose={closeModal}>
		<div>
			<h4 className="modalTitle">Selected Task</h4>
			<h1>{optionSelected?.text}</h1>
			<button
				style={{
					borderRadius: "10px",
					marginTop: "2rem",
				}}
				onClick={closeModal}>
				Ok
			</button>
		</div>
	</Modal>
);

export default ModalComponent;
