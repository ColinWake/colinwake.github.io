/**
 * MarqueeTitle v4.0 | MIT License | git.io/vQZbs
 * Simplified by Colin Wakefield
 */
((separator, timeout) => {
    var title = (document.title) + " " + (separator || "-") + " ";
    setInterval(() => {
        title = title.substring(1) + title.charAt(0);
        document.title = title;
    }, timeout || 300);
})("|", 200);