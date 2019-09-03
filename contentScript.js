document.querySelectorAll('iframe').forEach(iframe => {
    if (iframe.src.match('dailymotion.com/embed/video/')) {
        const src = iframe.src.replace(/\?.*/, '') + '?queue-enable=false';
        iframe.src = 'https://www.gamekult.com';
        iframe.src = src;
    }
});
