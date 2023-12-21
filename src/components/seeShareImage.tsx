import { MouseEventHandler } from "react"
import { handleDownload, handleShare } from "../utils/handleEvents"

export const seeShareImage = (folder: string, ) => {
    const recapImageUrl = `/wrapped/${folder}/recap.png`;
    
    return ({ close }: { close: MouseEventHandler }) => (
        <div
            style={{
                maxWidth: "100%",
                height: "100%",
                padding: 20,
                background: "#262626",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: "white",
                fontWeight: "bolder"
            }}
        >
            <img src={recapImageUrl} style={{
                width: "80%",
            }}></img>
            <div>
                <p style={{ textDecoration: "underline" }} onClick={() => handleDownload(recapImageUrl)}>
                    Download
                </p>
                <p style={{ textDecoration: "underline" }} onClick={() => handleShare(recapImageUrl)}>
                    Share
                </p>
                <p style={{ textDecoration: "underline" }} onClick={close}>
                    Back
                </p>
            </div>
        </div>
    )
}