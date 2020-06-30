import React from 'react';
import Footer from './../Components/Footer'
import Alert from './../Components/Alert'
import NavBa from './../Components/Nav'

/**
 * Not sure if it will last forever, but is the root of the Contact page of this react project
 */
class Contact extends React.Component {
   render() {
      return (
         <div>
            <Alert />
            <NavBa />
            <h1>Entire Ride Sheet Here...</h1>
            <Footer />
         </div>
      )
   }
}
export default Contact;