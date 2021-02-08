import { CascadeCommand, CascadeMessage } from "https://deno.land/x/cascade@1.0.3/mod.ts";

export default class ExampleCommand extends CascadeCommand {
    public constructor() {
        super({
            name: 'example', // this is used internally you dont need to worry about it
            aliases: ['example', 'ex'], // make sure to put the actual name of the command here also
            description: {
                content: "An example command.", // the actual description of the command
                usage: "example <arg1>", // how people should use this command
                examples: [ // examples of using this command
                    "example hi",
                    "example hello",
                ],
            },
            args: [ // The arguments for this command
                {
                    id: 'arg1', // the id of the argument so it is easy to referance
                    type: 'string' // the type of argument
                }
            ]
        })
    }
    public async exec(message: CascadeMessage) {
        message.channel?.send('example')
        console.log('this is a test')
    }
}