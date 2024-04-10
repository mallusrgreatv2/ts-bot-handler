import fs from "node:fs/promises";
import type Client from "@/structures/client.js";
import type Select from "@/structures/select/user.js";
export default async function userSelectHandler(client: Client) {
	const directories = await fs.readdir("./dist/interactions/select-menus/user");
	for (const directory of directories) {
		const files = (
			await fs.readdir(`./dist/interactions/select-menus/user/${directory}/`)
		).filter((v) => !v.endsWith(".disabled.js"));
		for (const file of files) {
			const imported = (await import(
				`../../interactions/select-menus/user/${directory}/${file}`
			).then((imported) => imported.default)) as Select;
			client.selects.user.set(imported.customId, imported);
			client.logger.info(
				`[SELECTS] Loaded user select menu ${imported.customId}`,
			);
		}
	}
}
