import { NavigationMenuBar } from "@/components/Navbar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className=" flex mx-auto mt-4 justify-center items-center ">
        <NavigationMenuBar />
      </div>
      <main className="mt-2">{children}</main>
    </div>
  );
};

export default MainLayout;
