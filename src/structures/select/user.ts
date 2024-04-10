import type { UserSelectMenuInteraction } from "discord.js";
import type Client from "../client.js";

export default class UserSelect {
	readonly customId: string;
	readonly run: (
		client: Client,
		interaction: UserSelectMenuInteraction,
	) => unknown;
	constructor(obj: {
		customId: string;
		readonly run: (
			client: Client,
			interaction: UserSelectMenuInteraction,
		) => unknown;
	}) {
		this.customId = obj.customId;
		this.run = obj.run;
	}
}
