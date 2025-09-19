
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/style/index.css'
import '@/style/reset.css'
import { RouterProvider } from "react-router-dom";
import router from '@/routers/router'
import "@/i18n/index";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
)
