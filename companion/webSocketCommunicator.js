export class WebSocketCommunicator {

    constructor() {

        this.wsUri = "ws://192.168.1.30:8765";
        this.websocket = new WebSocket(this.wsUri);

        this.websocket.addEventListener("open", this.onOpen);
        this.websocket.addEventListener("close", this.onClose);
        this.websocket.addEventListener("message", this.onMessage);
        this.websocket.addEventListener("error", this.onError);

    }

    onOpen(evt) {
        console.log("CONNECTED");
    }

    onClose(evt) {
        console.log("DISCONNECTED");
    }

    onMessage(evt) {
        console.log(`MESSAGE: ${evt.data}`);
    }

    onError(evt) {
        console.error(`ERROR: ${evt.data}`);
    }

    sendMessage(data) {
        this.websocket.send(data);

    }
}