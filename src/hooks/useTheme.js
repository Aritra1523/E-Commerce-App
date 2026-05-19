import { useEffect, useState } from "react"

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return (
            localStorage.getItem("theme") || "dark"
        )
    })
    const toggleTheme = () => {
        setTheme((prev) => {
         return   prev === "dark" ? 'light' : "dark"
        })
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])
    return { theme, toggleTheme}
}
export default useTheme;