import { Suspense } from "react";
import { WithSeeMore } from "react-insta-stories";

export const Story2 = {
    content: ({ action, story }) => {
        return (
            <Suspense>
                <WithSeeMore story={story} action={action}>
                    <div style={{ background: "snow", padding: 20, height: "100%" }}>
                        <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
                        <h1 style={{ marginTop: 5 }}>
                            We have our good old image and video stories, just the same.
                        </h1>
                    </div>
                </WithSeeMore>
            </Suspense>
        );
    },
    seeMoreCollapsed: ({ toggleMore }) => (
        <p onClick={() => toggleMore(true)}>
            A custom See More message →
        </p>
    ),
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
    duration: 5000,
}
