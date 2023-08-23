import { get } from "@/app/services/content"

interface MenuProps { 
    id: string 
}

export async function Menu({ id }: MenuProps) {
    const data = await get(id, "menu")
  
    return <>
      {data.menu.map((item) => 
        <div key={item.title}>
          <h1>{item.title}</h1>
        </div>
      )}
    </>
}