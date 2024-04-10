import type {
	AutocompleteInteraction,
	ChatInputCommandInteraction,
	GuildMember,
	SlashCommandBuilder,
	SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";
import type Client from "./client.js";

export default class Command {
	readonly data:
		| SlashCommandBuilder
		| Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
		| SlashCommandSubcommandsOnlyBuilder;
	readonly run: (
		client: Client,
		interaction: ChatInputCommandInteraction,
		member: GuildMember,
	) => unknown;
	readonly autocomplete?: (
		client: Client,
		interaction: AutocompleteInteraction,
	) => unknown;
	constructor(obj: {
		data:
			| SlashCommandBuilder
			| Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
			| SlashCommandSubcommandsOnlyBuilder;
		run: (
			client: Client,
			interaction: ChatInputCommandInteraction,
			member: GuildMember,
		) => unknown;
		autocomplete?: (
			client: Client,
			interaction: AutocompleteInteraction,
		) => unknown;
	}) {
		this.data = obj.data;
		this.run = obj.run;
		this.autocomplete = obj.autocomplete;
	}
}
