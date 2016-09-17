import questions from './questions';
import arithmetic_questions from './arithmetic_questions';
import profiles from './profiles';
import users from './users';
import counting from './counting';
import contact from './contact';
import students from './students';
import challenges from './challenges';

export default function () {
  questions();
  arithmetic_questions();
  profiles();
  users();
  counting();
  students();
  contact();
  challenges();
}