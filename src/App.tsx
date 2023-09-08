import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { publicRoutes } from "./Routes"
import DefaultLayout from "@/components/Layout/DefaultLayout"
import { Fragment } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LayoutType = any
function App() {
  return (
    <Router>
      <div >
        <Routes>
          {
            publicRoutes.map((route, index) => {
              let Layout: LayoutType = DefaultLayout;
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }

              const Page = route.component
              return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            })
          }
        </Routes>
      </div>
    </Router>
  )
}

export default App
