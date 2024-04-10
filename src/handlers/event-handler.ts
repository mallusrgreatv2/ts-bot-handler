import fs from "node:fs/promises";
import type Client from "@/structures/client.js";
import type Event from "@/structures/event.js";
import type { ClientEvents } from "discord.js";
async function eventHandler(client: Client) {
	const directories = await fs.readdir("./dist/events");
	for (const directory of directories) {
		const files = (await fs.readdir(`./dist/events/${directory}`)).filter(
			(v) => !v.endsWith(".disabled.js"),
		);

		for (const file of files) {
			const eventFile: Event<keyof ClientEvents> = await import(
				`../events/${directory}/${file}`
			).then((imported) => imported.default);
			const { event } = eventFile;
			client.logger.info(`[EVENTS] Loaded a file: ${file}`);
			try {
				client.on(event, (...args: ClientEvents[typeof event]) => {
					eventFile.run(client, ...args);
				});
			} catch (err) {
				console.error(err);
			}
		}
	}
}

export default eventHandler;
