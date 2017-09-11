"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getModels = undefined;

var _choice = require("./choice");

var _comment = require("./comment");

var _user = require("./user");

var _poll = require("./poll");

var _vote = require("./vote");

const getModels = exports.getModels = connection => {
    const Users = (0, _user.UserModel)(connection);
    const Polls = (0, _poll.PollModel)(connection);
    const Votes = (0, _vote.VoteModel)(connection);
    const Choices = (0, _choice.ChoiceModel)(connection);
    const Comments = (0, _comment.CommentModel)(connection);
    const UserPolls = Polls.belongsTo(Users);
    Polls.hasMany(Choices);
    Choices.hasMany(Votes);
    Polls.hasMany(Comments);
    return {
        user: Users,
        poll: Polls,
        vote: Votes,
        choice: Choices,
        comment: Comments
    };
};
//# sourceMappingURL=index.js.map