"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.LinkUserInputType = new graphql_1.GraphQLInputObjectType({
    name: "LinkUserInputType",
    fields: {
        provider: { type: graphql_1.GraphQLString },
        connection_id: { type: graphql_1.GraphQLString },
        user_id: { type: graphql_1.GraphQLString },
        link_with: { type: graphql_1.GraphQLString }
    }
});
exports.ProfileDataType = new graphql_1.GraphQLObjectType({
    name: "ProfileDataType",
    fields: {
        email: { type: graphql_1.GraphQLString },
        email_verified: { type: graphql_1.GraphQLBoolean },
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        given_name: { type: graphql_1.GraphQLString },
        phone_number: { type: graphql_1.GraphQLString },
        phone_verified: { type: graphql_1.GraphQLBoolean },
        family_name: { type: graphql_1.GraphQLString }
    }
});
exports.LinkUserType = new graphql_1.GraphQLObjectType({
    name: "LinkUserType",
    fields: {
        connection: { type: graphql_1.GraphQLString },
        user_id: { type: graphql_1.GraphQLString },
        provider: { type: graphql_1.GraphQLString },
        profileData: {
            type: exports.ProfileDataType
        },
        isSocial: { type: graphql_1.GraphQLBoolean },
        access_token: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=LinkUser.js.map