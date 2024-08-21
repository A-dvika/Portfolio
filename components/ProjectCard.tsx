"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    imageFront: string;
    imageBack: string;
    title: string;
    text: string;
    github: string; // New property for the GitHub link
}

const ProjectCard: React.FC<Props> = ({ imageFront, imageBack, title, text, github }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div
            onClick={handleFlip}
            className="relative w-full max-w-[420px] h-[280px] rounded-md cursor-pointer"
        >
            <motion.div
                className="flip-card-inner w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div
                    style={{ backgroundImage: `url(${imageFront})` }}
                    className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4 flex items-center justify-center overflow-hidden"
                >
                    <div className="absolute inset-0 w-full h-full bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {title}
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${imageBack})` }}
                    className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
                >
                    <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-[-1]" />
                    <div className="flex flex-col gap-4 py-3 z-[30]">
                        <h1 className="text-white text-2xl font-semibold">{title}</h1>
                        <p className="text-gray-200 text-[20px]">{text}</p>
                        <a href={github} target="_blank" className="text-blue-500 hover:underline">
                            Check on GitHub
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
