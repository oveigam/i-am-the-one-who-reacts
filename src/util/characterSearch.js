const characterSearch = (search, characters) => {
    if (!characters || characters.length === 0) {
        return []
    }
    if (!search) {
        return [...characters]
    }

    const lowercaseSearch = search.toLowerCase()
    return characters.filter(({ name, nickname }) => (name.toLowerCase().includes(lowercaseSearch) || nickname.toLowerCase().includes(lowercaseSearch)))
}

export default characterSearch