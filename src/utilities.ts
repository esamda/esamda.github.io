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

// change the name of this func pls
export function formatPathOrUrl(base_urL: string, str: string): string {
    if (!isUrl(str)) {
        return removeDoubleSlashes(`${base_urL}/${str}`);
    }
    return str;
}
