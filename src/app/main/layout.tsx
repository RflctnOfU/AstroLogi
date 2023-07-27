export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="rounded-2xl flex h-full lg:w-full lg:m-2 border border-white">
      <aside className="h-auto lg:w-[18.3%] border border-white rounded-2xl m-2 bg-gray-400 bg-opacity-40"></aside>
      {children}
    </main>
  );
}
