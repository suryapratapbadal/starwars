/**
 * Created by vipulkumarsharma on 28/07/17.
 */


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

class Search extends Component {

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
          const {user: {people} } = this.props;
          console.log(people);
        return(
            <div className="form-control" style={divStyle}>
                On search page 
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
})(Search));