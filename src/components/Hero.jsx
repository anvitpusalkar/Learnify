import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { TbWritingSign } from "react-icons/tb";
import { TfiAgenda } from "react-icons/tfi";
import { FlipWords } from './ui/flip-words';


export function Hero() {
    const [topic, setTopic] = useState('');
    const words = [
        "Machine Learning Fundamentals",
        "Python for Data Science",
        "DevOps CI/CD Pipeline",
        "Applied Economics: Theory and Practice",
        "Digital Marketing Mastery",
        "UX/UI Design Essentials"
    ]

    return (
        <div className='text-center'>
            <span className="mb-1.5 inline-block rounded-full bg-muted text-muted-foreground px-3 py-1.5 text-sm motion-preset-confetti motion-duration-1500">
                Beta Now Live!
            </span>
            <h1 className='bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-center text-2xl font-medium leading-tight text-transparent sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight mb-6'>
                Generate Your Perfect <span className='text-primary'>Course</span> <br /> in Seconds
            </h1>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-8">
                Harness the power of AI to create personalized learning journeys tailored to your needs and interests.
            </p>
            <div className='flex justify-center space-x-4'>
                <Input
                    type="text"
                    placeholder="Enter a topic (e.g., 'Machine Learning')"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-64 bg-background text-foreground placeholder-muted-foreground border-input"
                />
                <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                // onClick={generatePreviewCourse}
                >
                    Generate Now <TbWritingSign className='hidden md:inline' />
                </Button>
            </div>
            <div className="text-2xl font-semibold text-center">
                <div className="mt-8 flex items-center justify-center">
                    <h5 className="text-foreground">Courses Generated so far</h5>
                    <Button variant="ghost" size="icon" className="border-0">
                        <TfiAgenda />
                    </Button>
                </div>
                <h5 className="text-primary mt-2">
                    <FlipWords words={words} className={"text-primary text-xl"} /> <br />
                    {/* {previewCourse && ` ${previewCourse}`} */}
                </h5>
            </div>
        </div>
    )
}