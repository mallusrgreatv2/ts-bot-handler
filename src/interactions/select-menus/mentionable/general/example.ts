import MentionableSelect from "@/structures/select/mentionable.js";

export default new MentionableSelect({
	customId: "example",
	async run(client, interaction) {
		await interaction.reply("Hello!");
	},
});
