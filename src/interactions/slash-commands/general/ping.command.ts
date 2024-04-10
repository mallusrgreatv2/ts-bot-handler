import Command from "@/structures/command.js";
import { SlashCommandBuilder } from "discord.js";

export default new Command({
	data: new SlashCommandBuilder().setName("ping").setDescription("Sends ping"),
	run: async (client, interaction) => {
		await interaction.reply(`Pong! 🏓\nHeartbeat: ${client.ws.ping}ms`);
	},
});
