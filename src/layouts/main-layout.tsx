import { FC } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { ComponentChildrenProps } from "../types";

const MainLayout: FC<ComponentChildrenProps> = ({children}) => {
    return (
        <>
            <Header />
            <div className="container max-w-[1400px] mx-auto">
            {children}
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
