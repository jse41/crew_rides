import React from 'react';
import Footer from './../Components/Footer'
import Alert from './../Components/Alert'
import NavBa from './../Components/Nav'
import FullTable from './../Components/FullTable'

/**
 * Not sure if it will last forever, but is the root of the Contact page of this react project
 */
class Rides extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        cars: []
      };
    }

   componentDidMount() {
      if (!this.props.info.cars) {
         this.callServer();
       }
   }

   callServer() {
      let flight = {
         cooks: sessionStorage.getItem('cooks'),
         reason: "AllCars"
       };
   
       // If there is a ticket, query the API, otherwise, redirect 
       //console.log(tickets)
       fetch('https://ddpfv93bg7.execute-api.us-east-2.amazonaws.com/default/crew-hello', {
         mode: 'cors',
         method: 'POST',
         headers: {
           "Content-type": "application/json",
           "Accept-Charset": "UTF-8;",
           "Access-Control-Allow-Origin": "*",
           "Access-Control-Request-Headers": "x-requested-with",
           "Access-Control-Allow-Headers": "x-requested-with"
         },
         body: JSON.stringify(flight)
       }).then(res => res.json())
         .then(
           (result) => {
             console.log("Successful POST")
             this.props.updateMe({cars: result.Items})
             if (result.reload) {
               window.location.replace('https://login.case.edu/cas/login?service=https://master.d3spht38sneeyf.amplifyapp.com')
               //window.location.replace('https://login.case.edu/cas/login?service=http://192.168.50.179:3000')
             }
           },
   
           (error) => {
             console.log(error)
             console.log("ERROR!")
           }
         )
   }

   render() {
      return (
         <div>
            <Alert />
            <NavBa info={this.props.info}/>
            <h1>Entire Ride Sheet Here...</h1>
            <FullTable cars={this.props.info.cars} />
            <Footer />
         </div>
      )
   }
}
export default Rides;