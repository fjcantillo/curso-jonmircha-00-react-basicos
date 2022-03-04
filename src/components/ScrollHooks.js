import React, { useState, useEffect } from "react"

export default function ScrollHooks (props) {
    const [scrollY, setScrollY] = useState(0)
    const [name, setName] = useState("Francisco")

    useEffect(() => {
        //console.log("Moviendo el Scroll")

        const detectarScroll = () => setScrollY(window.pageYOffset)

        window.addEventListener("scroll", detectarScroll)

        return () => {
            window.removeEventListener("scroll", detectarScroll)
        }
    }, [scrollY])

    useEffect(() => {
        //console.log("Fase de Montaje")
    }, [])

    useEffect(() => {
        //console.log("Fase de Actualización")
    })

    useEffect(() => {
        return () => {
            //console.log("Fase de Desmontaje")
        }
    })

    return(
        <div>
            <h2>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>Sroll Y del Navegador {scrollY}px</p>
        </div>
    )
}
