import React from 'react';
//import PropTypes from 'prop-types';

// import './content.css'

export default class ContentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (

            <div className="row">
                      <div className="col-md-8 col-md-offset-2">
                                <h1 className="centered"> Assem's Arabic Light Stemmer ( BETA )</h1>
                                <h2>Description</h2>
                                  <p> Welcome to the Arabic Light Stemming Algorithm made for <a href="http://snowballstem.org/" target="_blank">Snowball</a>, it's fast and can be generated in many programming languages (through Snowball).</p>

                                <h2>Demo</h2>
                                  <p>Type some Arabic text and press <b>"Stem!"</b> button or <b>"File"</b> to read from a local <b>".txt"</b> file</p>
                                  <div className="mtb">
                                      <input id="query" type="text" onChange={ () => {}}/>
                                      <button  className='btn btn-conf btn-success'>Stem!</button>
                                      <button  className="btn btn-conf btn-info">File</button>

                                      <div id="sh">
                                          <h3>Result: </h3>
                                          <div className="well centered">
                                                <div><span className="label label-default">Stats</span><span id="stats"></span></div>
                                                <br/>
                                                <ul id="result"></ul>
                                          </div>

                                      </div>
                                </div>
                      </div>
              </div>
    

    );
  }
}
