// questions and levels are essentially the same thing
import { _ } from 'lodash';

export default {
  // levels are complete when a user has more points then a question's upperLimit attribute
  completeLevels({}, questions, points) {
    return _.filter(questions, function(question) { return points > question.upperLimit })
  },
  // levels are locked when a user has less then or equal number of points then a question
  lockedLevels({}, questions, points) {
    return _.filter(questions, function(question) { return question.lowerLimit >= points });
  },
  // level is current when the user's points in between the upper and lower limit of a question
  currentLevel({}, questions, points) {
    return _.filter(questions, function(question) { return question.lowerLimit < points && question.upperLimit >= points });
  },
  // points: user points, lowerLimit: lower limit of the question
  levelLocked({}, lowerLimit, points) {
    return points < lowerLimit;
  },
  // points: user points, upperLimit: upper limit of the question
  levelFinished({}, upperLimit, points) {
    return points > upperLimit;
  }
}
