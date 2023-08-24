import dynamic from "next/dynamic"

const Mapa = dynamic(() => import("../components/Mapa"), { ssr: false })

export default function Home() {
  return (
      <Mapa />
  )
}
