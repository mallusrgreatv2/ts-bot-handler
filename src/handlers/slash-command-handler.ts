import fs from "node:fs/promises";
import type Client from "@/structures/client.js";
import type Command from "@/structures/command.js";
export default async function commandHandler(client: Client) {
	const directories = await fs.readdir("./dist/interactions/slash-commands");
	for (const directory of directories) {
		const files = (
			await fs.readdir(`./dist/interactions/slash-commands/${directory}/`)
		).filter((v) => !v.endsWith(".disabled.js"));
		for (const file of files) {
			const imported = (await import(
				`../interactions/slash-commands/${directory}/${file}`
			).then((imported) => imported.default)) as Command;
			client.commands.set(imported.data.name, imported);
			client.logger.info(`[SLASH] Loaded command ${imported.data.name}`);
		}
	}
}
