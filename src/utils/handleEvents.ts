export const handleDownload = (url: string) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'tkl-2023-recap.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};

export const handleShare = async (url: string) => {
    try {
        if (!navigator.share) {
            alert('A funcionalidade de compartilhamento não é suportada neste navegador.');
        }
        const shareData = {
            title: 'Título do Compartilhamento',
            text: 'Descrição do Compartilhamento',
            url: url,
        };

        await navigator.share(shareData);
    } catch (error: any) {
        console.error('Erro ao compartilhar:', error.message);
    }
};