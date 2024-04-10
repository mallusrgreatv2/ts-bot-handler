import fs from "node:fs/promises";
import type Client from "@/structures/client.js";
import type Select from "@/structures/select/mentionable.js";
export default async function mentionableSelectHandler(client: Client) {
	const directories = await fs.readdir(
		"./dist/interactions/select-menus/mentionable",
	);
	for (const directory of directories) {
		const files = (
			await fs.readdir(
				`./dist/interactions/select-menus/mentionable/${directory}/`,
			)
		).filter((v) => !v.endsWith(".disabled.js"));
		for (const file of files) {
			const imported = (await import(
				`../../interactions/select-menus/mentionable/${directory}/${file}`
			).then((imported) => imported.default)) as Select;
			client.selects.mentionable.set(imported.customId, imported);
			client.logger.info(
				`[SELECTS] Loaded mentionable select menu ${imported.customId}`,
			);
		}
	}
}
