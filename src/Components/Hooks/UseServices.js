import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/RKZeebon/0653d6c165df22cfb7ff6703f97921e0/raw/3dad3a43bba7691110554e0fd1231b18ed577b28/Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices]
}

export default useServices;