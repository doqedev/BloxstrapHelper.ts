// BloxstrapRPC Helper Module (current version is v1.0.1)

// Original code written by pizzaboxer (@xtremeguy2256) and Epix (@ElusiveEpix)
// Typed version made by doqe (@doqe_wow)

// A typed import of https://www.roblox.com/library/14278970228/BloxstrapRPC-Helper-Module
// Devforum Post https://devforum.roblox.com/t/add-custom-discord-rich-presence-to-your-game-with-bloxstraprpc/2565551

import { HttpService } from "@rbxts/services";

export type RichPresence = {
	details?: string;
	state?: string;
	timeStart?: number;
	timeEnd?: number;
	smallImage?: RichPresenceImage;
	largeImage?: RichPresenceImage;
};

export type RichPresenceImage = {
	assetId?: number;
	hoverText?: string;
	clear?: boolean;
	reset?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SendMessage(command: string, data: any) {
	const json = HttpService.JSONEncode({
		command,
		data,
	});
	print(`[BloxstrapRPC] ${json}`);
}

export function SetRichPresence(data: RichPresence) {
	if (data.timeStart !== undefined && typeIs(data.timeStart, "number")) data.timeStart = math.round(data.timeStart);

	if (data.timeEnd !== undefined && typeIs(data.timeEnd, "number")) data.timeEnd = math.round(data.timeEnd);

	SendMessage("SetRichPresence", data);
}
