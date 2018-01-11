/**
 * Created by vipulkumarsharma on 28/07/17.
 */
/**
 * Created by vipulkumarsharma on 28/07/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser, getPeopleList } from '../actions'
import { withRouter } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            massage: "Please Log in...",
            userName : '',
            password: ''
        }
        this.props.getPeopleList();
    }

    loginUser = () => {
        const { userName, password } = this.state;

        const {user} = this.props;
        console.log(userName, password)
        console.log(user);
        for (var i = 0; i < user.people.length; i++) {
            if(user.people[i].name === userName && user.people[i].birth_year === password) {
                console.log('in here');
                this.props.history.push('/search?username=' + userName + '&yob=' + password);
            }
        }
    }

    setUserName  = (event) =>  {
        console.log(event);
        this.setState({
            userName : event.target.value
        })
    }
    setUserPassword  = (event) =>  {
        this.setState({
            password : event.target.value
        })
    }
    
    render() {
        const divStyle = {
            height: "100%"
          };
          const {userName, password } = this.state;
        return(
            <div className="form-control" style={divStyle}>
                <span className="text-primary">User Name:</span> 
                <input type="text" name="userName" className="input-group" value={userName} onChange={this.setUserName}/>
                <span className="text-primary">Password:</span> 
                <input type="Password" name="userName" className="input-group" value={password} onChange={this.setUserPassword}/> 
                <hr/>
                <div className="btn btn-default" onClick={this.loginUser}>Log In</div> <span className=".text-warning">{this.state.massage}</span>
            </div>
        );
    }
}
export default withRouter(connect(state => {
    const user = state.user || {};
    return {
        user
    }
},{
    getPeopleList
})(Login));