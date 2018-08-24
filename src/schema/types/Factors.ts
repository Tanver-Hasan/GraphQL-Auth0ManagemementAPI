import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";



export const FactorsType = new GraphQLObjectType({
    name: "FactorsType",
    fields: {
        enabled: { type: GraphQLBoolean },
        trial_expired: { type: GraphQLBoolean },
        name: { type: GraphQLString }
    }
});