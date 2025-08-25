import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import Sidebar from "@/Components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
       <div className="middleContainer"> 
            <Sidebar />
            <main className="mainContent">
              {children}
            </main>
       </div>
        
       
      </body>
    </html>
  );
}
