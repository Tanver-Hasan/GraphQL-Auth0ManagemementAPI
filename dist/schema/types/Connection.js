"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.ConnectionType = new graphql_1.GraphQLObjectType({
    name: "ConnectionType",
    fields: {
        "name": { type: graphql_1.GraphQLString },
        "options": { type: graphql_1.GraphQLString },
        "id": { type: graphql_1.GraphQLString },
        "strategy": { type: graphql_1.GraphQLString },
        "realms": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        "is_domain_connection": { type: graphql_1.GraphQLBoolean },
        "metadata": { type: graphql_1.GraphQLString }
    }
});
exports.ConnectionMutationType = new graphql_1.GraphQLObjectType({
    name: "ConnectionMutationType",
    fields: {
        "name": { type: graphql_1.GraphQLString },
        "options": { type: graphql_1.GraphQLString },
        "id": { type: graphql_1.GraphQLString },
        "strategy": { type: graphql_1.GraphQLString },
        "realms": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        "is_domain_connection": { type: graphql_1.GraphQLBoolean },
        "metadata": { type: graphql_1.GraphQLString },
        "enabled_clients": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) }
    }
});
//# sourceMappingURL=Connection.js.map