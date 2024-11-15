import React from 'react'
import { motion } from 'framer-motion'

function JourneyStep({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
      <motion.div 
        className="flex flex-col items-center text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-primary text-primary-foreground hover:bg-primary/90 p-4 rounded-full mb-4">
          {icon}
        </div>
        <h4 className="text-foreground text-xl font-semibold mb-2">{title}</h4>
        <p className='text-muted-foreground'>{description}</p>
      </motion.div>
    )
  }

export default JourneyStep