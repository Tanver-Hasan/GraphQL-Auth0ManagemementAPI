"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const Schema_1 = require("./schema/Schema");
const apollo_server_1 = require("apollo-server");
const pubsub = new apollo_server_1.PubSub();
const PORT = 3001;
const app = express_1.default();
app.use("/graphql", express_graphql_1.default({
    schema: Schema_1.Schema,
    graphiql: true,
}));
// app.use("/graphiql",
//     graphiqlExpress({
//         endpointURL: "/graphql",
//         subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
//     }));
const server = new apollo_server_1.ApolloServer({
    schema: Schema_1.Schema,
});
// Wrap the Express server
// const ws = createServer(app);
// ws.listen(PORT, () => {
//     console.log(`Apollo Server is now running on http://localhost:${PORT}`);
//     // Set up the WebSocket for handling GraphQL subscriptions
//     new SubscriptionServer({
//         execute: execute,
//         subscribe: subscribe,
//         schema: Schema
//     }, {
//             server: ws,
//             path: "/subscriptions",
//         });
// });
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//# sourceMappingURL=index.js.map