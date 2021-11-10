import React from "react"
import HomeLayout from "./HomeLayout"
import AuthLayout from "./AuthLayout"

const ContextLayout = React.createContext()
class Layout extends React.Component {
    render() {
        return (
            <ContextLayout.Provider
                value={{
                    HomeLayout,
                    AuthLayout
                }}
            >
                {this.props.children}
            </ContextLayout.Provider>
        )
    }
}

export { Layout, ContextLayout }