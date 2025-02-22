
 import { AppSidebar } from "@/components/Sidebar/sidebar";
import "../../app/globals.css";
import AuthProvider from "../../Provider/AuthProvider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function RootLayout({ children }) {
  return (
    <div>
      <AuthProvider>
        <SidebarProvider>

          <div className="flex ">
            <AppSidebar />
            <main className="flex justify-center w-full">
              <SidebarTrigger />
              {children}</main>
          </div>
        </SidebarProvider>

      </AuthProvider>
    </div>
  );
}