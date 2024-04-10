import console from "node:console";
import chalk from "chalk";
export default class Logger {
	private debugEnabled = process.env.NODE_ENV === "development";
	constructor(debugEnabled: boolean | undefined | null = undefined) {
		if (typeof debugEnabled !== "undefined" && debugEnabled !== null)
			this.debugEnabled = debugEnabled;
	}
	private time() {
		return `${chalk.bgCyan.white(
			new Date().toLocaleString().replace(",", ""),
		)} |`;
	}
	private formats = {
		info: chalk.whiteBright.bgBlue("INFO"),
		warning: chalk.whiteBright.bgYellow("WARNING"),
		error: chalk.whiteBright.bgRed("ERROR"),
		debug: chalk.whiteBright.bgGrey("DEBUG"),
	};
	log(
		format: (typeof this.formats)[keyof typeof this.formats],
		data: unknown[],
	) {
		for (const msg of data) {
			if (typeof msg === "string") {
				console.log(`${this.time()} ${format} ${msg}`);
				return;
			}
			console.log(`${this.time()} ${format}: `, msg);
			console.log(msg);
		}
	}
	info(...data: unknown[]) {
		this.log(this.formats.info, data);
	}
	warning(...data: unknown[]) {
		this.log(this.formats.warning, data);
	}
	error(...data: unknown[]) {
		this.log(this.formats.error, data);
	}
	debug(...data: unknown[]) {
		if (!this.debugEnabled) return;
		this.log(this.formats.debug, data);
	}
}
