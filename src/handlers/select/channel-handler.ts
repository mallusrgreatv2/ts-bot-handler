import fs from "node:fs/promises";
import type Client from "@/structures/client.js";
import type Select from "@/structures/select/channel.js";
export default async function channelSelectHandler(client: Client) {
	const directories = await fs.readdir(
		"./dist/interactions/select-menus/channel",
	);
	for (const directory of directories) {
		const files = (
			await fs.readdir(`./dist/interactions/select-menus/channel/${directory}/`)
		).filter((v) => !v.endsWith(".disabled.js"));
		for (const file of files) {
			const imported = (await import(
				`../../interactions/select-menus/channel/${directory}/${file}`
			).then((imported) => imported.default)) as Select;
			client.selects.channel.set(imported.customId, imported);
			client.logger.info(
				`[SELECTS] Loaded channel select menu ${imported.customId}`,
			);
		}
	}
}
