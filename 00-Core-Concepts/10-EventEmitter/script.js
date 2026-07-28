// on(eventName, callback)   -- listener
// emit(eventName)     -- executes the listners

const EventEmitter = require("events")

const emitter = new EventEmitter()

emitter.on("hello",()=>{
    console.log("Event Done");
})

console.log("Event Started");

emitter.emit("hello")

console.log("Finished");


{

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.emit("login");

emitter.on("login", () => {
    console.log("User Logged In");
});

}



{

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("task", () => {
    console.log("Hello");
});

emitter.emit("task");

emitter.emit("task");

emitter.emit("task");

}



{

// ordered printing sense

emitter.on("login",()=>{
    console.log("User logged in successfully.");
}) 

emitter.on("logout",()=>{
    console.log("User logged out successfully.");
    
})

emitter.emit("login")
emitter.emit("logout")
emitter.emit("login")


}



{

// signup with data

emitter.on("signup" , (name,email) => {
    console.log({
        name,
        email
    });
    
})

emitter.emit("signup","Yaman" , "yaman@gmail.com")


}



{

// listener and emitter 

emitter.on("sign-up",() => console.log("Creating user profile..."))

emitter.on("sign-up",() => console.log("Sending welcome email..."))

emitter.on("sign-up",(name) => console.log(`Logging signup activity of ${name}`))

emitter.emit("sign-up","Yaman")


}

