import Button from "@/structures/button.js";

export default new Button({
	customId: "example",
	async run(client, interaction) {
		await interaction.reply("Hello!");
	},
});
