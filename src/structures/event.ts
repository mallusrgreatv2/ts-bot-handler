import type IEvent from "@/interfaces/IEvent.js";
import type Client from "@/structures/client.js";
import type { ClientEvents } from "discord.js";

export default class Event<K extends keyof ClientEvents> implements IEvent<K> {
	public event: K;
	public run: (client: Client, ...args: ClientEvents[K]) => unknown;

	constructor(options: IEvent<K>) {
		this.event = options.event;
		this.run = options.run;
	}
}
