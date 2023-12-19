import { Story } from "react-insta-stories/dist/interfaces";

const contentStyle = {
    background: "#333",
    width: "100%",
    padding: 20,
    color: "white",
    height: "100%",
  };

const Story5Content = ({ isPaused }) => {
    return (
      <div style={{ ...contentStyle, background: "Aquamarine", color: "#333" }}>
        <h1>You get the control of the story.</h1>
        <p>
          Render your custom JSX by passing just a{" "}
          <code style={{ fontStyle: "italic" }}>content</code> property inside
          your story object.
        </p>
        <p>
          You get a <code style={{ fontStyle: "italic" }}>action</code> prop as an
          input to your content function, that can be used to play or pause the
          story.
        </p>
        <h1>{isPaused ? "Paused" : "Playing"}</h1>
        <h4>v2 is out 🎉</h4>
        <p>React Native version coming soon.</p>
      </div>
    );
  }
export const Story5: Story = {
    content: Story5Content
}