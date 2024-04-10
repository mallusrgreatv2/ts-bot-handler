import type { RoleSelectMenuInteraction } from "discord.js";
import type Client from "../client.js";

export default class RoleSelect {
	readonly customId: string;
	readonly run: (
		client: Client,
		interaction: RoleSelectMenuInteraction,
	) => unknown;
	constructor(obj: {
		customId: string;
		readonly run: (
			client: Client,
			interaction: RoleSelectMenuInteraction,
		) => unknown;
	}) {
		this.customId = obj.customId;
		this.run = obj.run;
	}
}
