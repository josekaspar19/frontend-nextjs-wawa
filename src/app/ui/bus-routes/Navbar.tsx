import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-100 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black">
      <Link href={"/"}>
        <img className="max-h-20" src={"https://ticketplate-backend-prod.s3.amazonaws.com/dashboard-configs/fe4acc7b-78ab-46a4-b393-455f4d10eab8/logos/Logos_1200x300_positivo_1.png"} />
      </Link>

      <ul>
        <li>
          <Link href={"/bus-routes"} className="font-blod text-purple-700 text-xl">
            Rutas
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
