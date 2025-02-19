interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform duration-300  ${className}`}
    >
      {/* Background text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-bold stroke-accent fill-transparent text-5xl"
      >
        {text}
        <animate
          attributeName="opacity"
          values="0;0.5"
          dur="0.6s"
        />
      </text>
      
      {/* Outline text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="font-bold fill-transparent text-5xl stroke-primary"
        strokeDasharray="1000"
        strokeDashoffset="0"
      >
        {text}
        <animate
          attributeName="stroke-dashoffset"
          values="1000;0"
          dur="20s"
        />
      </text>
    </svg>
  );
}