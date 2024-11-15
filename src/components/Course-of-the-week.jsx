import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Clock, } from 'lucide-react'

/* 
-Course Name
-Course Description
*/
export function CourseOfTheWeek() {

    const courseoftheWeek = [
        {
            title: "Data Visualization with Python",
            description: "Learn the basics of data visualization using  using Python's popular libraries like Matplotlib and Seaborn.",
        },
    ]
    return (

        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "keyframes", stiffness: 200, }}
        >
            <Card className="bg-muted/10 backdrop-blur-lg border-2 border-foreground/5">
                <CardContent className="p-6 text-start">
                    <h3 id="title" className="text-foreground text-xl font-semibold mb-2">
                        {courseoftheWeek[0].title}
                    </h3>
                    <p id="description" className="text-muted-foreground mb-2">
                        {courseoftheWeek[0].description}
                    </p>
                    <div id="icons" className="flex flex-col  my-2">
                        <ul className="space-y-2">
                            <li className="flex items-center"><Clock className="mr-2" /> 4-week course</li>
                            <li className="flex items-center"><BookOpen className="mr-2" /> 20 lessons</li>
                        </ul>
                    </div>
                    <Button variant="default" className="mt-4 text-muted hover:text-foreground/80"  >Start Learning</Button>
                </CardContent>
            </Card>

        </motion.div>

    )
}