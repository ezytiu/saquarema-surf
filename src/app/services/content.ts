const baseUrl = "https://raw.githubusercontent.com/cardapios"

interface Routes {
    menu: Menu
    settings: Settings
}

export const get = <Route extends keyof Routes>(id: string, route: Route) =>
    fetch(`${baseUrl}/${id}/master/content/${route}.json`).then((response) => response.json() as Promise<Routes[Route]>)

interface Item {
    name: string
    description: string
    price: number
}

interface Category {
    title: string
    items: Item[]
}

interface Menu {
    menu: Category[]
}

interface Settings {
    whatsapp: string
    delivery: string
    payment: string[]
    title: string
    description: string
    image: string
}

export const image = (id: string, fileWithExtension: string) =>
    `${baseUrl}/${id}/master/public/uploads/${fileWithExtension}`
