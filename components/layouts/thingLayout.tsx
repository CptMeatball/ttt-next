import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Micrio from "@/components/micrio";
import Script from "next/script";
import ThingContext from "contexts/thingContext";
import Link from "next/link";

const ThingLayout: React.FunctionComponent = ({children}) => {
    const router = useRouter()
    const {slug, id} = router.query

    const [fullscreen, setFullscreen] = useState(false)
    const [showBack, setShowBack] = useState(!!id);

    useEffect(() => {
        if(id) {
            setShowBack(true)
        }else {
            setShowBack(false)
        }
    }, [id])

    const backStyle = {
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 10,
        backgroundColor: "white"
    }
    return (
        <>
            <ThingContext.Provider value={{fullscreen, setFullscreen}}>
                <main>

                    <Script src="https://b.micr.io/micrio-4.0.min.js" strategy="beforeInteractive"/>

                    <div>
                        <Micrio micrioId={slug as string} fullscreen={fullscreen} area={id ? "0,0,800,800" : undefined}/>
                        {showBack &&
                            <>
                                <div style={backStyle}>
                                    <Link href={`/things/${slug}`}>Back</Link>
                                </div>
                            </>

                        }
                    </div>

                    <h1>Thing title</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur commodi distinctio, dolor explicabo facere facilis illo minus nam odio odit pariatur porro quisquam ratione saepe sapiente ut voluptatem voluptatum?
                    </p>

                    <ul>
                        <li>
                            <Link href={`/things/${slug}/stories/1`}>
                                Go to story
                            </Link>
                        </li>
                    </ul>

                    {children}
                </main>

                <footer>
                    This is thing footer.
                </footer>
            </ThingContext.Provider>

        </>
    )
}

export default ThingLayout