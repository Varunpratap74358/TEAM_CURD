import { useEffect, useState } from "react"
import FORM from "./pages/FORM"
import InformationPage from "./pages/InformationPage"
import axios from "axios"


const App = () => {
  const [info,setInfo] = useState<any>([])
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const {data} = await axios.get('http://localhost:4000/api/getall')
        // console.log(data)
        setInfo(data.getdata)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[FORM,info])

  return (
    <div>
      <FORM />
      <InformationPage information={info} />
    </div>
  )
}

export default App
