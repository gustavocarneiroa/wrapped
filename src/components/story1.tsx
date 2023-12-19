import { Story } from "react-insta-stories/dist/interfaces";
import "../stories.css";

function Story1Content() {
    return (
      <div className="rotating-background">
        <h1> Teste </h1>
      </div>
    );
}

export const Story1: Story = {
    content: Story1Content
}