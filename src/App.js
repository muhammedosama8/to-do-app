import React, { useState } from 'react';
import './style/style.scss';
import Header from './component/Header';
import ChooseOption from './component/ChooseOption';
import Options from './component/Options';
import AddOption from './component/AddOptions';
import ModalComponent from './component/Modal';
import { Tasks as initialTasks } from "./component/initialTasks";

function App() {
  const [options, setOptions] = useState(initialTasks)
  const [selectedOption, setselectedOption] = useState(undefined)

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
      if(editoption.trim() === ''){
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

export default App;
