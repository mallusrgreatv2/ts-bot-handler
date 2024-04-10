import fs from "node:fs/promises";
import type Client from "@/structures/client.js";
import type Select from "@/structures/select/string.js";
export default async function stringSelectHandler(client: Client) {
	const directories = await fs.readdir(
		"./dist/interactions/select-menus/string",
	);
	for (const directory of directories) {
		const files = (
			await fs.readdir(`./dist/interactions/select-menus/string/${directory}/`)
		).filter((v) => !v.endsWith(".disabled.js"));
		for (const file of files) {
			const imported = (await import(
				`../../interactions/select-menus/string/${directory}/${file}`
			).then((imported) => imported.default)) as Select;
			client.selects.string.set(imported.customId, imported);
			client.logger.info(
				`[SELECTS] Loaded string select menu ${imported.customId}`,
			);
		}
	}
}
