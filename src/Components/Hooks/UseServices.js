import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/RKZeebon/0653d6c165df22cfb7ff6703f97921e0/raw/f18f48d38bce91e1827dbaea10d34a6ead084472/Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices]
}

export default useServices;