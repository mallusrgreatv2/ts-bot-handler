import type Client from "@/structures/client.js";
import type { ButtonInteraction } from "discord.js";

export default class Button {
	readonly customId: string;
	readonly run: (client: Client, interaction: ButtonInteraction) => unknown;
	constructor(obj: {
		customId: string;
		readonly run: (client: Client, interaction: ButtonInteraction) => unknown;
	}) {
		this.customId = obj.customId;
		this.run = obj.run;
	}
}
