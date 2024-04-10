import ContextMenu from "@/structures/context-menu.js";
import { ApplicationCommandType, ContextMenuCommandBuilder } from "discord.js";

export default new ContextMenu({
	data: new ContextMenuCommandBuilder()
		.setName("example")
		.setType(ApplicationCommandType.User),
	async run(client, interaction) {
		await interaction.reply("Hey");
	},
});
