import React from 'react';
import {updateProfileStatus} from "../../../../State/ProfilePageReducer";

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    o
    activateMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.putProfileStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status:e.target.value
        })
    }
componentDidUpdate(prevProps,prevState){
        if(prevProps.status !==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
}
    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div><span
                        onClick={this.activateMode}>{this.props.status || '----'}</span>
                    </div>
                    : <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateMode}
                                  value={this.state.status} type="text"/></div>
                }

            </div>
        )

    }
}