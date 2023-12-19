import { Story } from 'react-insta-stories/dist/interfaces';
import Stories from 'react-insta-stories';
import { useEffect, useState } from 'react';
import { Story1 } from './components/story1';
import { Story5 } from './components/story5';
import { Story2 } from './components/story2';
import { Story3 } from './components/story3';
type Sizes = { 
  width?: number | string, 
  height?: number | string 
}; 

function App() {
  const stories: Story[] = [
    Story1,
    Story2,
    Story3,
    {
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      type: "video",
    },
    Story5,
    {
      url: "https://plus.unsplash.com/premium_photo-1676231417481-5eae894e7f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1676321626679-2513969695d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1676359912443-1bf438548584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1676316698468-a907099ad5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      preloadResource: false,
    },
    {
      url: "https://images.unsplash.com/photo-1676310483825-daa08914445e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
      preloadResource: false,
    },
    {
      url: "https://images.unsplash.com/photo-1676321685222-0b527e61d5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      preloadResource: false,
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

    if ( width < maxWidth ) {
      Object.assign(newSizes,  {
        width: "100vw",
        height: "100vh",
      })
    } 

    setSizes(newSizes);
  }, []);
  
  return (
    <>
    <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'hidden', height: '100vh' }}>
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
