import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerCompoonent {
    serverId = 10;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}