export function removeDoubleSlashes(link: string): string {
    return link.replace(/(https?:\/\/)|(\/{2,})/g, (match, p1, p2) => p1 || "/");
}

export function isURL(str: string): boolean {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
}

export function formatPathOrURL(base_url: string, str: string): string {
    if (!isURL(str)) {
        return removeDoubleSlashes(`${base_url}/${str}`);
    }
    return str;
}

export function truncateText(str: string, length: number = 250) {
    return str.replace(/[\r\n\t\f\v ]+/g, " ").substring(0, length) + "...";
}

/** Function to prepend base URL to image paths */
export function prependBaseUrl(markdown: string, baseUrl: string): string {
    return markdown.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, url) => {
        if (!url.startsWith("http") && !url.startsWith("/")) {
            url = `/${url}`;
        }

        if (!url.startsWith("http") && !url.startsWith(baseUrl)) {
            url = baseUrl + url;
        }
        return `![${altText}](${url})`;
    });
}
