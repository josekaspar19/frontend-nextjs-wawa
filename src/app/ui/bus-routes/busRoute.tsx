import Link from "next/link";
import { BusRoute } from "./definition";

export default async function busRoute({ busRoutes }: { busRoutes: [] }) {
  return (
    <ul className="grid gap-4 grid-cols-2">
      {busRoutes.map((route: BusRoute) => (
        <Link href={`/bus-routes/${route.id}`} key={route.id}>
          <li className="bg-slate-100 mb-2 p-4 rounded-md flex shadow-lg">
            <img
              src="logo_wawa.svg"
              className="h-20 w-40 mr-5 mt-4"
            />
            <div>
              <h5 className="font-bold">
                {route.title} 
              </h5>
              <div className="flex flex-col">
              <p>
              Origen: {route.origin} 
              </p>
              <p>
              Destino: {route.destination} 
              </p>
              <p>
              Precio: {route.price}$ 
              </p>
              <p>
              Disponible: {route.active?"Si":"No"} 
              </p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
