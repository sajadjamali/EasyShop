export const splitWords = (text, numWords) => {
    const words = text.split(' ')
    let part = '';
    words.forEach((word, idx) => {
        if (idx < numWords) {
            part += ' ' + word
        }
    })
    return part.trim();
}