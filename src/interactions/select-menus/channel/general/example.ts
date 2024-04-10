import ChannelSelect from "@/structures/select/channel.js";

export default new ChannelSelect({
	customId: "example",
	async run(client, interaction) {
		await interaction.reply("Hello!");
	},
});
