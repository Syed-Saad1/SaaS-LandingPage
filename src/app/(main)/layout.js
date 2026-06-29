import MainNavbar from "@/containers/MainNavbar";
import Footer from "@/containers/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
