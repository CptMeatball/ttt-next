import ThingLayout from "@/components/layouts/thingLayout"
import {NextPageWithLayout} from "@/pages/_app";
import {useContext, useEffect, useState} from "react";
import ThingContext from "@/contexts/thingContext";
import {useRouter} from "next/router";
import {motion} from "framer-motion"


const Story: NextPageWithLayout = () => {
    const router = useRouter();
    const query = router.query;
    const [directHit] = useState(Object.entries(query).length === 0)

    const {setFullscreen} = useContext(ThingContext)

    useEffect(() => {
        setFullscreen(true)
    }, [])

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalStyle
        }
    }, [])

    const markerStyle = {
        "position": "fixed",
        right: "20px",
        top: "20px",
        width: "350px",
        padding: "20px",
        backgroundColor: "#eee"
    }


    return (
        <>
            <motion.article style={markerStyle} animate={{x: 0}} initial={{x: directHit ? 0 : 500}}
                            transition={{duration: .5}}>
                <h1>This is story marker</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio doloribus eos
                    exercitationem hic impedit obcaecati officiis. Accusamus atque necessitatibus sequi. Deleniti
                    distinctio explicabo nesciunt. Dolores itaque molestiae nihil sequi.
                </p>
            </motion.article>
        </>
    )
}

Story.getLayout = function getLayout(page) {
    return (
        <ThingLayout>
            {page}
        </ThingLayout>
    )
}

export default Story
