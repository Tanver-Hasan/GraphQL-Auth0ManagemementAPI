"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.CreatePasswordChangeTicketInputType = new graphql_1.GraphQLInputObjectType({
    name: "CreatePasswordChangeTicketInputType",
    fields: {
        result_url: { type: graphql_1.GraphQLString },
        user_id: { type: graphql_1.GraphQLString },
        connection_id: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        ttl_sec: { type: graphql_1.GraphQLInt },
        mark_email_as_verified: { type: graphql_1.GraphQLBoolean }
    }
});
//# sourceMappingURL=Jobs.js.map