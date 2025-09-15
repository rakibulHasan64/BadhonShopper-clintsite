
// import {ThemeProvider} from '../dashboard/ThemeContext'
import { SidebarProvider } from '../dashboard/SidebarContext'


const ContextProvider = ({ children }: { children: never }) => {
  return (
    <>
      <SidebarProvider>
        {/* <ThemeProvider> */}
         {children}
        {/* </ThemeProvider> */}
      </SidebarProvider>
    </>
  );
}

export default ContextProvider