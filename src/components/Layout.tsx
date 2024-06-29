const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col gap-28 md:gap-12 md:my-20 my-4 mb-20">
      {children}
    </div>
  );
};

export default Layout;
