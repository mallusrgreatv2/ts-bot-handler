import type { ChannelSelectMenuInteraction } from "discord.js";
import type Client from "../client.js";

export default class ChannelSelect {
	readonly customId: string;
	readonly run: (
		client: Client,
		interaction: ChannelSelectMenuInteraction,
	) => unknown;
	constructor(obj: {
		customId: string;
		readonly run: (
			client: Client,
			interaction: ChannelSelectMenuInteraction,
		) => unknown;
	}) {
		this.customId = obj.customId;
		this.run = obj.run;
	}
}
