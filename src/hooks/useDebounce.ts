import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, delay = 500) => {
    const [debouncedSearch, setDebouncedSearch] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(value)
        }, delay);
        return () => clearTimeout(timer);
    }, [delay, value])

    return debouncedSearch;

}