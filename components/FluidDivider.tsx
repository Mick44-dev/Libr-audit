
import React from 'react';

interface FluidDividerProps {
  color?: string;
  flip?: boolean;
}

const FluidDivider: React.FC<FluidDividerProps> = ({ color = "#f8fafc", flip = false }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`} style={{ height: '40px' }}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-full h-full"
        style={{ fill: color }}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.11,1200,0.47V0Z" opacity=".25"></path>
        <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.26,20.06,2.4,40.39-14.77,47.76-30.77,7.37-16,11-30.7,24.82-32.74s26,17,33.4,32.74,12.77,32.85,33.15,35.26,35.06-23,47.69-59.26V0Z" opacity=".5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  );
};

export default FluidDivider;
