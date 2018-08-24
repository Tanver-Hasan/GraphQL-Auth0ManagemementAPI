"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.OptionsInputType = new graphql_1.GraphQLInputObjectType({
    name: "OptionsInputType",
    fields: {
        validation: { type: graphql_1.GraphQLString },
        passwordPolicy: { type: graphql_1.GraphQLString },
        password_history: { type: graphql_1.GraphQLString },
        password_no_personal_info: { type: graphql_1.GraphQLString },
        password_dictionary: { type: graphql_1.GraphQLString },
        api_enable_users: { type: graphql_1.GraphQLBoolean },
        basic_profile: { type: graphql_1.GraphQLBoolean },
        ext_admin: { type: graphql_1.GraphQLBoolean },
        ext_is_suspended: { type: graphql_1.GraphQLBoolean },
        ext_agreed_terms: { type: graphql_1.GraphQLBoolean },
        ext_groups: { type: graphql_1.GraphQLBoolean },
        ext_assigned_plans: { type: graphql_1.GraphQLBoolean },
        ext_profile: { type: graphql_1.GraphQLBoolean },
        upstream_params: { type: graphql_1.GraphQLString }
    }
});
exports.ConnectionInputType = new graphql_1.GraphQLInputObjectType({
    name: "ConnectionInputType",
    fields: {
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        strategy: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        options: { type: exports.OptionsInputType },
        enabled_clients: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        realms: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        metadata: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=Connection.js.map