export function removeDoubleSlashes(link: string): string {
    return link.replace(/\/\/+/g, "/");
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
        return removeDoubleSlashes(`${import.meta.env.BASE_URL}/${str}`);
    }
    return str;
}
