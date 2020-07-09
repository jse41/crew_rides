import React from 'react';
import  { Redirect } from 'react-router-dom'

/**
 * Not sure if it will last forever, but is the root of the Contact page of this react project
 */
class Other extends React.Component {
    componentDidMount() {
        window.location.replace('https://login.case.edu/cas/login?service=http://10.0.0.61:3000')
    }


   render() {
      return ( 
        <Redirect to='/home'  />
      )
   }
}
export default Other;