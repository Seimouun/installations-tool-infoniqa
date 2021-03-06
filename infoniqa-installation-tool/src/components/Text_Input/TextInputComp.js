import * as React from "react";
import "./TextInputStyle.css";
import "../../App.css";

class TextInputComp extends React.Component {
    constructor(props) {
        super(props)
        this.title = props.title
        this.onChange = props.onChange
        this.state = {
            value: props.value
        }
        this.ref_input = React.createRef()
    }

    setValue(value) {
        this.ref_input.current.value = value
    }

    changeHandler (element) {
        this.onChange?.(element)
        this.state.value = element.value
    }

    render() {
        return (
            <div className="text-input-comp">
                <input ref={this.ref_input} value={this.state.value} onChange={(event)=>{this.changeHandler(event.target)}} type="text" className="inputField" placeholder={this.title ?? 'Title'}></input>
            </div>
        )
    }
}

export default TextInputComp