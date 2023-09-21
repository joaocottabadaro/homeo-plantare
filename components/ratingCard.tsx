// components/Navbar.js
import { cn } from '@/lib/utils';
import Image from 'next/image'




type CardProps = {
    title: string;
    feedback: string;
    subtitle: string;
    className?: string;
}

const RatingCard = ({ title, feedback, subtitle, className }: CardProps) => {
    return (

        <div className={cn(
            "flex  items-start justify-start w-[500px] shadow-md h-[300px] p-8 gap-2 ",
            className
        )} >


            <Image
                src={`/quote.svg`}
                alt={"quote"}

                width={20}
                height={20}
                priority
            />
            <div className='flex wrap flex-col'>
                <p className='font-normal text-base mb-1 leading-8'>{feedback}</p>
                <h2 className='text-xl font-bold mb-1'>{title}</h2>
                <p className=' text-sm font-light text-gray'>{subtitle}</p>
            </div>

        </div >

    );
};

export default RatingCard;
