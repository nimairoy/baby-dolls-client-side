import { useEffect } from "react"


const useSetTitle = title => {
    useEffect(() => {
        document.title = `Baby Doll | ${title}`;
    }, [title])
}

export default useSetTitle;