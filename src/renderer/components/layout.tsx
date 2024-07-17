import { Box, CssBaseline } from "@mui/material";
import clsx from "clsx";
import { ReactNode } from "react";
import Sidebar from "./sidebar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return(
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box sx={{width:'100%', boxShadow: '0px 4px 8px rgb(255, 255, 255)'}}>
          {children}
      </Box>
    </Box>
  )
}
