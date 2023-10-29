export const dynamic = 'force-dynamic';
export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`, {cache:"no-store"})
    const anime = await response.json()

    return anime
}

export const getNestedAnimeResponse= async (resource, objectProperty) => {
    const dynamic = 'force-dynamic'
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item.entry)
}


