import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";


export const GrantType = new GraphQLObjectType({
    name: "GrantType",
    fields: {
        "id": { type: GraphQLID },
        "client_id": { type: GraphQLString },
        "audience": { type: GraphQLString },
        "scope": { type: new GraphQLList(GraphQLString) }
    }
});