"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client = require("auth0").ManagementClient;
class ManagementApi {
    constructor() {
        this.auth0 = new Client({
            domain: "[domain].auth0.com",
            clientId: "[client id]",
            clientSecret: "[client secret]",
            audience: "https://[domain].auth0.com/api/v2/"
        });
    }
    getUsers() {
        return this.auth0.getUsers().then(res => {
            return res;
        });
    }
    getUserByEmail(email) {
        return this.auth0.getUsersByEmail(email).then(res => {
            console.log(res);
            return res;
        });
    }
    getUser(user_id) {
        // console.log(id);
        const params = { id: user_id };
        return this.auth0.getUser(params).then(res => {
            console.log(res);
            return res;
        });
    }
    saveUser(input) {
        return this.auth0.createUser(input).then(res => {
            // console.log(res);
            return res;
        });
    }
    updateUser(user_id, input) {
        const params = { id: user_id };
        return this.auth0.updateUser(params, input).then(res => {
            console.log(res);
            return res;
        });
    }
    deleteUser(id) {
        const params = { id: id };
        return this.auth0.deleteUser(params).then(res => {
            return res;
        });
    }
    getAllClients() {
        return this.auth0.getClients().then(res => {
            return res;
        });
    }
    getAllGrants() {
        return this.auth0.getClientGrants().then(res => {
            console.log(res);
            return res;
        });
    }
    getClientById(id) {
        const params = { client_id: id };
        return this.auth0.getClient(params).then(res => {
            console.log(res);
            return res;
        });
    }
    getAllConnection() {
        return this.auth0.getConnections().then(res => {
            return res;
        });
    }
    getConnectionById(connectionId) {
        const params = { id: connectionId };
        return this.auth0.getConnection(params).then(res => {
            return res;
        });
    }
    getResourceServers() {
        return this.auth0.getResourceServers().then(res => {
            console.log(res);
            return res;
        });
    }
    getResourceServer(id) {
        const params = {
            id: id
        };
        return this.auth0.getResourceServer(params).then(res => {
            return res;
        });
    }
    createResourceServer(input) {
        return this.auth0.createResourceServer(input).then(res => {
            return res;
        });
    }
    createConnection(input) {
        return this.auth0.createConnection(input).then(res => {
            return res;
        });
    }
    linkUserAccount(id, input) {
        return this.auth0.linkUsers(id, input).then(res => {
            return res;
        });
    }
    createPasswordChangeTicket(input) {
        return this.auth0.createPasswordChangeTicket(input).then(res => {
            return res;
        });
    }
}
exports.ManagementApi = ManagementApi;
//# sourceMappingURL=Data.js.map