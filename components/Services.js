import ServiceCard from './include/ServiceCard';
import { MdPalette, MdOutlineLaptopChromebook, MdSchool } from "react-icons/md";

export default function Services() {
    return (
        <section>
            <div>
                <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I offer from a wide range of services, including UI/UX designing, software development and student tutoring.
                </p>
            </div>
            <div className="lg:flex gap-10">
                <ServiceCard
                    icon={<MdPalette className="mx-auto" />}
                    title="UI/UX Design"
                    description="Creating clean UI/UX designs suited for your needs following human interface design guidelines."
                    topicTitle="Design tools I use"
                    topics={['Photoshop', 'Figma', 'Sketchbook']}
                    href={"https://be.net/kevinjonathan3010"}
                />

                <ServiceCard
                    icon={<MdOutlineLaptopChromebook className="mx-auto" />}
                    title="Software Development"
                    description="Building softwares, ranging from website and mobile application using clean code and architecture."
                    topicTitle="List of software topics I build"
                    topics={['Web Development', 'Android App Development', 'iOS App Development']}
                    href={"https://github.com/KevinJonathan30"}
                />

                <ServiceCard
                    icon={<MdSchool className="mx-auto" />}
                    title="Student Tutoring"
                    description="Helping students achieve their academic goals by providing personalized tutoring services."
                    topicTitle="Topic I teach"
                    topics={['Mathematics', 'Physics', 'Programming']}
                    href={"mailto:kevinjonathan3010@gmail.com?subject=Tutoring Inquiry&body=Can you teach me.."}
                />
            </div>
        </section>
    );
}