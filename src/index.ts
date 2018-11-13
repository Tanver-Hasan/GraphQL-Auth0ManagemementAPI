import express from "express";
import graphqlHttp from "express-graphql";
import { Schema } from "./schema/Schema";
import { ApolloServer, gql, PubSub } from "apollo-server";
import { execute, subscribe } from "graphql";
import { createServer } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";
const pubsub = new PubSub();

const PORT = 3001;
const app = express();

app.use("/graphql", graphqlHttp({
    schema: Schema,
    graphiql: true,
}));


// app.use("/graphiql",
//     graphiqlExpress({
//         endpointURL: "/graphql",
//         subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
//     }));

const server = new ApolloServer({
    schema: Schema,
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


