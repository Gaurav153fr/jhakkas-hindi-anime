interface params{
  id:number,
  slug:string,
  ep:number,
}
export default function Home({params}:{params:params}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      l
   {params.ep}
   hello
    </main>
  );
}
