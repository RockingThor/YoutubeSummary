import Navbar from "@/components/Navbar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="">
        <Navbar />
      </div>
      <main className="mt-2">{children}</main>
    </div>
  );
};

export default MainLayout;
