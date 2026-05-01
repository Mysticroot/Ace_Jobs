import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import Navbar from "./common/Navbar.jsx"
import Footer from "./common/Footer.jsx"

function App() {

  return (
    <AuthProvider>
      <InterviewProvider>
        <Navbar />
        <main style={{ minHeight: '70vh' }}>
          <RouterProvider router={router} />
        </main>
        <Footer />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App
