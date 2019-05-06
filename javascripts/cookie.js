if (document.cookie.split(';').filter(function(item) {
    return item.trim().indexOf('acknowledge-cookie=') == 0
}).length) {
    hideCookieBanner();
}

function acknowledgeCookie() {
    const time = new Date();
    const expire = time.setFullYear(time.getFullYear() + 3);
    document.cookie = `acknowledge-cookie=1; max-age=${expire}`;
    hideCookieBanner();
}

function hideCookieBanner() {
    document.getElementById('cookie').style.display = 'none';
}