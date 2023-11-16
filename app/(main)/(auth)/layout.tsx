const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <main className="">{children}</main>
    </div>
  );
};

export default MainLayout;
