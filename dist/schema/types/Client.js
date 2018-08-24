"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const JwtConfigType = new graphql_1.GraphQLObjectType({
    name: "JwtConfigType",
    fields: {
        "lifetime_in_seconds": { type: graphql_1.GraphQLInt },
        "secret_encoded": { type: graphql_1.GraphQLBoolean },
        "scopes": { type: graphql_1.GraphQLString },
        "alg": { type: graphql_1.GraphQLString }
    }
});
const EncryptionKeyType = new graphql_1.GraphQLObjectType({
    name: "EncryptionKeyType",
    fields: {
        "pub": { type: graphql_1.GraphQLString },
        "cert": { type: graphql_1.GraphQLString },
        "subject": { type: graphql_1.GraphQLString }
    }
});
exports.ClientType = new graphql_1.GraphQLObjectType({
    name: "ClientType",
    fields: {
        "name": { type: graphql_1.GraphQLString },
        "description": { type: graphql_1.GraphQLString },
        "client_id": { type: graphql_1.GraphQLString },
        "client_secret": { type: graphql_1.GraphQLString },
        "app_type": { type: graphql_1.GraphQLString },
        "logo_uri": { type: graphql_1.GraphQLString },
        "is_first_party": { type: graphql_1.GraphQLBoolean },
        "oidc_conformant": { type: graphql_1.GraphQLBoolean },
        "callbacks": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        "allowed_origins": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        "web_origins": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        "client_aliases": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        "allowed_clients": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        "allowed_logout_urls": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        "jwt_configuration": { type: JwtConfigType },
        "signing_keys": { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        "encryption_key": { type: EncryptionKeyType },
        "sso": { type: graphql_1.GraphQLBoolean },
        "sso_disabled": { type: graphql_1.GraphQLBoolean },
        "cross_origin_auth": { type: graphql_1.GraphQLBoolean },
        "cross_origin_loc": { type: graphql_1.GraphQLString },
        "custom_login_page_on": { type: graphql_1.GraphQLBoolean },
        "custom_login_page": { type: graphql_1.GraphQLString },
        "custom_login_page_preview": { type: graphql_1.GraphQLString },
        "form_template": { type: graphql_1.GraphQLString },
        "addons": { type: graphql_1.GraphQLString },
        "token_endpoint_auth_method": { type: graphql_1.GraphQLString },
        "client_metadata": { type: graphql_1.GraphQLString },
    }
});
//# sourceMappingURL=Client.js.map