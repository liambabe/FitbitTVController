import * as messaging from "messaging";

export class SocketCommunication {


    constructor() {

        // Listen for the onerror event
        messaging.peerSocket.onerror = function(err) {
            console.log("Connection error: " + err.code + " - " + err.message);
        }
        
    }

    // Send a message to the peer
    sendMessage(data) {
        if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
            // Send the data to peer as a message
            messaging.peerSocket.send(data);
        }
    }

}