import { useEffect, useState } from 'react';

export default function SkincarePromoPage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date("2025-06-20T23:59:59") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', textAlign: 'center', backgroundColor: '#fef6f9' }}>
      <h1 style={{ fontSize: '2rem', color: '#d6336c' }}>🌸 Welcome to GlowSkin!</h1>
      <p style={{ fontSize: '1.2rem' }}>Natural skincare products made with love 💖</p>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fff0f6', borderRadius: '10px' }}>
        <h2 style={{ color: '#cc3366' }}>🎁 Limited-Time Discount: 25% OFF All Products!</h2>
        <p style={{ fontWeight: 'bold' }}>Offer ends in:</p>
        <div style={{ fontSize: '1.5rem', color: '#e6005c' }}>
          {timeLeft.days ?? '0'}d {timeLeft.hours ?? '0'}h {timeLeft.minutes ?? '0'}m {timeLeft.seconds ?? '0'}s
        </div>
      </div>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ color: '#cc3366' }}>✨ Why Choose GlowSkin?</h2>
        <ul style={{ listStyleType: 'disc', textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
          <li>🌿 100% Natural Ingredients</li>
          <li>🧪 Dermatologist Approved</li>
          <li>🐰 Cruelty-Free & Vegan</li>
          <li>🌸 Gentle on All Skin Types</li>
          <li>🚚 Free Shipping on Orders Over ₹999</li>
        </ul>
      </section>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
        © 2025 GlowSkin — Your Skin's Best Friend
      </footer>
    </div>
  );
}
