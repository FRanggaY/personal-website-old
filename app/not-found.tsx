import Link from 'next/link'
import Image from 'next/image';

export default function NotFound() {
  return <div className='flex h-screen items-center justify-center'>
    <div className='flex flex-wrap justify-center gap-2'>
      <Image
        priority
        src="/assets/image/search.svg"
        height={50}
        width={50}
        style={{ width: '50%', height: 'auto' }} 
        alt="Follow us on Twitter"
      />
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-bold'>404</h1>
        <p className='text-2xl'>Sorry, the page not found</p>
        <Link href="/" className="border-2 border-blue-400 text-blue-400 rounded-md py-2 pl-2 pr-2">Go Back Home</Link>
      </div>
    </div>
  </div>
}