import questions from './questions';
import arithmetic_questions from './arithmetic_questions';
import profiles from './profiles';
import users from './users';
import stripe from './stripe';
import counting from './counting';
import contact from './contact';
import students from './students';

export default function () {
  questions();
  arithmetic_questions();
  profiles();
  users();
  stripe();
  counting();
  contact();
  students();
}