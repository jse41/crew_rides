import React from 'react';
import Footer from './../Components/Footer'
import Alert from './../Components/Alert'
import NavBa from './../Components/Nav'

/**
 * About Page Wrapper, relies on React Router for routing to here
 */
class About extends React.Component {
   render() {
      return (
         <div>
            <Alert />
            <NavBa info={this.props.info}/>
            <h1>Mine as well have an about page...</h1>
            <Footer />
         </div>
      )
   }
}
export default About;