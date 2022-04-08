import React, {useState, useEffect} from "react";
import Header from './Header';
import ChooseOption from './ChooseOption';
import Options from './Options';
import AddOption from './AddOptions';
import ModalComponent from "./Modal";
import { Tasks as initialTasks } from "./initialTasks";

const Indecision = () => {
    
    const [options, setOptions] = useState(initialTasks)
    const [selectedOption, setselectedOption] = useState(undefined)

  /*  ----------- use local storage ---------

  useEffect(() => {    -------- componentDidMount -------
        const optionsData = JSON.parse(localStorage.getItem('options'));
        setOptions(optionsData);
    },[])

    useEffect(() => {   -------- componentDidUpdate -------
        localStorage.setItem('options', JSON.stringify(options));
        console.log('ddddddddddd');
    },[options]) */

    const handleChoose = () => {
        const randomNum = Math.floor(Math.random() * options.length);
        const option =  options[randomNum];
        setselectedOption(option)  
    }

    const removeAllOptions = () => {
        setOptions([])
    }

    const removeOption = (optionToRemove) => {
        setOptions(() => options.filter((option) => optionToRemove !== option));
    }

    const handleAddOption = (option) => {
        let editoption = option.replace(/(^\s+|\s+$)/g, '');
        console.log(editoption);
        if(editoption.trim() == ''){
            return 'Enter valid value to add item';
        }else if( options.indexOf(editoption) > -1){
            return 'This Value already exist';
        }
    
        setOptions(options.concat(editoption))
    }

    const closeModal = () => {
        setselectedOption('')
    }

    const editTask = () => {
        console.log('Edit');
    }

    return(
        <>
            <div>
                <Header/>
                <ChooseOption 
                    handleChoose={handleChoose}          
                    checkOptions ={options} />
                <Options 
                    options={options} 
                    removeAll={removeAllOptions}
                    removeOption={removeOption}
                    editTask={editTask}/>
                <AddOption addOption={handleAddOption}/>
                <ModalComponent 
                    optionSelected={selectedOption} 
                    closeModal={closeModal}/>                     
            </div>
        </>
    )
}

export default Indecision;