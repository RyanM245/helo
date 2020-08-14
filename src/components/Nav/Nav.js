import React from 'react';
import "./Nav.css";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {logoutUser, getUser} from '../../ducks/reducer';
import axios from 'axios';

class Nav extends React.Component {

    componentDidMount(){
        this.props.getUser();
    }

    logout = () => {
        axios.get('/auth/logout').then( res => {
            this.props.logoutUser();
            this.props.history.push('/');
        }).catch(err => console.log(err))
    }

    render(){
        return <nav className = 'nav'>

            <div onClick={this.logout}><Link to= '/'>Logout</Link></div>
        </nav>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);