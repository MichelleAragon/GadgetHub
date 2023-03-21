import { Routes, Route, Navigate } from "react-router-dom";
import { GadgetHub } from "../pages/GadgetHub";
import { ConsolePage } from "../pages/ConsolePage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { MobilePage } from "../pages/MobilePage";
import { PcPage } from "../pages/PcPage";


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="Home" element={<GadgetHub/>} />
            <Route path="Console" element={<ConsolePage/>} />
            <Route path="Mobile" element={<MobilePage/>} />
            <Route path="PC" element={<PcPage/>} />
            <Route path="ContactUs" element={<ContactUsPage/>} />

            <Route path="/" element={<Navigate to ="Home"/>} />
        </Routes>
    </>
  )
}
