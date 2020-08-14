import React, { Component } from 'react';

class Dashboard extends Component {
constructor(props){
    super(props)
    this.state = {
        post:[],
        search:"",
        userposts: true

    }
}



    render(){
    return <div> This is the Dashboard page</div>
}
}

export default Dashboard;