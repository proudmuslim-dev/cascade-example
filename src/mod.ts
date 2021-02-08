import { 
    CascadeClient,
    CascadeCommandHandler,
    CascadeListenerHandler,
    CascadeInhibitorHandler
} from "https://deno.land/x/cascade@1.0.3/mod.ts";
import { join } from "https://deno.land/std@0.86.0/fs"; // i think this is from fs(idfk though didnt actually test this to see if it works)
import { config } from "../config.example.ts";



const commandHandler = new CascadeCommandHandler({
    commandDir: join(Deno.cwd(), "commands"),
    prefix: config.prefix //the prefix you defined in the config file
})
const listenerHandler = new CascadeListenerHandler({
    listenerDir: join(Deno.cwd(), "listeners"),
})
const inhibitorHandler = new CascadeInhibitorHandler({
    inhibitorDir: join(Deno.cwd(), "inhibitors"),
})

const client = new CascadeClient({
        token: config.token, // the token you defined in the config file
        commandHandler,
        listenerHandler,
        inhibitorHandler,
        owners: config.owners,
        verbose: true // You can turn this off if you would like(it is recommended when your bot becomes a decent size)
});

client.listenerHandler.setEmitters({
    commandHandler,
    listenerHandler,
    inhibitorHandler,
    client
    // put any other emmiters here
});

