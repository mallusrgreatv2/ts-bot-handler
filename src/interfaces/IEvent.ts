import type Client from "@/structures/client.js";
import type { ClientEvents } from "discord.js";

interface IEvent<K extends keyof ClientEvents> {
	event: K;
	run: (client: Client, ...args: ClientEvents[K]) => unknown;
}
export default IEvent;
