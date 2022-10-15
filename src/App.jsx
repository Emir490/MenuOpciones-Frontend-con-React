import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { OptionsProvider } from "./context/OptionsProvider";
import AuthLayout from "./layout/AuthLayout";
import ProtectedRoute from "./layout/ProtectedRoute";
import Count from "./pages/Count";
import Login from "./pages/Login";
import Loop from "./pages/Loop";
import Menu from "./pages/Menu";
import Password from "./pages/Password";
import Rectangle from "./pages/Rectangle";
import Square from "./pages/Square";
import Triangle from "./pages/Triangle";
import Words from "./pages/Words";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OptionsProvider>
          <Routes>
            <Route path="/" element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
            </Route>
            <Route path="/options" element={<ProtectedRoute/>}>
              <Route index element={<Menu/>}/>
              <Route path="1" element={<Square/>}/>
              <Route path="2" element={<Rectangle/>}/>
              <Route path="3" element={<Triangle/>}/>
              <Route path="4" element={<Count/>}/>
              <Route path="5" element={<Words/>}/>
              <Route path="6" element={<Password/>}/>
              <Route path="7" element={<Loop/>}/>
            </Route>
          </Routes>
        </OptionsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App