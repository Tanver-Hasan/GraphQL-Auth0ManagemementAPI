import { GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from "graphql";

export const CreatePasswordChangeTicketInputType = new GraphQLInputObjectType({
    name: "CreatePasswordChangeTicketInputType",
    fields: {
        result_url: { type: GraphQLString },
        user_id: { type: GraphQLString },
        connection_id: { type: GraphQLString },
        email: { type: GraphQLString },
        ttl_sec: { type: GraphQLInt },
        mark_email_as_verified: { type: GraphQLBoolean }
    }
});