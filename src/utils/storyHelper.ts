import { Story } from "react-insta-stories/dist/interfaces";

export function createVideoStory(folder: string, file: string) : Story {
    return {
        url: `/wrapped/${folder}/${file}.mp4`,
        type: "video",
    }
}