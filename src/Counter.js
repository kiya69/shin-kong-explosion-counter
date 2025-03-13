import { useState, useEffect } from "react";

const Counter = () => {
  const startDate = new Date("2025-02-13T11:33:00+08:00").getTime();
  const [timeElapsed, setTimeElapsed] = useState(new Date().getTime() - startDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(new Date().getTime() - startDate);
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const getTimeComponents = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeComponents(timeElapsed);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-4">台中新光爆炸距今已經過了</h2>
      <h1 className="text-5xl font-bold mb-4">
        {days}天 {hours}小時 {minutes}分 {seconds}秒
      </h1>
      <h2 className="text-4xl font-bold mb-4">還是不知道原因。</h2>
    </div>
  );
};

export default Counter;
