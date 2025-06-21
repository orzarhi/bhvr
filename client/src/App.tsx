import { useState } from 'react'
import beaver from './assets/beaver.svg'
import { Button } from './components/ui/button'
import { hcWithType } from 'server/dist/client'
import { StarsBackground } from './components/animate-ui/backgrounds/stars'

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000"

const client = hcWithType(SERVER_URL);

type ResponseType = Awaited<ReturnType<typeof client.hello.$get>>;

function App() {
  const [data, setData] = useState<Awaited<ReturnType<ResponseType["json"]>> | undefined>()

  async function sendRequest() {
    try {
      const res = await client.hello.$get()
      if (!res.ok) {
        console.log("Error fetching data")
        return
      }
      const data = await res.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />

  )
}

export default App