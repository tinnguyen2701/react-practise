import { TypeIcon } from "../types";
import { BasePathAssetUrl } from "./constants";

export class AppUtil {
    static getPathImageIcon(typeIcon: TypeIcon): string {
        var assetFolder = BasePathAssetUrl + "/images";

        switch(typeIcon) {
            case "tiktok":
                return assetFolder + "/tiktok-icon.png";
            case "youtube":
                return assetFolder + "/youtube-icon.png";
            case "instagram":
                return assetFolder + "/instagram-icon.png";
            default:
                return "";
        }
    }
}