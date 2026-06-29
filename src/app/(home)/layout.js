import Navigation from "@/containers/home/Navigation";

export default function HomeLayout({ children }) {
  return (
    <div className="relative">
      <Navigation />
      {children}
    </div>
  );
}
