// components/Navbar.js
import Image from 'next/image'




type CardProps = {
    title: string;
    description: string;
    logoName: string
}

const BenefitCard = ({ title, description, logoName }: CardProps) => {
    return (
        <div className="h-[200px] flex flex-col items-center justify-between  text-center gap-2">
            <div className=' w-24 h-24 p-3 bg-tertiary rounded-circle flex align-center justify-center'>
                <Image
                    src={`/${logoName}.svg`}
                    alt={logoName}

                    width={58}
                    height={58}
                    priority
                />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className=' text-xs font-light'>{description}</p>
        </div>
    );
};

export default BenefitCard;
