import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return(
//     <div> Latitude is : </div>
//   )
// };
class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = { lat: null, lng: null, errorMessage: '' };
  // };
  state = { lat: null, lng: null, errorMessage: '' };
  componentDidMount(){
    console.log('component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log('component was just updated if rendered!');
  }
  componentWillMount(){
    console.log('component was loading');
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error : {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />
      // return(
      //   <div>
      //     Latitude is : {this.state.lat}
      //     <br />
      //     Longitude is : {this.state.lng}
      //   </div>  
      // ) 
    }
    return <Spinner message='Please Accept location request' />;
    
  }
  render() {
    return (
      <div className='border red'>
        {this.renderContent()};
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));