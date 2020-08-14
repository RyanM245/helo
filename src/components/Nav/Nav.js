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
        console.log(this.props)
        return <nav className = 'nav'>
            <img alt='Logo' src='https://www.logo.wine/a/logo/PlayStation/PlayStation-Logo.wine.svg' />
            <div className = 'navHolder'>
                <h1 className = "navDash"><Link to="/dashboard"> Dashboard</Link> </h1>
                <h1><Link to="/new"> New Post</Link></h1>
            </div>

            <div className='logout' onClick={this.logout}><Link to= '/'>Logout</Link></div>
        </nav>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Nav);