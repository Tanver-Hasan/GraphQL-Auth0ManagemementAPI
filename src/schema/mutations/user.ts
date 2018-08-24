import { GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLObjectType, GraphQLBoolean, GraphQLNonNull } from "graphql";



export const UserUpdateInputType = new GraphQLInputObjectType({
    name: "UserUpdateInput",
    fields: {
        blocked: { type: GraphQLBoolean },
        email_verified: { type: GraphQLBoolean },
        email: { type: GraphQLString },
        verify_email: { type: GraphQLBoolean },
        phone_number: { type: GraphQLString },
        phone_verified: { type: GraphQLBoolean },
        verify_phone_number: { type: GraphQLString },
        app_metadata: { type: GraphQLString },
        user_metadata: { type: GraphQLString },
        username: { type: GraphQLString },
        connection: { type: GraphQLString },
        client_id: { type: GraphQLString }
    }
});

export const UserCreateInputType = new GraphQLInputObjectType({
    name: "UserCreateInput",
    fields: {
        user_id: { type: GraphQLString },
        connection: { type: new GraphQLNonNull( GraphQLString) },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        user_metadata: { type: GraphQLString },
        email_verified: { type: GraphQLBoolean },
        verify_email: { type: GraphQLBoolean },
        phone_verified: { type: GraphQLBoolean },
        app_metadata: { type: GraphQLString }
    }
});