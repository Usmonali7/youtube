import AppRouters from "./AppRouters"
import AuthRouter from "./AuthRouters"

const App = () => {
    const isLoggin = true
    return isLoggin ? <AppRouters/> : <AuthRouter/>
}

export default App;