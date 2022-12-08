

export const getInfo = async ({ pageParam = 1 }) => {
    const res = await fetch(`https://kirianime.fly.dev/todo/${pageParam}`)
    const data = await res.json()
    return data.animes
}

