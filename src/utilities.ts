export function removeDoubleSlashes(link: string): string {
    return link.replace(/(https?:\/\/)|(\/{2,})/g, (match, p1, p2) => p1 || "/");
}

export function isUrl(str: string): boolean {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
}

export function formatPathOrURL(base_url: string, str: string): string {
    if (!isUrl(str)) {
        return removeDoubleSlashes(`${base_url}/${str}`);
    }
    return str;
}

export function truncateText(str: string, length: number = 250) {
    return str.replace(/[\r\n\t\f\v ]+/g, " ").substring(0, length) + "...";
}
