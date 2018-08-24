import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLList, GraphQLBoolean } from "graphql";


export const OptionsInputType = new GraphQLInputObjectType({
    name: "OptionsInputType",
    fields: {
        validation: { type: GraphQLString} ,
        passwordPolicy: { type: GraphQLString },
        password_history: { type: GraphQLString},
        password_no_personal_info: {type: GraphQLString},
        password_dictionary: {type: GraphQLString},
        api_enable_users: { type: GraphQLBoolean},
        basic_profile: { type: GraphQLBoolean},
        ext_admin: {type: GraphQLBoolean},
        ext_is_suspended: {type: GraphQLBoolean},
        ext_agreed_terms: {type: GraphQLBoolean},
        ext_groups: { type: GraphQLBoolean},
        ext_assigned_plans: { type: GraphQLBoolean},
        ext_profile: { type: GraphQLBoolean},
        upstream_params: {type: GraphQLString}
    }
});

export const ConnectionInputType = new GraphQLInputObjectType({
    name: "ConnectionInputType",
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        strategy: { type: new GraphQLNonNull(GraphQLString) },
        options: { type: OptionsInputType },
        enabled_clients: { type: new GraphQLList(GraphQLString) },
        realms: { type: new GraphQLList(GraphQLString) },
        metadata: { type: GraphQLString }
    }
});
