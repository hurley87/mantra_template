import {Mongo} from 'meteor/mongo';
export const Questions = new Mongo.Collection('questions');
export const Profiles = new Mongo.Collection('profiles');
export const Additions = new Mongo.Collection('additions');