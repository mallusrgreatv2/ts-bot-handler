import type { StringSelectMenuInteraction } from "discord.js";
import type Client from "../client.js";

export default class StringSelect {
	readonly customId: string;
	readonly run: (
		client: Client,
		interaction: StringSelectMenuInteraction,
	) => unknown;
	constructor(obj: {
		customId: string;
		readonly run: (
			client: Client,
			interaction: StringSelectMenuInteraction,
		) => unknown;
	}) {
		this.customId = obj.customId;
		this.run = obj.run;
	}
}
