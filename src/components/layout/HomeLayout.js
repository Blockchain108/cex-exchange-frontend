import React from "react";
import Header from "./home/Header";
import useStyles from "../../assets/constants/styles";

const HomeLayout = ({ children }) => {
    const styles = useStyles()
    return (
        <div className={styles.AppContainer}>
            <Header />
            {children}
        </div>
    )
}

export default HomeLayout;