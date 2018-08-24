"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.GrantType = new graphql_1.GraphQLObjectType({
    name: "GrantType",
    fields: {
        "id": { type: graphql_1.GraphQLID },
        "client_id": { type: graphql_1.GraphQLString },
        "audience": { type: graphql_1.GraphQLString },
        "scope": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) }
    }
});
//# sourceMappingURL=Grant.js.map