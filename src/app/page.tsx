import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-white text-3xl font-bold mt-20'>¡Bievenidos a la Wawa viaja con nosotros!</h1>
    <Link className=" bg-white text-purple-700 font-bold mt-4 py-2 px-4 rounded" href={'/bus-routes'}>Ver Rutas</Link>
    </div>
  );
}
