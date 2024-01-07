//Example: https://covers.openlibrary.org/b/isbn/0385472579-S.jpg

export default function getCovers(key: string, value: string, size?: string) {
        if(size==undefined) {
            size = 'M';
        }

        return `https://covers.openlibrary.org/b/${key}/${value}-${size}.jpg`;
}