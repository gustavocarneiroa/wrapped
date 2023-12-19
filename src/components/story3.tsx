import { Story } from "react-insta-stories/dist/interfaces";

export const Story3: Story = {
    url: "https://picsum.photos/1080/1920",
    seeMore: ({ close }) => (
        <div
            style={{
                maxWidth: "100%",
                height: "100%",
                padding: 40,
                background: "white",
            }}
        >
            <h2>Just checking the see more feature.</h2>
            <p style={{ textDecoration: "underline" }} onClick={close}>
                Go on, close this popup.
            </p>
        </div>
    ),
}