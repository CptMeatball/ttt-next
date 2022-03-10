import {NextPageWithLayout} from "@/pages/_app";
import ThingLayout from "@/components/layouts/thingLayout";
import {useContext, useEffect} from "react";
import ThingContext from "../../../contexts/thingContext";

const Thing: NextPageWithLayout = ({children}) => {
    const {setFullscreen} = useContext(ThingContext)

    useEffect(() => {
        setFullscreen(false)
    }, [])

    return (
        <section></section>
    )
}

Thing.getLayout = function getLayout(page) {
    return (
        <ThingLayout>
            {page}
        </ThingLayout>
    )
}
export default Thing
