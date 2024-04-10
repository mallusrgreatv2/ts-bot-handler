import type Client from "@/structures/client.js";
import buttonHandler from "./button-handler.js";
import contextMenuHandler from "./context-menu-handler.js";
import eventHandler from "./event-handler.js";
import modalHandler from "./modal-handler.js";
import channelSelectHandler from "./select/channel-handler.js";
import mentionableSelectHandler from "./select/mentionable-handler.js";
import roleSelectHandler from "./select/role-handler.js";
import stringSelectHandler from "./select/string-handler.js";
import userSelectHandler from "./select/user-handler.js";
import commandHandler from "./slash-command-handler.js";
export default function initHandlers(client: Client) {
	passClient(
		client,
		buttonHandler,
		commandHandler,
		eventHandler,
		modalHandler,
		stringSelectHandler,
		channelSelectHandler,
		roleSelectHandler,
		mentionableSelectHandler,
		userSelectHandler,
		contextMenuHandler,
	);
}
function passClient(client: Client, ...funcs: ((client: Client) => unknown)[]) {
	for (const func of funcs) func(client);
}
