import logo from '../photos/duen.png'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  /* solid white header       blurry backdrop: bg-transparent backdrop-blur-lg
  <div className="w-11/12 bg-white fixed rounded-b-lg flex justify-center drop-shadow-md ">
     <ul className="h-full w-full flex justify-around items-center text-lg text-black">
  */
  return (
    <div className="w-full bg-slate-100 fixed z-10 flex justify-center drop-shadow-md">
      <ul className="h-full w-full flex justify-around items-center text-lg text-black font-bold">
        <Link href="/">
          <Image src={logo} alt="duen logo" height={45} className="py-2 transition duration-150 ease-out hover:ease-in" />
        </Link>
        
        <Link href="/about" className="transition duration-150 ease-out hover:ease-in hover:scale-110">About</Link>
        <Link href="/officers" className="transition duration-150 ease-out hover:ease-in hover:scale-110">Officers</Link>
        <Link href="/join" className="transition duration-150 ease-out hover:ease-in hover:scale-110">Join</Link>
        <Link href="/faq" className="transition duration-150 ease-out hover:ease-in hover:scale-110">FAQ</Link>
      </ul>
    </div>
  
  )
}
