export const handleDownload = (url: string) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'tkl-2023-recap.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};

export const handleShare = async (url: string) => {
    const blob = await fetch(url).then(r=>r.blob())
    const data = {
        files: [
          new File([blob], 'recap.png', {
            type: blob.type,
          }),
        ],
        title: 'TKL - Recap',
      };
      try {
        if (!(navigator.canShare(data))) {
          throw new Error("Can't share data.");
        }
        await navigator.share(data);
      } catch (err: any) {
        console.error(err.name, err.message);
      }
};