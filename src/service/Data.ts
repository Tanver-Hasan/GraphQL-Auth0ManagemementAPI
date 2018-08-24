import { ManagementClient } from "auth0";
import { thisTypeAnnotation } from "../../node_modules/@types/babel-types";
import { REFUSED } from "dns";

const Client = require("auth0").ManagementClient;

export class ManagementApi {
    auth0: ManagementClient;
    constructor() {
        this.auth0 = new Client({
            domain: "[domain]",
            clientId: "[client id]",
            clientSecret: "[client secret]",
            audience: "[audience]"
        });
    }
    getUsers() {
        return this.auth0.getUsers().then(res => {
            return res;
        });
    }
    getUserByEmail(email: string) {
        return this.auth0.getUsersByEmail(email).then(res => {
            console.log(res);
            return res;
        });
    }
    getUser(user_id: any) {
        // console.log(id);
        const params = { id: user_id };
        return this.auth0.getUser(params).then(res => {
            console.log(res);
            return res;
        });
    }
    saveUser(input: any) {
        return this.auth0.createUser(input).then(res => {
            // console.log(res);
            return res;
        });
    }
    updateUser(user_id: any, input: any) {
        const params = { id: user_id };
        return this.auth0.updateUser(params, input).then(res => {
            console.log(res);
            return res;
        });
    }
    deleteUser(id: string) {
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
    getClientById(id: any) {
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
    getConnectionById(connectionId: any) {
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
    getResourceServer(id: string) {
        const params = {
            id: id
        };
        return this.auth0.getResourceServer(params).then(res => {
            return res;
        });
    }

    createResourceServer(input: any) {
        return this.auth0.createResourceServer(input).then(res => {
            return res;
        });
    }

    createConnection(input: any) {
        return this.auth0.createConnection(input).then(res => {
            return res;
        });
    }
}
