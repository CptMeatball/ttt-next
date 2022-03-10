import React from "react";

const MainLayout: React.FunctionComponent = ({children}) => {
    return (
        <>
            <header>
                This is head.
            </header>
            <main>
                {children}
            </main>
            <footer>
                This is footer.
            </footer>
        </>
    )
}

export default MainLayout