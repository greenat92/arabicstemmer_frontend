import React from 'react';
import { connect } from 'react-redux';

import StemForm from '../components/StemForm';
import StemmerResult from '../components/StemmerResult';
import {  stemmingText  } from '../actions';

const mapStateToProps = (state) => ({
    stemResults: state.AppStems,
})

class AppStem extends React.Component {
    constructor(porps){
        super(porps);
        this.state = {
             value: 'مكتبة لمعالجة الكلمات العربية وتجذيعها'
             }

        this.handleChange = this.handleChange.bind(this);
        this.ftechStems = this.ftechStems.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
    }

    handleChange(event) {
    this.setState({value: event.target.value});
    }

    ftechStems(event){
     var list = this.state.value
     this.props.dispatch(stemmingText(list));
    }

    fileHandler(event){
         var file = event.target.files[0];
         var textType = /text.*/;
         if (file.type.match(textType) && file.size <= 10000){
            var reader = new FileReader();
            reader.onload = (e) => {
              this.props.dispatch(stemmingText(e.target.result));
            }
           reader.readAsText(file);
         }else{
            if(file.size > 10000){
              alert("the size of file > from 10000 bytes")
            }else{
              alert("File not supported!")
            }
         }
    }

    render(){

      return(
         <div>
            <StemForm
             value={this.state.value}
             onchange={this.handleChange}
             fetchingStem={() => this.ftechStems()}
             handleFile={this.fileHandler}
            />
            <StemmerResult
            results={this.props.stemResults}
            />
         </div>
      );
  }
}

export default connect(mapStateToProps)(AppStem)
