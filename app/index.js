import document from "document";
import { SocketCommunication } from "./socketCommunication";

//Button assignment
let upBtn = document.getElementById("volumeUpBtn");
let downBtn = document.getElementById("volumeDownBtn");
let onBtn = document.getElementById("onBtn");
let offBtn = document.getElementById("offBtn");

let socketCommunicator = new SocketCommunication();

upBtn.onactivate = () => socketCommunicator.sendMessage("Volume Up Pressed");
downBtn.onactivate = () => socketCommunicator.sendMessage("Volume Down Pressed");
onBtn.onactivate = () => socketCommunicator.sendMessage("On Pressed");
offBtn.onactivate = () => socketCommunicator.sendMessage("Off Pressed");