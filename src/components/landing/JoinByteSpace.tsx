import Image from 'next/image'
import Link from 'next/link'

export default function JoinByteSpace() {
    return (
        <section className='w-full relative'>
            {/* Background image section */}

            {/* Left */}
            <Image
                src="/images/cones/cone-top-lime-twisted.svg"
                alt='cone-top-lime-twisted'
                width={250}
                height={250}
                className='absolute top-0 left-0'
            />
            <Image
                src="/images/cones/cone-white-piramid.svg"
                alt='cone-white-piramid'
                width={124}
                height={124}
                className='absolute bottom-16 left-0'
            />
            <Image
                src="/images/cones/cone-ellipse.svg"
                alt='cone-ellipse'
                width={300}
                height={300}
                className='absolute bottom-0 left-5'
            />
            <Image
                src="/images/cones/cone-white-twisted.svg"
                alt='cone-white-twisted'
                width={180}
                height={180}
                className='absolute top-0 left-[13%]'
            />

            {/* Right */}
            <Image
                src="/images/cones/cone-white-tank.svg"
                alt='cone-white-tank'
                width={200}
                height={200}
                className='absolute top-1.5 right-0'
            />
            <Image
                src="/images/cones/cone-bottom-lime-twisted.svg"
                alt='cone-bottom-lime-twisted'
                width={300}
                height={300}
                className='absolute bottom-0 right-1.5'
            />
            <Image
                src="/images/cones/cone-lime-piramid.svg"
                alt='cone-lime-piramid'
                width={170}
                height={170}
                className='absolute top-1 right-[12.5%]'
            />

            {/* Content section */}
            <div className='mx-auto w-full max-w-350 px-5 sm:px-8 lg:px-28'>
                <div className='flex flex-col items-center justify-center lg:gap-y-10 lg:py-20'>
                    <h1 className='text-[40px] text-white font-semibold text-center leading-tight'>Unlock Your Potential as a <br /> Creator with ByteSpace</h1>
                    <p className='text-sm font-extralight leading-6.5 tracking-wide text-center text-gray-300 max-w-241'>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
                    <Link href="" className='bg-[#D4FB20] px-4.5 py-2 rounded-3xl'>Join as Creator</Link>
                </div>
            </div>
        </section>
    )
}
