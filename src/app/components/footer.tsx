import Image from 'next/image'
import logo from '../photos/duen.png'

export default function Footer() {
    return (
        <div className="min-h-full w-full bg-slate-200 ">
            <div className="flex flex-col items-center justify-center text-base py-8">
                <p className="font-bold">Any questions not listed in our FAQ? Send us an email at duenatdavis@gmail.com</p>
                <div className="text-lg flex justify-center items-center">
                    <p className="font-bold px-5 py-7">Follow US</p>
                    <div className="px-5 text-sm">
                        <p>Instagram</p>
                        <p>Discord</p>
                    </div>
                </div>
                <div className="text-base flex flex-row items-center">
                    <p>💜 Delivered to you by</p>
                    <Image src={logo} alt="duen logo" height={35} className="px-1" />
                    <p>💛</p>
                </div>
            </div>

        </div>
    )
}