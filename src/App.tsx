import { Story } from 'react-insta-stories/dist/interfaces';
import Stories from 'react-insta-stories';
import { MouseEventHandler, useEffect, useState } from 'react';
import { handleDownload, handleShare } from './utils/handleEvents';
import Coupon from './components/coupon';

type Sizes = {
  width?: number | string,
  height?: number | string
};

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const students = {
    "f752fd75-e9db-4694-8c8a-9cf4a0b02d7e": {
      name: "Gustavo",
      folder: "teste",
      coupon: "GUSTAVOC2024",
    },
    "0f6dde03-fc39-4df7-8a73-950f1ae83f2c": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c537": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c539": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c530": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c531": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c532": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c533": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c534": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c535": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c536": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c538": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c529": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    },
    "948deb8a-291d-4709-9fcb-0d811b85c528": {
      name: "Késsia",
      folder: "kessia",
      coupon: "KESSIALI2024",
    }
  };
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
  document.title = `${name} - TKL`
  const stories: Story[] = [
    {
      url: `/wrapped/common/1.mp4`,
      type: "video",
    },
    {
      url: `/wrapped/${folder}/2.mp4`,
      type: "video",
    },
    {
      url: `/wrapped/${folder}/3.mp4`,
      type: "video",
    },
    {
      url: `/wrapped/${folder}/4.mp4`,
      type: "video",
    },
    {
      url: `/wrapped/common/5.mp4`,
      type: "video",
    },
    {
      url: `/wrapped/${folder}/6.mp4`,
      type: "video",
      seeMoreCollapsed: ({ toggleMore }) => (
        <p
          onClick={() => toggleMore(true)}
          style={{
            color: 'white',
            textAlign: 'center',
          }}
        >
          Wanna share it? →
        </p>
      ),
      seeMore: ({ close }: { close: MouseEventHandler }) => (
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
          <img src={`/wrapped/${folder}/recap.png`} style={{
            width: "80%",
          }}></img>
          <div>
            <p style={{ textDecoration: "underline" }} onClick={() => handleDownload(`/wrapped/${folder}/recap.png`)}>
              Download
            </p>
            <p style={{ textDecoration: "underline" }} onClick={() => handleShare(`/wrapped/${folder}/recap.png`)}>
              Share
            </p>
            <p style={{ textDecoration: "underline" }} onClick={close}>
              Back
            </p>
          </div>
        </div>
      ),
    },
    {
      url: `/wrapped/common/7.mp4`,
      type: "video",
      seeMoreCollapsed: ({ toggleMore }) => (
        <p
          onClick={() => toggleMore(true)}
          style={{
            color: 'white',
            textAlign: 'center',
          }}
        >
          Check it out! →
        </p>
      ),
      seeMore: ({ close }: { close: MouseEventHandler }) => (
        <>
          <div className="container" style={{ backgroundColor: "#A7A4C7", display: "flex", flexDirection: "column" }}>
          <Coupon code={coupon} isMobile={!!sizes.width}></Coupon>
          <p style={{ textDecoration: "underline" }} onClick={close}>
            Back
          </p>
          </div>
        </>
      ),
    },
  ];
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
