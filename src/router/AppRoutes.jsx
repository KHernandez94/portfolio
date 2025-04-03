import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, ContactPage, ProjectsPage, SkillsPage } from "../pages"
import { Navbar } from "../ui/components/Navbar"


export const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="about" element={<AboutPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="skills" element={<SkillsPage />} />
                    <Route path="contact" element={<ContactPage />} />

                    <Route path="*" element={<Navigate to="/about" />} />
                </Routes>
            </div>
        </>
    )
}
