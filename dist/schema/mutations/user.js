"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.UserUpdateInputType = new graphql_1.GraphQLInputObjectType({
    name: "UserUpdateInput",
    fields: {
        blocked: { type: graphql_1.GraphQLBoolean },
        email_verified: { type: graphql_1.GraphQLBoolean },
        email: { type: graphql_1.GraphQLString },
        verify_email: { type: graphql_1.GraphQLBoolean },
        phone_number: { type: graphql_1.GraphQLString },
        phone_verified: { type: graphql_1.GraphQLBoolean },
        verify_phone_number: { type: graphql_1.GraphQLString },
        app_metadata: { type: graphql_1.GraphQLString },
        user_metadata: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        connection: { type: graphql_1.GraphQLString },
        client_id: { type: graphql_1.GraphQLString }
    }
});
exports.UserCreateInputType = new graphql_1.GraphQLInputObjectType({
    name: "UserCreateInput",
    fields: {
        user_id: { type: graphql_1.GraphQLString },
        connection: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        email: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        phone_number: { type: graphql_1.GraphQLString },
        user_metadata: { type: graphql_1.GraphQLString },
        email_verified: { type: graphql_1.GraphQLBoolean },
        verify_email: { type: graphql_1.GraphQLBoolean },
        phone_verified: { type: graphql_1.GraphQLBoolean },
        app_metadata: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=user.js.map