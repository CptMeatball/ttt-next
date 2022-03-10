import type {ReactElement} from 'react'
import MainLayout from "@/components/layouts/mainLayout";
import {NextPageWithLayout} from "@/pages/_app";
import Link from "next/link"

const Page: NextPageWithLayout = () => {
    return (
        <>
            <h1>This is index</h1>
            <ul>
                <li>
                    <Link href="/things/bSXCO">
                        Thing #1
                    </Link>
                </li>
            </ul>
        </>

    )
}

Page.getLayout = (page: ReactElement) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Page;