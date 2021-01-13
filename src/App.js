import React, { Component } from 'react';
    class App extends Component {
      render() {
        return (
          <div className="title">
              <h1><b>Butterflies</b></h1>
              <h6 className="qod">{this.state.quote}</h6>
              <div className= "item">
                  <img src= "Butterflies/Butterfly1.jpg" width= "350px" height="350px" alt="Snow" className="img"/>
                  <span className="caption"> Dananus Plexippus</span>
              </div>
              <div className="item" >
                  <img src="Butterflies/ Butterfly2.jpg" width= "350px" height="350px" alt="Forest" className="img"/>
                  <span className="caption">Morpho Pelides </span>
              </div> 
              <div className="item">
                <img src="Butterflies/Butterfly3.jpg" width= "350px" height="350px" alt="Mountains" className="img"/>
                <span className="caption"> Delias Eucharia </span>
              </div>
          </div> 
          ) 
        }
          
    constructor() {
    super();
      this.state = {
        quote: ''
      }};
      componentDidMount() {
        const response = 'https://quotes.rest/qod'
        const userExists = response.ok;
        console.log(userExists)
        fetch(response)
        .then(res => res.json())
        .then((data) => {
          var str = data.contents.quotes[0].quote
          this.setState({quote: str})
        })
        .catch(console.log)
      }
    }

    export default App;