import fs from "node:fs/promises";
import type Client from "@/structures/client.js";
import type Modal from "@/structures/modal.js";
export default async function modalHandler(client: Client) {
	const directories = await fs.readdir("./dist/interactions/Modals");
	for (const directory of directories) {
		const files = (
			await fs.readdir(`./dist/interactions/Modals/${directory}/`)
		).filter((v) => !v.endsWith(".disabled.js"));
		for (const file of files) {
			const imported = (await import(
				`../interactions/Modals/${directory}/${file}`
			).then((imported) => imported.default)) as Modal;
			client.modals.set(imported.customId, imported);
			client.logger.info(`[MODALS] Loaded modal ${imported.customId}`);
		}
	}
}
