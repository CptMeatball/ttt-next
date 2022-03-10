import dynamic from 'next/dynamic'
import React from "react";
import {motion} from 'framer-motion'

type MicrioProps = {
    micrioId: string,
    fullscreen: boolean,
    area: string | undefined
}

const Micrio: React.FunctionComponent<MicrioProps> = ({micrioId, fullscreen, area}) => {
    const style = {
        height: "inherit",
        width: "100%",
    }

    const variants = {
        fullscreen: { height: "100vh" },
        default: { height: "80vh" },
    }

    return (
            <>
            <motion.div
                animate={fullscreen ? variants.fullscreen : variants.default}
                initial={fullscreen ? variants.fullscreen : variants.default}>
                <micr-io id={micrioId}
                         controls="false"
                         logo="false"
                         minimap="false"
                         toolbar="false"
                         inittype="cover"
                         area={area}
                         style={style}/>
            </motion.div>
            </>

    )
}

export default dynamic(() => Promise.resolve(Micrio), {
    ssr: false
});