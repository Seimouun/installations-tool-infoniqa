import React , {useState}from 'react';
import './SwitchStyle.css';
import "../../App.css";

class SwitchComp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: props.isOn
        }
        this.switchElement = React.createRef()
    }
    componentDidMount() {
        let element = this.switchElement.current
        element.onmouseup = () => {
            element.getElementsByClassName("switch-dot-container")[0].style.marginLeft = null
            element.getElementsByClassName("switch-dot-container")[0].style.width = null
            if(element.classList.contains("on")){
                element.classList.replace('on', 'off')
                this.state.value = false
            }else if(element.classList.contains("off")){
                element.classList.replace('off', 'on')
                this.state.value = true
            }
        }
        element.onmousedown = () => {
            element.getElementsByClassName("switch-dot-container")[0].style.width = "100%"
            element.getElementsByClassName("switch-dot-container")[0].style.marginLeft = "0%"
        }
    }
    render(){
        return (
            <div className='switch-comp'>
                <div ref={this.switchElement} className={`switch ${(this.state.value) ? 'on' : 'off'}`}>
                    <div className="switch-dot-container">
                        <div className="switch-dot"></div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SwitchComp;