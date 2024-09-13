export const saveOnLocalStorage = (key: string, data: any, timestamp: number) => {
    localStorage.setItem(key, JSON.stringify({
        data,
        timestamp
    }));
}

export const getFromLocalStorage = (key: string, actualTimestamp: number): any => {
    const item = localStorage.getItem(key);

    if (!item) return null;

    const { data, timestamp } = JSON.parse(item);

    if (actualTimestamp - timestamp > 1000 * 60 * 60 * 24) {
        localStorage.removeItem(key);
        return null;
    }

    return data;
}