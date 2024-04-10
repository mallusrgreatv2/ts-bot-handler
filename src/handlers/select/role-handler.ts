import fs from "node:fs/promises";
import type Client from "@/structures/client.js";
import type Select from "@/structures/select/role.js";
export default async function roleSelectHandler(client: Client) {
	const directories = await fs.readdir("./dist/interactions/select-menus/role");
	for (const directory of directories) {
		const files = (
			await fs.readdir(`./dist/interactions/select-menus/role/${directory}/`)
		).filter((v) => !v.endsWith(".disabled.js"));
		for (const file of files) {
			const imported = (await import(
				`../../interactions/select-menus/role/${directory}/${file}`
			).then((imported) => imported.default)) as Select;
			client.selects.role.set(imported.customId, imported);
			client.logger.info(
				`[SELECTS] Loaded role select menu ${imported.customId}`,
			);
		}
	}
}
