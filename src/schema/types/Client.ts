import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLInt, graphqlSync } from "graphql";

const JwtConfigType = new GraphQLObjectType({
    name: "JwtConfigType",
    fields: {
        "lifetime_in_seconds": { type: GraphQLInt },
        "secret_encoded": { type: GraphQLBoolean },
        "scopes": { type: GraphQLString },
        "alg": { type: GraphQLString }
    }
});
const EncryptionKeyType = new GraphQLObjectType({
    name: "EncryptionKeyType",
    fields: {
        "pub": { type: GraphQLString },
        "cert": { type: GraphQLString },
        "subject": { type: GraphQLString }
    }
});
export const ClientType = new GraphQLObjectType({
    name: "ClientType",
    fields: {
        "name": { type: GraphQLString },
        "description": { type: GraphQLString },
        "client_id": { type: GraphQLString },
        "client_secret": { type: GraphQLString },
        "app_type": { type: GraphQLString },
        "logo_uri": { type: GraphQLString },
        "is_first_party": { type: GraphQLBoolean },
        "oidc_conformant": { type: GraphQLBoolean },
        "callbacks": { type: new GraphQLList(GraphQLString) },
        "allowed_origins": { type: new GraphQLList(GraphQLString) },
        "web_origins": { type: new GraphQLList(GraphQLString) },
        "client_aliases": { type: new GraphQLList(GraphQLString) },
        "allowed_clients": { type: new GraphQLList(GraphQLString) },
        "allowed_logout_urls": { type: new GraphQLList(GraphQLString) },
        "jwt_configuration": { type: JwtConfigType },
        "signing_keys": { type: new GraphQLList(GraphQLString) },
        "encryption_key": { type: EncryptionKeyType },
        "sso": { type: GraphQLBoolean },
        "sso_disabled": { type: GraphQLBoolean },
        "cross_origin_auth": { type: GraphQLBoolean },
        "cross_origin_loc": { type: GraphQLString },
        "custom_login_page_on": { type: GraphQLBoolean },
        "custom_login_page": { type: GraphQLString },
        "custom_login_page_preview": { type: GraphQLString },
        "form_template": { type: GraphQLString },
        "addons": { type: GraphQLString },
        "token_endpoint_auth_method": { type: GraphQLString },
        "client_metadata": { type: GraphQLString },
    }

});