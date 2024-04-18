import BusRoute from "@/app/ui/bus-routes/busRoute";

async function fetchBusRoutes() {
  const res = await fetch("http://localhost:3001/api/bus-routes");
  console.log(res);
  const data = await res.json();
  return data;
}

export default async function BusRoutesPage() {
  const busRoutes = await fetchBusRoutes();
  return (
    <div>
      <div className="container mx-auto h-auto flex flex-col justify-center items-center">
      <h1 className="text-center text-white text-5xl mb-6 font-bold">Próximos eventos</h1>
      <BusRoute busRoutes={busRoutes}/>
      </div>
    </div>
  );
}