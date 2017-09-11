import {ChoiceModel} from "./choice";
import {CommentModel} from "./comment";
import {UserModel} from "./user";
import {PollModel} from "./poll";
import {VoteModel} from "./vote";


export const getModels = (connection)=>{
    const Users = UserModel(connection);
    const Polls = PollModel(connection);
    const Votes = VoteModel(connection);
    const Choices = ChoiceModel(connection);
    const Comments = CommentModel(connection);
    // const UserPolls = Polls.belongsTo(Users);
    // Polls.hasMany(Choices);
    // Choices.hasMany(Votes);
    // Polls.hasMany(Comments);
    return {
        user : Users,
        poll : Polls,
        vote : Votes,
        choice : Choices,
        comment  : Comments
    };
};