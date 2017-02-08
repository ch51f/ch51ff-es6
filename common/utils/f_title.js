import browser from './f_browser';

const fixedTitle = function (title) {
    document.title = title;
    if(browser.versions.ios) {
        var iframe = document.createElement("iframe");
        iframe.src="favicon.ico";
        iframe.addEventListener("load", function() {
            setTimeout(function() {
                iframe.removeEventListener("load", function() {});
                iframe.parentNode.removeChild(iframe); 
            }, 0);
        });
        document.body.appendChild(iframe);
    }
}

export default fixedTitle;
