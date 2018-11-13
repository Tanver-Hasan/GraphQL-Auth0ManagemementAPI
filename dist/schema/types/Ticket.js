"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.PasswordChangeTicketType = new graphql_1.GraphQLObjectType({
    name: "PasswordChangeTicketType",
    fields: {
        "ticket": { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=Ticket.js.map