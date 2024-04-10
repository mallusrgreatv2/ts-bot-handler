import Event from "@/structures/event.js";
export default new Event({
	event: "ready",
	run: async (c, client) => {
		c.logger.info(`Bot logged in as ${client.user.tag}`);
		const commands = c.commands.map((command) => command.data.toJSON());
		const contextMenus = c.contextMenus.map((command) => command.data.toJSON());
		if (c.config.COMMANDS_GUILD_ONLY === "true")
			await client.guilds.cache
				.get(c.config.GUILD_ID.toString())
				?.commands.set([...commands, ...contextMenus]);
		else await client.application.commands.set([...commands, ...contextMenus]);
	},
});
