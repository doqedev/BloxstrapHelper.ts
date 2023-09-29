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
export declare function SendMessage(command: string, data: any): void;
export declare function SetRichPresence(data: RichPresence): void;
