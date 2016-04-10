export default {
  question({LocalState, Meteor}) {
    return LocalState.get('QUESTION');
  },
  guess({LocalState}) {
    return LocalState.get('GUESS');
  },
  clickNumber({LocalState}, guess, operator) {
    const guessValue = LocalState.get('GUESS');
    LocalState.set('GUESS', guessValue + guess);
    questionHandler(LocalState);
  }, 
  clearInput({LocalState}) {
    LocalState.set('GUESS', '');
  }
}

/////////////////////
// private functions
/////////////////////
function add(num1, num2) {
  return num1 + num2;
}
function submitAttempt(guess, answer) {
  return guess.toString().length == answer.toString().length;
}
function checkAnswer(guess, answer) {
  return guess == answer;
}
function questionHandler(LocalState) {
  const num1 = LocalState.get('QUESTION').num1;
  const num2 = LocalState.get('QUESTION').num2;
  guess = parseInt(LocalState.get('GUESS'));
  const answer = add(num1, num2);
  const question = {
    guess: guess,
    num1: num1,
    num2: num2,
    operator: LocalState.get('OPERATOR'),
    start_time: LocalState.get('START'),
    end_time: new Date()
  }
  const isSubmitted = submitAttempt(guess, answer);
  const isRight = checkAnswer(guess, answer);
  if(isSubmitted) {
    Meteor.call('createQuestion', question, (err) => {
       if (err) {
         console.log(err)
       }
    });
    if(isRight) {
      resetQuestion(LocalState);
    }
  }
}
function resetQuestion(LocalState) {
  LocalState.set('GUESS', '');
  LocalState.set('START', new Date());
  LocalState.set('QUESTION', {
    num1: Math.floor((Math.random() * 10) + 1),
    num2: Math.floor((Math.random() * 10) + 1)
  });
}

    // this.document.body.addEventListener('keydown', function(e) {
    //   const guessValue = LocalState.get('GUESS');
    //   switch(e.keyCode) {
    //     case 48:
    //       LocalState.set('GUESS', guessValue + '0');
    //       break;
    //     case 49:
    //       LocalState.set('GUESS', guessValue + '1');
    //       break;
    //     case 50:
    //       LocalState.set('GUESS', guessValue + '2');
    //       break;
    //     case 51:
    //       LocalState.set('GUESS', guessValue + '3');
    //       break;
    //     case 52:
    //       LocalState.set('GUESS', guessValue + '4');
    //       break;
    //     case 53:
    //       LocalState.set('GUESS', guessValue + '5');
    //       break;
    //     case 54:
    //       LocalState.set('GUESS', guessValue + '6');
    //       break;
    //     case 55:
    //       LocalState.set('GUESS', guessValue + '7');
    //       break;
    //     case 56:
    //       LocalState.set('GUESS', guessValue + '8');
    //       break;
    //     case 57:
    //       LocalState.set('GUESS', guessValue + '9');
    //       break;
    //     default:
    //       return null;
    //   }
    //   questionHandler(LocalState);
    // });
