--Compiled with roblox-ts v2.1.1
local TS = _G[script]
-- BloxstrapRPC Helper Module (current version is v1.0.1)
-- Original code written by pizzaboxer (@xtremeguy2256) and Epix (@ElusiveEpix)
-- Typed version made by doqe (@doqe_wow)
-- A typed import of https://www.roblox.com/library/14278970228/BloxstrapRPC-Helper-Module
-- Devforum Post https://devforum.roblox.com/t/add-custom-discord-rich-presence-to-your-game-with-bloxstraprpc/2565551
local HttpService = TS.import(script, TS.getModule(script, "@rbxts", "services")).HttpService
-- eslint-disable-next-line @typescript-eslint/no-explicit-any
local function SendMessage(command, data)
	local json = HttpService:JSONEncode({
		command = command,
		data = data,
	})
	print("[BloxstrapRPC] " .. json)
end
local function SetRichPresence(data)
	local _condition = data.timeStart ~= nil
	if _condition then
		local _timeStart = data.timeStart
		_condition = type(_timeStart) == "number"
	end
	if _condition then
		data.timeStart = math.round(data.timeStart)
	end
	local _condition_1 = data.timeEnd ~= nil
	if _condition_1 then
		local _timeEnd = data.timeEnd
		_condition_1 = type(_timeEnd) == "number"
	end
	if _condition_1 then
		data.timeEnd = math.round(data.timeEnd)
	end
	SendMessage("SetRichPresence", data)
end
return {
	SendMessage = SendMessage,
	SetRichPresence = SetRichPresence,
}
