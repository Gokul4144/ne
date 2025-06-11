import React, { useState, useEffect } from "react";

const DiscountTimer = () => {
  const calculateTimeLeft = () => {
    const offerEnd = new Date("2025-06-20T23:59:59"); // 🎯 Set your offer end date/time here
    const now = new Date();
    const diff = offerEnd - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div style={{ padding: "1rem", background: "#ffe6e6", borderRadius: "8px", marginTop: "1rem" }}>
        <h2>🎉 Discount Ended</h2>
        <p style={{ color: "gray" }}>Sorry, the offer is no longer available.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem", background: "#ffe6cc", borderRadius: "8px", marginTop: "1rem" }}>
      <h2>🔥 Limited Time Discount!</h2>
      <p style={{ fontSize: "1.2rem", color: "#cc3300" }}>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
      </p>
    </div>
  );
};

export default DiscountTimer;
