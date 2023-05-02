import React, { useEffect, useState } from "react";

const Number = ({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) => {
  const [count, setCount] = useState(value);
  const animateClass = count !== value ? "animate-bounce" : "";
  useEffect(() => {
    setCount(value);
  }, [value]);
  return (
    <span
      className={`text-4xl sm:text-5xl font-mono ${animateClass} ${className}`}
    >
      {count < 10 && "0"}
      {count}
    </span>
  );
};
export const Countdown: React.FC<{ className: string }> = ({
  className = "",
}) => {
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2023-05-09T00:00:00.000Z").getTime();
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(intervalId);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`grid grid-flow-col gap-5 text-center auto-cols-max ${className}`}
    >
      <div className="flex flex-col">
        <Number value={countdown.days} className="text-purple-400" />
        days
      </div>
      <div className="flex flex-col">
        <Number value={countdown.hours} className="text-green-400" />
        hours
      </div>
      <div className="flex flex-col">
        <Number value={countdown.minutes} className="text-red-400" />
        min
      </div>
      <div className="flex flex-col">
        <Number value={countdown.seconds} className="text-yellow-400" />
        sec
      </div>
    </div>
  );
};
