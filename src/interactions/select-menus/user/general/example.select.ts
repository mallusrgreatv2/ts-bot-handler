import UserSelect from "@/structures/select/user.js";

export default new UserSelect({
	customId: "example",
	async run(client, interaction) {
		await interaction.reply("Hello!");
	},
});
