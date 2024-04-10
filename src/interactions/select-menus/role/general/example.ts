import RoleSelect from "@/structures/select/role.js";

export default new RoleSelect({
	customId: "example",
	async run(client, interaction) {
		await interaction.reply("Hello!");
	},
});
