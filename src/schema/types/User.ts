import { GraphQLObjectType, GraphQLString, GraphQLList, graphqlSync, GraphQLBoolean } from "graphql";

const IdentitiesType = new GraphQLObjectType({
    name: "IdentitiesType",
    fields: {
        user_id: { type: GraphQLString },
        provider: { type: GraphQLString },
        connection: { type: GraphQLString },
        isSocial: { type: GraphQLBoolean }
    }
});

export const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        email: { type: GraphQLString },
        email_verified: { type: GraphQLString },
        username: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        phone_verified: { type: GraphQLString },
        user_id: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        identities: { type: new GraphQLList(IdentitiesType) },
        app_metadata: { type: GraphQLString },
        user_metadata: { type: GraphQLString},
        picture: { type: GraphQLString },
        name: { type: GraphQLString },
        nickname: { type: GraphQLString },
        multifactor: { type: new GraphQLList(GraphQLString) },
        last_ip: { type: GraphQLString },
        last_login: { type: GraphQLString },
        logins_count: { type: GraphQLString },
        blocked: { type: GraphQLString },
        given_name: { type: GraphQLString },
        family_name: { type: GraphQLString },
    }
});

