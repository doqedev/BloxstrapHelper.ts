# Credits

[Pizzaboxer](https://github.com/pizzaboxer) for even making bloxstrap. (anybody who helps will be credited here)

# BloxStrap RPC (for rbxts)

Bloxstrap is a alternative bootstrapper for ROBLOX, as of around August 27-28, 2023, bloxstrap now has their own RPC built in (with activity tracking), you can learn more [here](https://github.com/pizzaboxer/bloxstrap/wiki/What-is-activity-tracking%3F)

If anything else is released i'll be sure to focus on that!

## Example Usage

This is converted from [here](https://github.com/pizzaboxer/bloxstrap/wiki/Integrating-Bloxstrap-functionality-into-your-game#example-usage) to TS code.

```ts
import BloxstrapRPC from "@rbxts/bloxstraphelper";

const timestamp = os.time();

BloxstrapRPC.SetRichPresence({
	details: "Example details value",
	state: "Example state value",
	timeStart: timestamp,
	timeEnd: timestamp + 60,
	largeImage: {
		assetId: 10630555127,
		hoverText: "Example hover text",
	},
	smallImage: {
		assetId: 13409122839,
		hoverText: "Example hover text",
	},
});
```
