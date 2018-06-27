import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

let highestScore = 0;
let currentScore = 0;

class App extends Component {
  state = {
    cards: cards,
    highestScore: highestScore,
    currentScore: currentScore
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  randomizeKitties = () => {
    let newCards = this.shuffle(this.state.cards);
    this.setState({ cards: newCards });
  }

  setNewScores = () => {
    currentScore++;
    let newHighestScore = highestScore;
    if (currentScore >= highestScore) {
      highestScore = currentScore + 1;
    }

    this.setState({
      highestScore: newHighestScore,
      currentScore: currentScore
    });
  }

  resetGame = () => {
    let newCards = cards;
    newCards.forEach(card => {
      card.clicked = false;
    });
    currentScore = 0;

    this.setState({
      cards: newCards,
      currentScore: 0
    });
  }

  checkWin = () => {
    if (this.state.currentScore === 12) {
      alert("Congratulations!!!! You win!!!!");
      this.setState({ highestScore: 0});
      this.resetGame();
    }
  }

  checkLoss = id => {
    let index = id - 1;
    if (this.state.cards[index].clicked === true) {
      alert("Aww, you already clicked that one!!!");
      this.resetGame();
    }
  }

  markKittyClicked = id => {
    console.log(id);
    let tempCards = this.state.cards;
    console.log(tempCards);
    tempCards.forEach(card => {
      if (card.id === id) {
        card.clicked = true;
      }
    });
    console.log(tempCards);
    this.setState({ cards: tempCards });
  }

  onKittyClicked = id => {
    this.checkLoss(id);
    this.checkWin();
    this.markKittyClicked(id);
    this.setNewScores();
    this.randomizeKitties();
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Header
            key={0}
            currentScore={this.state.currentScore}
            highestScore={this.state.highestScore}
          />
          <Container>
            <div className="row">
              {this.state.cards.map(card => (
                  <CharacterCard
                    id={card.id}
                    key={card.id}
                    image={card.image}
                    onKittyClicked={this.onKittyClicked}
                  />
              ))}
            </div>
          </Container>
          <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default App;
