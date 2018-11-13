import { GraphQLInputObjectType, GraphQLString, graphqlSync, GraphQLObjectType, GraphQLBoolean } from "graphql";

export const LinkUserInputType = new GraphQLInputObjectType({
    name: "LinkUserInputType",
    fields: {
        provider: { type: GraphQLString },
        connection_id: { type: GraphQLString },
        user_id: { type: GraphQLString },
        link_with: { type: GraphQLString }
    }
});

export const ProfileDataType = new GraphQLObjectType({
    name: "ProfileDataType",
    fields: {
        email: { type: GraphQLString },
        email_verified: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        given_name: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        phone_verified: { type: GraphQLBoolean },
        family_name: { type: GraphQLString }
    }
});

export const LinkUserType = new GraphQLObjectType({
    name: "LinkUserType",
    fields:
    {
        connection: { type: GraphQLString },
        user_id: { type: GraphQLString },
        provider: { type: GraphQLString },
        profileData: {
            type: ProfileDataType
        },
        isSocial: { type: GraphQLBoolean },
        access_token: { type: GraphQLString }
    }
});