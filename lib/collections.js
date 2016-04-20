import {Mongo} from 'meteor/mongo';
export const Questions = new Mongo.Collection('questions');
export const Profiles = new Mongo.Collection('profiles');
export const ArithmeticQuestions = new Mongo.Collection('arithmetic_questions');