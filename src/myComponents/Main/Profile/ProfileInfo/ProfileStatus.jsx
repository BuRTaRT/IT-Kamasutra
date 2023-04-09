import React from 'react';

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

activateMode=()=>{
        this.setState({
            editMode:true
        })
}
    deActivateMode=()=>{
        this.setState({
            editMode:false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div><span onClick={this.activateMode}>{this.props.status}</span></div>
                    : <div><input autoFocus={true} onBlur={this.deActivateMode} value={this.props.status} type="text"/></div>
                }

            </div>
        )

    }
}