import type { MentionableSelectMenuInteraction } from "discord.js";
import type Client from "../client.js";

export default class MentionableSelect {
	readonly customId: string;
	readonly run: (
		client: Client,
		interaction: MentionableSelectMenuInteraction,
	) => unknown;
	constructor(obj: {
		customId: string;
		readonly run: (
			client: Client,
			interaction: MentionableSelectMenuInteraction,
		) => unknown;
	}) {
		this.customId = obj.customId;
		this.run = obj.run;
	}
}
