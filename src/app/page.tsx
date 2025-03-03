import AboutMe from '@/components/about/about-me';
import Education from '@/components/about/education';
import Experiences from '@/components/about/experiences';
import Skills from '@/components/about/skills';
import Main from '@/components/main';


export default async function Home() {
    return (
        <div className='grow'>
            <div className='flex flex-col items-center h-full'>
                <Main name={user.name} title={user.title} /> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-bounce w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
                <div className='flex bg-base-200 w-full justify-center items-center py-4'>
                    <div className='flex flex-col w-2/5 justify-center space-y-10' id='sobre'>
                        <AboutMe about={user.aboutMe}/>
                        <Skills skills={user.skills}/>
                        <Experiences/>
                        <Education educations={user.educations}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const user = {
    name: 'Henrique Barucco',
    title: 'Desenvolvedor Fullstack',
    aboutMe: 'Sou um Desenvolvedor Full Stack apaixonado por tecnologia com uma habilidade comprovada em trabalhar em equipe, resolução de problemas e comunicação eficaz. Sempre buscando oportunidades para aprimorar minhas habilidades e oferecer soluções inovadoras para atender às expectativas dos clientes. Com uma mentalidade de crescimento constante, eu estou sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos e habilidades.',
    skills: [
        {
            name: 'Java',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        },
        {
            name: 'Javascript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'
        },
        {
            name: 'Typescript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg'
        },
        {
            name: 'Golang',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg'
        },
        {
            name: 'Python',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
            name: 'Spring',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
        },
        {
            name: 'Nest',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg'
        },
        {
            name: 'Next JS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
        {
            name: 'Socket IO',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg'
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg'
        },
        {
            name: 'Kubernetes',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
        },
        {
            name: 'Azure',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
        },
        {
            name: 'Google Cloud',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
        },
        {
            name: 'Jenkins',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
        }
    ],
    educations: [
        {
            title: 'Ciências da Computação',
            school: 'Estácio de Sá',
            description: 'Estudante do 4º semestre de Ciências da Computação na Estácio de Sá, apaixonado por tecnologia e focado em programação, algoritmos e desenvolvimento de software. Interessado em inteligência artificial, segurança da informação e desenvolvimento web. Participante ativo de projetos acadêmicos, Hackathons e competições de programação.',
            startDate: 'Fevereiro 2022',
            endDate: 'Cursando 5º Semestre'
        }
    ]
};