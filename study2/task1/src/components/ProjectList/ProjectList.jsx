import React from 'react'

export  class ProjectList extends React.Component {
    render() {
      const{userdata} = this.props
      return (
        <img src ={userdata.img} style = {{display: 'inline-block'}} />
      );
    }
  }


  
  