import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } from "graphql";



export const ConnectionType = new GraphQLObjectType({
    name: "ConnectionType",
    fields: {
        "name": { type: GraphQLString },
        "options": { type: GraphQLString },
        "id": { type: GraphQLString },
        "strategy": { type: GraphQLString },
        "realms": { type: new GraphQLList(GraphQLString) },
        "is_domain_connection": { type: GraphQLBoolean },
        "metadata": { type: GraphQLString }
    }
});

export const ConnectionMutationType = new GraphQLObjectType({
    name: "ConnectionMutationType",
    fields: {
        "name": { type: GraphQLString },
        "options": { type: GraphQLString },
        "id": { type: GraphQLString },
        "strategy": { type: GraphQLString },
        "realms": { type: new GraphQLList(GraphQLString) },
        "is_domain_connection": { type: GraphQLBoolean },
        "metadata": { type: GraphQLString },
        "enabled_clients": { type: new GraphQLList(GraphQLString)}
    }
});