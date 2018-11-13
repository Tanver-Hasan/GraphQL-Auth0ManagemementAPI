import { GraphQLObjectType, GraphQLSchema, GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { UserType } from "./types/User";
import { ManagementApi } from "../service/Data";
import { GrantType } from "./types/Grant";
import { ClientType } from "./types/Client";
import { ConnectionType, ConnectionMutationType } from "./types/Connection";
import { AddUserSubscriptionType } from "./Subscription/user";
import { PubSub, withFilter } from "graphql-subscriptions";
import { UserUpdateInputType, UserCreateInputType } from "./mutations/user";
import { ResourceServerType } from "./types/ResourceServer";
import { ResourceServerInputType } from "./mutations/ResourceServer";
import { ConnectionInputType } from "./mutations/Connection";
import { LinkUserInputType, LinkUserType } from "./mutations/LinkUser";
import {  CreatePasswordChangeTicketInputType } from "./mutations/Jobs";
import { PasswordChangeTicketType } from "./types/Ticket";

export const pubsub = new PubSub();

const api = new ManagementApi();

const RootQueryType = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        UserById: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                email: { type: GraphQLString }
            },
            resolve: (obj, args, ctx) => {

                return api.getUser(args.id);

            }
        },
        UserByEmail: {
            type: new GraphQLList(UserType),
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (obj, args, ctx) => {
                return api.getUserByEmail(args.email.toLowerCase());
            }
        },

        UsersAll: {
            type: new GraphQLList(UserType),
            resolve: () => {
                return api.getUsers();
            }
        },

        GetAllGrants: {
            type: new GraphQLList(GrantType),
            resolve: () => {
                return api.getAllGrants();
            }
        },
        GetALLClients: {
            type: new GraphQLList(ClientType),
            resolve: () => {
                return api.getAllClients();
            }
        },
        GetClient: {
            type: ClientType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: (obj, args, ctx) => {
                return api.getClientById(args.id);
            }
        },
        GetAllConnection: {
            type: new GraphQLList(ConnectionType),
            resolve: () => {
                return api.getAllConnection();
            }
        },
        GetConnection: {
            type: ConnectionType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: (obj, args, ctx) => {
                return api.getConnectionById(args.id);
            }
        },
        GetResourceServers: {
            type: new GraphQLList(ResourceServerType),
            resolve: (obj, args, ctx) => {
                return api.getResourceServers();
            }
        },
        GetResourceServer: {
            type: ResourceServerType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (obj, args, ctx) => {
                return api.getResourceServer(args.id);
            }
        },
    }
});
const SOMETHING_CHANGED_TOPIC = "something_changed";
const RootMutationType = new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
        UpdateUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                input: { type: new GraphQLNonNull(UserUpdateInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.updateUser(args.id, args.input);
            }
        },
        CreateUser: {
            type: UserType,
            args: {
                input: { type: new GraphQLNonNull(UserCreateInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.saveUser(args.input).then(res => {
                    pubsub.publish(SOMETHING_CHANGED_TOPIC, { UserCreated: res });
                    console.log(res);
                    return res;
                });
            }
        },

        DeleteUser: {
            type: GraphQLString,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }

            },
            resolve: (obj, args, ctx) => {
                return api.deleteUser(args.id);
            }
        },
        LinkUserAccounts: {
            type: LinkUserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                input: { type: new GraphQLNonNull(LinkUserInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.linkUserAccount(args.id, args.input);
            }
        },
        CreateResourceServer: {
            type: ResourceServerType,
            args: {
                input: { type: new GraphQLNonNull(ResourceServerInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.createResourceServer(args.input);
            }
        },
        CreateConnection: {
            type: ConnectionMutationType,
            args: {
                input: { type: new GraphQLNonNull(ConnectionInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.createConnection(args.input);
            }
        },

        CreatePaswordChangeTicket: {
            type: PasswordChangeTicketType,
            args: {
                input: { type: new GraphQLNonNull(CreatePasswordChangeTicketInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.createPasswordChangeTicket(args.input);
            }
        }
    }
});

const RootSubscriptionType = new GraphQLObjectType({
    name: "RootSubscriptionType",
    fields: () => ({
        UserCreated: {
            type: UserType,
            // args: {
            //     input: { type: new GraphQLNonNull(UserInputType) }
            // },
            subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
        }
    })
});

export const Schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
    subscription: RootSubscriptionType
});