import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({optionSelected, closeModal}) => (
    <div>
        <Modal 
            isOpen={!!optionSelected}
            contentLabel='Modal'
            ariaHideApp={false}
            className='modal'
            onRequestClose={closeModal}
        >
            <div >
                <h4 className='modalTitle'>Selected Task</h4>
                <h1>{optionSelected}</h1>
                <button onClick={closeModal}>Ok</button>
            </div>
        </Modal>
    </div>
)

export default ModalComponent;