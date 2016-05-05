export default {
  question({LocalState, Meteor}) {
    const question = LocalState.get('QUESTION');
    const operator = LocalState.get('OPERATOR');
    const num1 = question.num1;
    const num2 = question.num2;
    const product = multiply(num1, num2);
    if (operator == '/') {
      return {
        num1: product,
        num2: num2
      }
    } else if (num1 < num2) {
      return {
        num1: num2,
        num2: num1
      }
    } else {
      return question;
    }
  },
  guess({LocalState}) {
    return LocalState.get('GUESS');
  },
  clickNumber({LocalState}, guess, questionId) {
    const guessValue = LocalState.get('GUESS');
    LocalState.set('GUESS', guessValue + guess);
    questionHandler(LocalState, questionId);
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
function subtract(num1, num2) {
  if(num1 < num2) {
    return num2 - num1;
  } else {
    return num1 - num2;
  }
}
function multiply(num1, num2) {
  return num1*num2;
}
function submitAttempt(guess, answer) {
  return guess.toString().length == answer.toString().length;
}
function questionHandler(LocalState, questionId) {
  const num1 = LocalState.get('QUESTION').num1;
  const num2 = LocalState.get('QUESTION').num2;
  guess = parseInt(LocalState.get('GUESS'));
  const operator = LocalState.get('OPERATOR');
  switch(operator) {
    case '+':
      var answer = add(num1, num2);
      break;
    case '-':
      var answer = subtract(num1, num2);
      break;
    case 'x':
      var answer = multiply(num1, num2);
      break;
    case '/':
      var answer = num1;
      break;
    default: 
      return null;
  }
  const question = {
    questionId: questionId,
    userId: Meteor.userId(),
    guess: guess,
    answer: answer,
    num1: num1,
    num2: num2,
    operator: operator,
    start_time: LocalState.get('START'),
    end_time: new Date()
  }
  const isSubmitted = submitAttempt(guess, answer);
  if(isSubmitted) {
    Meteor.call('createQuestion', question, (err) => {
       if (err) {
         console.log(err)
       }
    });
    resetQuestion(LocalState);
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