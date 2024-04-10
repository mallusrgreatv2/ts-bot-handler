import StringSelect from "@/structures/select/string.js";

export default new StringSelect({
	customId: "example",
	async run(client, interaction) {
		await interaction.reply("Hello!");
	},
});
