"use client";
import { motion } from "framer-motion";

export default function Experiences() {
    return (
        <div className='sm:flex flex-row'>
            <motion.div 
              className='sm:w-1/4 pr-4 mb-5 sm:mb-0'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 0.5, delay: 1}}
              variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0}
              }}
            >
                <p className='text-1xl font-bold text-center sm:text-end'>EXPERIÊNCIAS</p>
            </motion.div>
            <motion.div 
              className='flex-1 space-y-4'
              initial="hidden"
              whileInView="visible"
              transition={{ once: true, amount: 0.5, delay: 1}}
              variants={{
                hidden: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0}
              }}
            >
                <div className='flex flex-col'>
                    <div className='sm:flex flex-row w-full mb-5'>
                        <p className='font-bold text-center sm:text-start'>GVD Soluções Inteligentes</p>
                        <p className='grow text-center sm:text-end'>Agosto 2022 - Atual</p>
                    </div>
                    <div>
                        <p className='text-start'>Desenvolvedor Backend</p>
                        <ul className="list-disc list-inside text-xs mt-2">
                            <li className="mb-2">Desenvolvimento de APIs em Java com o framework Spring (Spring Boot, Spring Security e Spring Cloud).</li>
                            <li className="mb-2">Integração contínua e entrega contínua (CI/CD) com ferramentas como GitLab.</li>
                            <li className="mb-2">Utilização de Docker para criação de ambientes de desenvolvimento e implantação.</li>
                            <li className="mb-2">Desenvolvimento de aplicações em Node.js.</li>
                            <li className="mb-2">Criação de sistemas de conexão com o WhatsApp para disparo de mensagens.</li>
                            <li className="mb-2">Trabalho em equipes multidisciplinares.</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='sm:flex flex-row w-full mb-3 sm:mb-0'>
                        <p className='font-bold text-center sm:text-start'>Instituto Espirita Paulo de Tarso</p>
                        <p className='grow text-center sm:text-end'>Outubro 2022 - Atual</p>
                    </div>
                    <div>
                        <p className='text-start'>Iniciação Científica - Fullstack</p>
                        <ul className="list-disc list-inside text-xs mt-2">
                            <li className="mb-2">Desenvolvimento de plataforma para gerenciamento de Aulas.</li>
                            <li className="mb-2">API desenvolvida com o framework Spring.</li>
                            <li className="mb-2">Frontend desenvolvido com o framework Next JS (React).</li>
                            <li className="mb-2">Ambientes de desenvolvimento e produção utilizando Docker.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}