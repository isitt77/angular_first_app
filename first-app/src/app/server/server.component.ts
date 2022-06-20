import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerCompoonent {
    serverId = 10;
    serverStatus = 'offline';
}