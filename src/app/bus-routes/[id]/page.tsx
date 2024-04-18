import { BusRoute } from "@/app/ui/bus-routes/definition";
import Link from "next/link";

async function getRoutes(id: string) {
  const res = await fetch(`${process.env.API_URL}/bus-routes/${id}`);
  const data = await res.json();
  return data;
}

export default async function RoutesDetails({ params }: { params: any }) {
  const route: BusRoute = await getRoutes(params.id);
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div>
        <h2 className="text-xl font-bold">Informacion de la ruta:</h2> 
        <p>{route.title}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-700">Ciudad Origen:</p>
            <span className="font-bold">{route.origin}</span>
          </div>

          <div>
            <p className="text-gray-700">Ciudad Destino:</p>
            <span className="font-bold">{route.destination}</span>
          </div>

          <div>
            <p className="text-gray-700">Fecha de salida:</p>
            <span className="font-bold">{route.departureDate}</span>
          </div>

          <div>
            <p className="text-gray-700">Hora de salida:</p>
            <span className="font-bold">{route.departureTime}</span>
          </div>

          <div>
            <p className="text-gray-700">Fecha de llegada:</p>
            <span className="font-bold">{route.arrivalDate}</span>
          </div>

          <div>
            <p className="text-gray-700">Hora de Llegada:</p>
            <span className="font-bold">{route.arrivalTime}</span>
          </div>

          <div>
            <p className="text-gray-700">Duration:</p>
            <span className="font-bold">{route.duration}</span>
          </div>

          <div>
            <p className="text-gray-700">Price:</p>
            <span className="font-bold text-purple-700">{route.price}$</span>
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-purple-700 text-white font-bold mr-2 py-2 px-4 rounded">
            Comprar Boleto
          </button>
          <Link href={"/bus-routes"}>
            <button className="bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Atras
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
