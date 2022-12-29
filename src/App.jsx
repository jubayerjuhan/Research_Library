import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Userpage from "./pages/Userpage/Userpage.jsx";
import Register from "./pages/Register/Register.jsx";
import UserAuthChecker from "./components/AuthChecker/UserAuthChecker.jsx";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserAuthChecker>
          <Homepage />
        </UserAuthChecker>
      ),
      errorElement: <p>404 Not Found</p>,
    },
    {
      path: "/register",
      element: <Register register />,
    },
    {
      path: "/login",
      element: <Register />,
    },
    { path: "/profile", element: <Userpage /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
