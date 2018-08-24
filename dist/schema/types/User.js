"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const IdentitiesType = new graphql_1.GraphQLObjectType({
    name: "IdentitiesType",
    fields: {
        user_id: { type: graphql_1.GraphQLString },
        provider: { type: graphql_1.GraphQLString },
        connection: { type: graphql_1.GraphQLString },
        isSocial: { type: graphql_1.GraphQLBoolean }
    }
});
exports.UserType = new graphql_1.GraphQLObjectType({
    name: "UserType",
    fields: {
        email: { type: graphql_1.GraphQLString },
        email_verified: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        phone_number: { type: graphql_1.GraphQLString },
        phone_verified: { type: graphql_1.GraphQLString },
        user_id: { type: graphql_1.GraphQLString },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString },
        identities: { type: new graphql_1.GraphQLList(IdentitiesType) },
        app_metadata: { type: graphql_1.GraphQLString },
        user_metadata: { type: graphql_1.GraphQLString },
        picture: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        nickname: { type: graphql_1.GraphQLString },
        multifactor: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        last_ip: { type: graphql_1.GraphQLString },
        last_login: { type: graphql_1.GraphQLString },
        logins_count: { type: graphql_1.GraphQLString },
        blocked: { type: graphql_1.GraphQLString },
        given_name: { type: graphql_1.GraphQLString },
        family_name: { type: graphql_1.GraphQLString },
    }
});
//# sourceMappingURL=User.js.map