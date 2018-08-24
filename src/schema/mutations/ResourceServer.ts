import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLInputObjectType } from "graphql";

const ScopeInputType = new GraphQLInputObjectType({
    name: "ScopeInputType",
    fields: {
        description: { type: GraphQLString },
        value: { type: GraphQLString }
    }
});
export const ResourceServerInputType = new GraphQLInputObjectType({
    name: "ResourceServerInputType",
    fields: {
        identifier: { type: GraphQLString },
        scopes: { type: new GraphQLList(ScopeInputType) },
        signing_alg: { type: GraphQLString },
        signing_secret: { type: GraphQLString },
        allow_offline_access: { type: GraphQLBoolean },
        skip_consent_for_verifiable_first_party_clients: { type: GraphQLBoolean },
        token_lifetime: { type: GraphQLInt },
        token_lifetime_for_web: { type: GraphQLInt },
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        is_system: { type: GraphQLBoolean }
    }
});