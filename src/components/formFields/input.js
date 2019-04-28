import React ,{Component} from 'react';

class Input extends Component{
  render()
  {
    return(
       <div className="form-group">
    <label for={this.props.name} className="form-label">{this.props.title}</label>
    <input
      className="form-control"
      id={this.props.name}
      name={this.props.name}
      type={this.props.inputType}
      value={this.props.value}
      onChange={this.props.handleChange}
      placeholder={this.props.placeholder} 
      {...this.props} />
  </div>
    )
  }
}
export default Input;