
import BenefitCard from './benefitCard';

const Beneficios = () => {




    return (



        <section id="beneficios" className="flex   max-sm:mt-[419px] flex-col w-full scroll-mt-28" >
            <h2 className="font-bold text-4xl md:text-6xl my-11 text-center lg:text-left">Conheça os Benefícios</h2>
            <div className="grid grid-cols-beneficios	my-6 w-full content-center	gap-x-44 gap-y-16 justify-items-center	">
                <BenefitCard title="Cultivo Natural e Sustentável" description="Promova um cultivo livre de agrotóxicos e produtos químicos nocivos ao meio ambiente e à saúde." logoName="beneficio1" />
                <BenefitCard title="Resistência a Pragas e Doenças" description="Fortaleça as plantas e melhore sua resistência natural a pragas, doenças e condições adversas." logoName="beneficio2" />
                <BenefitCard title="Aprendizado Contínuo" description="Mantenha-se atualizado com as últimas tendências e pesquisas na agricultura sustentável." logoName="beneficio3" />
                <BenefitCard title="Redução de Custos" description="Economize recursos ao minimizar a necessidade de insumos caros, como fertilizantes e pesticidas" logoName="beneficio4" />
                <BenefitCard title="Aumento da Produtividade" description="Potencialize o rendimento da colheita com plantas mais saudáveis e vigorosas.
" logoName="beneficio5" />
                <BenefitCard title="Soluções Personalizadas" description="Aproveite abordagens homeopáticas adaptadas às necessidades específicas de diferentes culturas e climas." logoName="beneficio6" />

            </div>
        </section>


    );
};


export default Beneficios;
