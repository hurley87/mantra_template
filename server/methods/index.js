import questions from './questions';
import arithmetic_questions from './arithmetic_questions';
import profiles from './profiles';
import users from './users';
import stripe from './stripe';
import counting from './counting';

export default function () {
  questions();
  arithmetic_questions();
  profiles();
  users();
  stripe();
  counting();
}