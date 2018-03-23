import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7n5g2aeUpe0Jh-r0z4dC9mHtcPukp_qIpCFVLSloTEihVD566w", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7orRBSnmReYTHNzU00N1zvMs2bCR9OGeZQ-EOIy6qoSa6NEfHsA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZryBYA_uFHfryEt360fBOnZzmpwnhmvWjaB6UsTm6zvvQDTqi" ],
      score: 0,
      prevScore: 0
    }
    //can change handleImgClick to other functions to make it clickable
    this.handleImgClick = this.handleImgClick.bind(this)
    this.shuffle = this.shuffle.bind(this)
    this.handleCLick = this.handleCLick.bind(this)
    // this.theClickedPicture = this.theClickedPicture.bind(this)
  }

  handleImgClick() {
    console.log("you got clicked")
    const suffledArray = this.shuffle(this.state.imageArray)
    this.setState({imageArray: suffledArray})
  }
  handleCLick(index){
    let {imageArray,score,prevScore} = this.state
    if( !imageArray.clicked){
       imageArray.clicked = true;
       score++;
    } else{
       imageArray.map((img, index) => {
         imageArray.clicked = false;
         return img;
       });
      prevScore = score > prevScore ? score : prevScore;
      score = 0;
    }
  }
  shuffle(a) {
    //looping and moving objects from being next to eachother to shuffle/sorting
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  // theClickedPicture = () => {
  //   var didClicked = this.state.clickedPicture

  //   this.setState({
  //     clickedPicture: !didClicked
  //   });
  // };
  // points(){
  //   console.log("hi")

  // }

  render() {
    // console.log(this.shuffle)
    console.log(this.handleCLick)
    // console.log("hello", this.clickedPicture)
    //array of images
    // let imageArray = [
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7n5g2aeUpe0Jh-r0z4dC9mHtcPukp_qIpCFVLSloTEihVD566w", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7orRBSnmReYTHNzU00N1zvMs2bCR9OGeZQ-EOIy6qoSa6NEfHsA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZryBYA_uFHfryEt360fBOnZzmpwnhmvWjaB6UsTm6zvvQDTqi"
    // ]
    //wasClicked: false
    // const imageArray = this.shuffle(this.state.imageArray)

    //holding html images
    const htmlArray =[]
    //forloop to append images
    this.state.imageArray.map((imgURL) => {
      const img = (<img src={imgURL} onClick={this.handleImgClick} handleClick={(index) => {
        this.handleClick(index);
      }}
      ></img>)
      htmlArray.push(img)
    })
    return (
      <div>
       <div>{this.state.score} | {this.state.prevScore}</div>
      
      {
      // appending to the html page
      }
        {htmlArray}
      
      </div>
    );
  }
}


export default App;

