import { useEffect } from "react"


const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title}-Baby Doll`;
    }, [title])
}

export default useSetTitle;