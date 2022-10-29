import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Candidates } from "./pages/Candidates";
import { CompanyFormPage } from "./pages/CompanyFormPage";
import { ThankYou } from "./components/ThankYou";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/candidate",
      element: <Candidates />,
    },
    {
      path: "/company",
      element: <CompanyFormPage />,
    },
    {
      path: '/thank-you',
      element: <ThankYou/>
    }
  ]);

  return createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

  // return (
  //   <div className="App">
  //     {/* <Home/> */}
  //     {/* <Candidates /> */}
  //     {/* <ThankYou/> */}
  //     <CompanyFormPage />
  //   </div>
  // );
}

export default App;
