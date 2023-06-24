import { useContext } from "react"
import { TechProvider } from "./providers/TechContext"
import { UserContext, UserProvider } from "./providers/UserContext"
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyled } from "./styles/globalStyles"
import LoadingPage from "./components/LoadingPage"

function App() {

  const { loading } = useContext(UserContext);

  return (
    <>
    <GlobalStyled />
    <UserProvider>
      <TechProvider>
        {loading ? <LoadingPage/> : <RoutesMain />}
      </TechProvider>
    </UserProvider>
    </>
  )
}

export default App
