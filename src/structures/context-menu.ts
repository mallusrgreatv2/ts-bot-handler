import type Client from "@/structures/client.js";
import type {
	ContextMenuCommandBuilder,
	ContextMenuCommandInteraction,
} from "discord.js";

export default class ContextMenu {
	readonly data: ContextMenuCommandBuilder;
	readonly run: (
		client: Client,
		interaction: ContextMenuCommandInteraction,
	) => unknown;
	constructor(obj: {
		data: ContextMenuCommandBuilder;
		run: (
			client: Client,
			interaction: ContextMenuCommandInteraction,
		) => unknown;
	}) {
		this.data = obj.data;
		this.run = obj.run;
	}
}
