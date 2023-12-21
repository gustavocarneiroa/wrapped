import { Story } from 'react-insta-stories/dist/interfaces';
import Stories from 'react-insta-stories';
import { useEffect, useState } from 'react';
import { createVideoStory } from './utils/storyHelper';
import { seeCoupon } from './components/seeCoupon';
import { customeSeeMore } from './components/customSeeMore';
import { seeShareImage } from './components/seeShareImage';
import { COMMON_FOLDER } from './utils/common';
import { students } from './utils/sudents';

type Sizes = {
  width?: number | string,
  height?: number | string
};

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('sid') as keyof typeof students | null;
  if (!id || !students[id]) {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <h1
            style={{ color: 'white' }}
          >Teacher Késsia Lima Wrapped 2023</h1>
        </div>
      </>
    )
  }
  const { name, coupon, folder } = students[id]
  document.title = `${name} - TKL`;

  const [sizes, setSizes] = useState<Sizes>({});
  useEffect(() => {
    const maxWidth = 915;
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const newSizes: Sizes = {
      width: undefined,
      height: undefined,
    };

    if (width < maxWidth) {
      Object.assign(newSizes, {
        width: "100vw",
        height: "100vh",
      })
    }

    setSizes(newSizes);
  }, []);

  const stories: Story[] = [
    createVideoStory(COMMON_FOLDER, "1"),
    createVideoStory(folder, "2"),
    createVideoStory(folder, "3"),
    createVideoStory(folder, "4"),
    createVideoStory(COMMON_FOLDER, "5"),
    {
      ...createVideoStory(folder, "6"),
      seeMoreCollapsed: customeSeeMore("Wanna share it?"),
      seeMore: seeShareImage(folder)
    },
    {
      ...createVideoStory(COMMON_FOLDER, "7"),
      seeMoreCollapsed: customeSeeMore("Check it out!"),
      seeMore: seeCoupon(coupon, !!sizes.width),
    },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stories
          stories={stories}
          defaultInterval={80000}
          width={sizes.width}
          height={sizes.height}
          keyboardNavigation={true}
          storyContainerStyles={{ borderRadius: 8, overflow: "hidden" }}
        />
      </div>
    </>
  )
}

export default App
