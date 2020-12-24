import * as messaging from "messaging";
import { WebSocketCommunicator } from "./webSocketCommunicator";

let webSocketCommunicator = new WebSocketCommunicator();


// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  // Output the message to the console
  console.log(evt.data);
  webSocketCommunicator.sendMessage(evt.data);
}