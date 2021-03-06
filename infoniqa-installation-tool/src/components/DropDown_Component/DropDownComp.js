import React from 'react'
import './DropDownStyle.css'

class DropDownComp extends React.Component {
    constructor(props) {
        super(props)
        this.dropdownContainer = React.createRef()
        this.state = {
            _list: (props.list == null) ? [] : props.list,
            value: (props.selected == null) ? "Select..." : props.selected
        }
    }
    componentDidMount() {
        let element = this.dropdownContainer.current
        element.onclick = () => {
            if (!element.classList.contains("dropdown-extended")) {
                element.classList.add("dropdown-extended")
            } else {
                element.classList.remove("dropdown-extended")
            }
            let dropdown_items = element.getElementsByTagName("li")
            for (const item of dropdown_items) {
                item.onclick = () => {
                    element.getElementsByClassName('dropdown-header-value-text')[0].innerHTML = item.innerText;
                    this.state.value = item.innerText
                }
            }
        }
    }
    render() {
        return (
            <div ref={this.dropdownContainer} className="dropdown">
                <div className="dropdown-header">
                    <div className="dropdown-header-value-text">{this.state.value}</div>
                    <i className="arrow down"></i>
                </div>
                <ul className="dropdown-elements" aria-label="submenu">
                    {this.state._list.map((item,index) => {return (<li key={index}><div>{item}</div></li>)})}
                </ul>
            </div>
        )
    }
}
export default DropDownComp;