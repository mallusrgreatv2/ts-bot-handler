import type Client from "@/structures/client.js";
import type { ModalSubmitInteraction } from "discord.js";

export default class Modal {
	readonly customId: string;
	readonly run: (
		client: Client,
		interaction: ModalSubmitInteraction,
	) => unknown;
	constructor(obj: {
		customId: string;
		readonly run: (
			client: Client,
			interaction: ModalSubmitInteraction,
		) => unknown;
	}) {
		this.customId = obj.customId;
		this.run = obj.run;
	}
}
