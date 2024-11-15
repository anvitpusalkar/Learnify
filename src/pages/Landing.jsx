import Navbar from '../components/Navbar'
import { BookOpen, Clock, Award, Zap, ChevronRight, } from 'lucide-react'
import { BsCalendar4Week } from "react-icons/bs";
import JourneyStep from '@/components/JourneyStep';
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { FeaturesSection } from '@/components/Features';
import { Testimonials } from '@/components/Testimonial';
import { CourseOfTheWeek } from '@/components/Course-of-the-week';
import{Hero} from '@/components/Hero';
const Landing = () => {

    return (
        <div className="min-h-screen w-full bg-background text-foreground">
            <Navbar />
            <main className="border-2 border-border min-h-screen w-screen  items-center justify-center pt-20 ">
                <StarsBackground starDensity={0.00025} />
                <ShootingStars starColor="#000000" trailColor="#FFFFFF" starHeight={4} starWidth={15} minDelay={1000} maxDelay={3000} />
                <section id='hero' className=' mx-auto w-full max-w-4xl px-4 my-16 md:px-6 lg:px-8  justify-center
                motion-translate-x-in-[0%] motion-translate-y-in-[10%]'>
                    <Hero />
                </section>

                <section id='how-it-works' className="py-12 bg- text-secondary ">
                    <div className="container mx-auto px-4">
                        <h3 className='text-3xl text-foreground font-semibold text-center mb-12'>How Coursify <u>Works</u> </h3>
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                            <JourneyStep icon={<BookOpen />} title="Choose" description="Select your topic of interest" />
                            <ChevronRight className="text-foreground hidden md:block" />
                            <JourneyStep icon={<Zap />} title="Generate" description="AI creates your personalized course" />
                            <ChevronRight className="text-foreground hidden md:block" />
                            <JourneyStep icon={<Award />} title="Learn" description="Start your learning journey" />
                        </div>
                    </div>

                </section>

                <section id="features" className="py-12">
                    <div className='container mx-auto px-4 '>
                        <h3 className='text-3xl text-foreground font-semibold text-center mb-12'>Features</h3>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto ">
                            <FeaturesSection icon={<Clock />} title="Quick Delivery" description="Get your course in minutes" index={0} />
                            <FeaturesSection icon={<BookOpen />} title="Customizable" description="Tailor your course to your needs" index={1} />
                            <FeaturesSection icon={<Zap />} title="AI-Powered" description="AI generates personalized courses" index={2} />
                            <FeaturesSection icon={<Award />} title="Learn Anywhere" description="Access your course from anywhere" index={3} />
                        </div>
                    </div>
                </section>

                <section id="testimonials" className='py-12'>
                    <div className='container mx-auto px-4'>
                        <h3 className='text-3xl font-semibold text-foreground text-center mb-12'>What Our Users Say</h3>
                        <div>
                            <Testimonials className="text-foreground" />
                        </div>
                    </div>
                </section>

                <section id="course-of-the-day" className='py-12'>
                    <div className='container mx-auto px-4'>
                        <div id="heading" className='flex flex-row justify-center gap-2'>
                            <h3 className='flex text-3xl font-semibold text-foreground text-center mb-12'>Course of the Week </h3>
                            <BsCalendar4Week size={20} className='mt-2.5 ' />
                        </div>
                        <div>
                            <CourseOfTheWeek />
                        </div>
                    </div>
                </section>
            </main>

            <footer id='footer' className='bg-background'>
                <div className='container mx-auto text-foreground px-2 py-8 text-sm text-center md:text-end text-md  '>
                    <p>&copy; {new Date().getFullYear()} Coursify. Empowering learners worldwide.</p>
                </div>
            </footer>
        </div>
    )
}

export default Landing