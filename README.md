# Typescript Bot Handler

## Features

- All types of interactions supported
- Proper logging system with debug logs in development environment
- Fully typed
- Optional MongoDB support

You'll never have to touch the interactionCreate event, ever again.
Supported interactions:

- Slash commands
- All types of select menus
- Modals
- Context menus
- Buttons

## Setup

1. `git clone https://github.com/mallusrgreatv2/ts-bot-handler.git`
2. `npm install` or `yarn install`
3. Copy content of [`.env.example`](https://github.com/mallusrgreatv2/ts-bot-handler/blob/master/.env.example) to a new file called .env
4. Change the values in .env
5. Run the dev script for development purposes (enables debug logs), or the start script in production.

## Rules

- For disabled commands, events, selects, buttons, context menus, or modals, name them `(name).disabled.ts`
