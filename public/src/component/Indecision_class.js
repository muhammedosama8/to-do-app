import React from "react";
import Header from './Header';
import ChooseOption from './ChooseOption';
import Options from './Options';
import AddOption from './AddOptions';
import ModalComponent from "./Modal";

class IndecisionClass extends React.Component{
    constructor(props){
        super(props);
        this.handleChoose = this.handleChoose.bind(this);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }
    componentDidMount(){
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if(options){
            this.setState(()=> ({options}));
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleChoose() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}))
       console.log(option);
    }
    removeAllOptions(){
        this.setState(()=>( {options: []} ))
    }
    removeOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This Value already exist';
        }

        this.setState((prevState)=> ({
            options: prevState.options.concat(option)
        }))
    }
    closeModal() {
        this.setState(() => ({selectedOption: undefined}))
    }
    render(){
        return(
            <div>
                <Header />
                <ChooseOption 
                    handleChoose={this.handleChoose}          
                    checkOptions ={this.state.options} />
                <Options 
                    options={this.state.options} 
                    removeAll={this.removeAllOptions}
                    removeOption={this.removeOption}/>
                <AddOption addOption={this.handleAddOption}/>
                <ModalComponent 
                    optionSelected={this.state.selectedOption} 
                    closeModal={this.closeModal}/>
            </div>
        )
    }
}

export default IndecisionClass;