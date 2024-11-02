export const createRowData = (name, symbol, meaning, example, explanation, comment) => {
    return { name, symbol, meaning, example, explanation, comment};
}

export const copyContent = (content) => {
    navigator.clipboard.writeText(content)
}