import * as http from "http";
import * as WebSocket from "ws";
import app from "./app/app";

// const app = express();
const port = process.env.PORT || 8080; // default port. TODO: see if this can be improved, maybe use a config library

// initialize a simple http server
const server = http.createServer(app);
// initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws: WebSocket) => {
    ws.on("message", (message: string) => {
        // tslint:disable-next-line:no-console
        console.log("Received: %s", message);
        ws.send(`Received message ${message}`);
    });

    // send a feedback to the incoming connection
    ws.send("A websocket server connection established");
});

// start our server
server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started on http://localhost:${port}`);
});
