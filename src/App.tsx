import { Story } from 'react-insta-stories/dist/interfaces';
import Stories from 'react-insta-stories';
import { MouseEventHandler, useEffect, useState } from 'react';
import { handleDownload, handleShare } from './utils/handleEvents';

type Sizes = {
  width?: number | string,
  height?: number | string
};

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const students = {
    teste: "Gustavo"
  };
  const id = searchParams.get('sid') as keyof typeof students | null;
  if (!id) {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <h1
            style={{ color: 'white', fontFamily: 'sans-serif' }}
          >Teacher Késsia Lima Wrapped 2023</h1>
        </div>
      </>
    )
  }
  document.title = `${students[id]} - TKL`
  const stories: Story[] = [
    {
      url: `/${id}/1.mp4`,
      type: "video",
    },
    {
      url: `/${id}/2.mp4`,
      type: "video",
    },
    {
      url: `/${id}/3.mp4`,
      type: "video",
    },
    {
      url: `/${id}/4.mp4`,
      type: "video",
    },
    {
      url: `/${id}/5.mp4`,
      type: "video",
    },
    {
      url: `/${id}/6.mp4`,
      type: "video",
      seeMoreCollapsed: ({ toggleMore }) => (
        <p 
          onClick={() => toggleMore(true)}
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'sans-serif'
          }}  
        >
          Baixar imagem →
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
            fontFamily: "sans-serif",
            color: "white",
            fontWeight: "bolder"
          }}
        >
          <img src={`/${id}/recap.png`} style={{
            width: "80%",
          }}></img>
          <div>
          <p style={{ textDecoration: "underline" }} onClick={() => handleDownload(`/${id}/recap.png`)}>
            Download
          </p>
          <p style={{ textDecoration: "underline" }} onClick={()=> handleShare(`/${id}/recap.png`)}>
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
      url: `/${id}/7.mp4`,
      type: "video",
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'hidden', height: '100vh' }}>
        <Stories
          stories={stories}
          defaultInterval={80000}
          width={sizes.width}
          height={sizes.height}
          keyboardNavigation={true}
          loop={true}
          storyContainerStyles={{ borderRadius: 8, overflow: "hidden" }}
        />
      </div>
    </>
  )
}

export default App
