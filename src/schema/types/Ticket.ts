import { GraphQLObjectType, GraphQLString, graphqlSync, GraphQLInt, GraphQLBoolean } from "graphql";

export const PasswordChangeTicketType = new GraphQLObjectType({
    name: "PasswordChangeTicketType",
    fields: {
        "ticket": { type: GraphQLString}
    }
});