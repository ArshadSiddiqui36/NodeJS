const { CANCELLED } = require("dns");
// const event = require("events");
// const EventEmitter = new event.EventEmitter();

const EventEmitter = require("events");

const event = new EventEmitter();

// The concept is quit simple : emitter object emit named events that cause previously registered listeners to be called.
// So, an emitter object basically has two main features : 

// Emitting name events.
// Registering and unregistering listener functions.

// event.on("sayMyName", () => {
//     console.log("Your name is Mohammad");
// });

// event.on("sayMyName", () => {
//     console.log("Your name is Arsad");
// });

// event.on("sayMyName", () => {
//     console.log("Your name is Siddiqui");
// });

// event.emit("sayMyName");


event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkPage", 200, "Ok");


