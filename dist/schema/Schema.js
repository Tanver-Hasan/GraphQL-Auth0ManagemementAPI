"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const User_1 = require("./types/User");
const Data_1 = require("../service/Data");
const Grant_1 = require("./types/Grant");
const Client_1 = require("./types/Client");
const Connection_1 = require("./types/Connection");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const user_1 = require("./mutations/user");
const ResourceServer_1 = require("./types/ResourceServer");
const ResourceServer_2 = require("./mutations/ResourceServer");
const Connection_2 = require("./mutations/Connection");
exports.pubsub = new graphql_subscriptions_1.PubSub();
const api = new Data_1.ManagementApi();
const RootQueryType = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        UserById: {
            type: User_1.UserType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                email: { type: graphql_1.GraphQLString }
            },
            resolve: (obj, args, ctx) => {
                return api.getUser(args.id);
            }
        },
        UserByEmail: {
            type: new graphql_1.GraphQLList(User_1.UserType),
            args: {
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: (obj, args, ctx) => {
                return api.getUserByEmail(args.email);
            }
        },
        UsersAll: {
            type: new graphql_1.GraphQLList(User_1.UserType),
            resolve: () => {
                return api.getUsers();
            }
        },
        GetAllGrants: {
            type: new graphql_1.GraphQLList(Grant_1.GrantType),
            resolve: () => {
                return api.getAllGrants();
            }
        },
        GetALLClients: {
            type: new graphql_1.GraphQLList(Client_1.ClientType),
            resolve: () => {
                return api.getAllClients();
            }
        },
        GetClient: {
            type: Client_1.ClientType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }
            },
            resolve: (obj, args, ctx) => {
                return api.getClientById(args.id);
            }
        },
        GetAllConnection: {
            type: new graphql_1.GraphQLList(Connection_1.ConnectionType),
            resolve: () => {
                return api.getAllConnection();
            }
        },
        GetConnection: {
            type: Connection_1.ConnectionType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }
            },
            resolve: (obj, args, ctx) => {
                return api.getConnectionById(args.id);
            }
        },
        GetResourceServers: {
            type: new graphql_1.GraphQLList(ResourceServer_1.ResourceServerType),
            resolve: (obj, args, ctx) => {
                return api.getResourceServers();
            }
        },
        GetResourceServer: {
            type: ResourceServer_1.ResourceServerType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: (obj, args, ctx) => {
                return api.getResourceServer(args.id);
            }
        },
    }
});
const SOMETHING_CHANGED_TOPIC = "something_changed";
const RootMutationType = new graphql_1.GraphQLObjectType({
    name: "RootMutationType",
    fields: {
        UpdateUser: {
            type: User_1.UserType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                input: { type: new graphql_1.GraphQLNonNull(user_1.UserUpdateInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.updateUser(args.id, args.input);
            }
        },
        CreateUser: {
            type: User_1.UserType,
            args: {
                input: { type: new graphql_1.GraphQLNonNull(user_1.UserCreateInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.saveUser(args.input).then(res => {
                    exports.pubsub.publish(SOMETHING_CHANGED_TOPIC, { UserCreated: res });
                    console.log(res);
                    return res;
                });
            }
        },
        DeleteUser: {
            type: graphql_1.GraphQLString,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
            },
            resolve: (obj, args, ctx) => {
                return api.deleteUser(args.id);
            }
        },
        CreateResourceServer: {
            type: ResourceServer_1.ResourceServerType,
            args: {
                input: { type: new graphql_1.GraphQLNonNull(ResourceServer_2.ResourceServerInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.createResourceServer(args.input);
            }
        },
        CreateConnection: {
            type: Connection_1.ConnectionMutationType,
            args: {
                input: { type: new graphql_1.GraphQLNonNull(Connection_2.ConnectionInputType) }
            },
            resolve: (obj, args, ctx) => {
                return api.createConnection(args.input);
            }
        }
    }
});
const RootSubscriptionType = new graphql_1.GraphQLObjectType({
    name: "RootSubscriptionType",
    fields: () => ({
        UserCreated: {
            type: User_1.UserType,
            // args: {
            //     input: { type: new GraphQLNonNull(UserInputType) }
            // },
            subscribe: () => exports.pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
        }
    })
});
exports.Schema = new graphql_1.GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
    subscription: RootSubscriptionType
});
//# sourceMappingURL=Schema.js.map