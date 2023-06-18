import React from "react"
import ReactDOM from "react-dom/client"

import OrchiWebsite from "./pages/OrchiWebsite"

import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <OrchiWebsite />
  </React.StrictMode>
)

reportWebVitals()
