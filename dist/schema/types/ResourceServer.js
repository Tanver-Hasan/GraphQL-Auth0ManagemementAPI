"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ScopeType = new graphql_1.GraphQLObjectType({
    name: "ScopeType",
    fields: {
        description: { type: graphql_1.GraphQLString },
        value: { type: graphql_1.GraphQLString }
    }
});
exports.ResourceServerType = new graphql_1.GraphQLObjectType({
    name: "ResourceServerType",
    fields: {
        identifier: { type: graphql_1.GraphQLString },
        scopes: { type: new graphql_1.GraphQLList(ScopeType) },
        signing_alg: { type: graphql_1.GraphQLString },
        signing_secret: { type: graphql_1.GraphQLString },
        allow_offline_access: { type: graphql_1.GraphQLBoolean },
        skip_consent_for_verifiable_first_party_clients: { type: graphql_1.GraphQLBoolean },
        token_lifetime: { type: graphql_1.GraphQLInt },
        token_lifetime_for_web: { type: graphql_1.GraphQLInt },
        id: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        is_system: { type: graphql_1.GraphQLBoolean }
    }
});
//# sourceMappingURL=ResourceServer.js.map