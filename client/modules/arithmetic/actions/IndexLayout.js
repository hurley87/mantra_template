import { _ } from 'lodash';

export default {
  completeLevels({}, questions, points) {
    return _.filter(questions, function(question) { return points > question.upperLimit })
  },
  lockedLevels({}, questions, points) {
    return _.filter(questions, function(question) { return question.lowerLimit >= points });
  },
  currentLevel({}, questions, points) {
    return _.filter(questions, function(question) { return question.lowerLimit < points && question.upperLimit > points });
  },
  levelLocked({}, lowerLimit, points) {
    return points < lowerLimit;
  },
  levelFinished({}, upperLimit, points) {
    return points > upperLimit;
  }
}
