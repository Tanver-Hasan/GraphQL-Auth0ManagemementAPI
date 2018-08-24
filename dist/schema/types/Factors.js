"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.FactorsType = new graphql_1.GraphQLObjectType({
    name: "FactorsType",
    fields: {
        enabled: { type: graphql_1.GraphQLBoolean },
        trial_expired: { type: graphql_1.GraphQLBoolean },
        name: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=Factors.js.map