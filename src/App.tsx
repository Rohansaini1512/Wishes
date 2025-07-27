import React, { useState, useEffect } from 'react';
import { Heart, Gift, Cake, Star, Sparkles, Music, PartyPopper, Zap, Crown } from 'lucide-react';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [pulseHearts, setPulseHearts] = useState(false);
  const [showCrackers, setShowCrackers] = useState(false);
  
  // Your friend's name - change this to your friend's actual name
  const friendName = "Thalapathy";

  useEffect(() => {
    // Trigger confetti after a short delay
    const confettiTimer = setTimeout(() => setShowConfetti(true), 500);
    const messageTimer = setTimeout(() => setShowMessage(true), 1500);
    const fireworksTimer = setTimeout(() => setShowFireworks(true), 2500);
    const heartsTimer = setTimeout(() => setPulseHearts(true), 3000);
    const crackersTimer = setTimeout(() => setShowCrackers(true), 1000);
    
    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(messageTimer);
      clearTimeout(fireworksTimer);
      clearTimeout(heartsTimer);
      clearTimeout(crackersTimer);
    };
  }, []);

  const createConfetti = () => {
    return Array.from({ length: 80 }, (_, i) => (
      <div
        key={i}
        className="absolute opacity-80"
        style={{
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 8 + 4}px`,
          height: `${Math.random() * 8 + 4}px`,
          backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd93d', '#ff9ff3'][Math.floor(Math.random() * 6)],
          borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      />
    ));
  };

  const createFireworks = () => {
    return Array.from({ length: 12 }, (_, i) => (
      <div
        key={i}
        className="firework absolute"
        style={{
          left: `${20 + Math.random() * 60}%`,
          top: `${20 + Math.random() * 40}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      >
        <Star className="w-6 h-6 text-yellow-400" />
      </div>
    ));
  };

  const createCrackers = () => {
    return Array.from({ length: 8 }, (_, i) => (
      <div
        key={i}
        className="cracker absolute"
        style={{
          left: `${10 + i * 12}%`,
          top: `${30 + Math.random() * 40}%`,
          animationDelay: `${i * 0.3}s`,
        }}
      >
        <div className="cracker-body relative">
          <PartyPopper className="w-8 h-8 text-red-500 transform rotate-45" />
          <div className="cracker-burst absolute -top-2 -left-2">
            {Array.from({ length: 6 }, (_, j) => (
              <div
                key={j}
                className="cracker-particle absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd93d', '#ff9ff3'][j],
                  transform: `rotate(${j * 60}deg) translateX(20px)`,
                  animationDelay: `${0.2 + j * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ));
  };

  const createFloatingHearts = () => {
    return Array.from({ length: 15 }, (_, i) => (
      <Heart
        key={i}
        className="floating-heart absolute text-pink-400 opacity-70"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 20 + 15}px`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${4 + Math.random() * 2}s`,
        }}
      />
    ));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 animate-gradient-shift opacity-50"></div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="confetti-container">
            {createConfetti()}
          </div>
        </div>
      )}

      {/* Fireworks Animation */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-15">
          {createFireworks()}
        </div>
      )}

      {/* Crackers Animation */}
      {showCrackers && (
        <div className="fixed inset-0 pointer-events-none z-12">
          {createCrackers()}
        </div>
      )}

      {/* Floating Hearts */}
      {pulseHearts && (
        <div className="fixed inset-0 pointer-events-none z-5">
          {createFloatingHearts()}
        </div>
      )}

      {/* Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="balloon balloon-1 absolute top-10 left-10 w-8 h-10 bg-red-400 rounded-full shadow-lg"></div>
        <div className="balloon balloon-2 absolute top-20 right-20 w-6 h-8 bg-blue-400 rounded-full shadow-lg"></div>
        <div className="balloon balloon-3 absolute top-32 left-1/4 w-7 h-9 bg-yellow-400 rounded-full shadow-lg"></div>
        <div className="balloon balloon-4 absolute top-16 right-1/3 w-6 h-8 bg-green-400 rounded-full shadow-lg"></div>
        <div className="balloon balloon-5 absolute top-40 right-10 w-8 h-10 bg-purple-400 rounded-full shadow-lg"></div>
        <div className="balloon balloon-6 absolute top-8 left-1/2 w-7 h-9 bg-pink-400 rounded-full shadow-lg"></div>
        <div className="balloon balloon-7 absolute top-28 left-20 w-6 h-8 bg-indigo-400 rounded-full shadow-lg"></div>
      </div>

      {/* Sparkle Effects */}
      <div className="sparkles-container absolute inset-0 pointer-events-none z-8">
        {Array.from({ length: 20 }, (_, i) => (
          <Sparkles
            key={i}
            className="sparkle absolute text-yellow-300 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 15 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Title Animation */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-12 h-12 text-yellow-400 animate-bounce mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg animate-pulse">
              Dear {friendName}
            </h2>
            <Crown className="w-12 h-12 text-yellow-400 animate-bounce ml-4" />
          </div>
          <h1 className="birthday-title text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-4 animate-rainbow-text">
            HAPPY
          </h1>
          <h1 className="birthday-title-delayed text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-rainbow-text-delayed">
            BIRTHDAY!
          </h1>
        </div>

        {/* Birthday Cake */}
        <div className="cake-container mb-8 cursor-pointer transform hover:scale-110 transition-all duration-500 hover:rotate-2"
             onClick={() => setShowConfetti(!showConfetti)}>
          <div className="relative">
            <div className="cake-base w-32 h-20 bg-gradient-to-t from-yellow-300 to-yellow-200 rounded-lg shadow-lg animate-cake-wiggle"></div>
            <div className="cake-layer w-28 h-16 bg-gradient-to-t from-pink-300 to-pink-200 rounded-lg shadow-md absolute top-0 left-2 animate-cake-wiggle-delayed"></div>
            <div className="cake-top w-24 h-12 bg-gradient-to-t from-purple-300 to-purple-200 rounded-lg shadow-sm absolute top-0 left-4 animate-cake-wiggle-more-delayed"></div>
            
            {/* Candles */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {[1, 2, 3].map((candle) => (
                  <div key={candle} className="candle flex flex-col items-center">
                    <div className="flame w-2 h-3 bg-gradient-to-t from-red-400 to-yellow-300 rounded-full animate-flame-dance"></div>
                    <div className="wick w-1 h-6 bg-yellow-600"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Message */}
        {showMessage && (
          <div className="message-card bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center transform animate-fadeInUp hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="flex justify-center mb-4">
              <Heart className="text-red-500 w-8 h-8 animate-heartbeat" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Dear {friendName},
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Wishing you a day filled with happiness and a year filled with joy! 
              May all your birthday wishes come true and may you continue to shine 
              bright like the amazing person you are! 🎉
            </p>
            <div className="flex justify-center space-x-4">
              <Gift className="text-blue-500 w-6 h-6 animate-wiggle hover:animate-spin cursor-pointer" />
              <Cake className="text-pink-500 w-6 h-6 animate-wiggle hover:animate-spin cursor-pointer" style={{ animationDelay: '0.2s' }} />
              <Star className="text-yellow-500 w-6 h-6 animate-wiggle hover:animate-spin cursor-pointer" style={{ animationDelay: '0.4s' }} />
              <Sparkles className="text-purple-500 w-6 h-6 animate-wiggle hover:animate-spin cursor-pointer" style={{ animationDelay: '0.6s' }} />
            </div>
          </div>
        )}

        {/* Interactive Elements */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setShowConfetti(!showConfetti)}
            className="celebration-btn bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl animate-button-glow"
          >
            🎊 More Confetti!
          </button>
          <button 
            onClick={() => setShowFireworks(!showFireworks)}
            className="celebration-btn bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl animate-button-glow-delayed"
          >
            ✨ Fireworks!
          </button>
          <button 
            onClick={() => setShowCrackers(!showCrackers)}
            className="celebration-btn bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl animate-button-glow"
          >
            🎉 Crackers!
          </button>
          <button 
            onClick={() => setPulseHearts(!pulseHearts)}
            className="celebration-btn bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl animate-button-glow-more-delayed"
          >
            💖 Love Rain!
          </button>
        </div>
      </div>

      <style jsx>{`
        .cracker {
          animation: cracker-pop 3s ease-out infinite;
        }
        
        @keyframes cracker-pop {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          20% {
            transform: scale(1.3) rotate(15deg);
          }
          40% {
            transform: scale(1.1) rotate(-10deg);
          }
          60% {
            transform: scale(1.2) rotate(5deg);
          }
          80% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        .cracker-particle {
          animation: particle-burst 2s ease-out infinite;
          opacity: 0;
        }
        
        @keyframes particle-burst {
          0% {
            transform: rotate(var(--rotation, 0deg)) translateX(0px) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: rotate(var(--rotation, 0deg)) translateX(30px) scale(1);
          }
          40% {
            opacity: 1;
            transform: rotate(var(--rotation, 0deg)) translateX(50px) scale(1.2);
          }
          60% {
            opacity: 0.8;
            transform: rotate(var(--rotation, 0deg)) translateX(40px) scale(1);
          }
          80% {
            opacity: 0.4;
            transform: rotate(var(--rotation, 0deg)) translateX(20px) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--rotation, 0deg)) translateX(0px) scale(0);
          }
        }
        
        .cracker-body:hover {
          animation: cracker-shake 0.5s ease-in-out infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .confetti-container div {
          animation: confetti-fall linear infinite;
        }
        
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg) scale(0);
            opacity: 1;
          }
          10% {
            transform: translateY(-80vh) rotate(36deg) scale(1);
          }
          100% {
            transform: translateY(100vh) rotate(720deg) scale(0.5);
            opacity: 0;
          }
        }
        
        .firework {
          animation: firework-burst 2s ease-out infinite;
        }
        
        @keyframes firework-burst {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        .floating-heart {
          animation: heart-float linear infinite;
        }
        
        @keyframes heart-float {
          0% {
            transform: translateY(100vh) scale(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) scale(1) rotate(45deg);
          }
          90% {
            opacity: 1;
            transform: translateY(-10vh) scale(1) rotate(315deg);
          }
          100% {
            transform: translateY(-20vh) scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        .sparkle {
          animation: sparkle-twinkle 2s ease-in-out infinite;
        }
        
        @keyframes sparkle-twinkle {
          0%, 100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }
        
        .balloon {
          animation: balloon-float 4s ease-in-out infinite;
        }
        
        .balloon-1 { animation-delay: -0.5s; }
        .balloon-2 { animation-delay: -1s; }
        .balloon-3 { animation-delay: -1.5s; }
        .balloon-4 { animation-delay: -2s; }
        .balloon-5 { animation-delay: -2.5s; }
        .balloon-6 { animation-delay: -3s; }
        .balloon-7 { animation-delay: -3.5s; }
        
        @keyframes balloon-float {
          0%, 100% { 
            transform: translateY(0px) rotate(-2deg); 
          }
          33% { 
            transform: translateY(-15px) rotate(2deg); 
          }
          66% { 
            transform: translateY(-25px) rotate(-1deg); 
          }
        }
        
        .animate-rainbow-text {
          animation: rainbow-text 3s ease-in-out infinite;
        }
        
        .animate-rainbow-text-delayed {
          animation: rainbow-text 3s ease-in-out infinite 0.5s;
        }
        
        @keyframes rainbow-text {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(180deg); }
        }
        
        .animate-cake-wiggle {
          animation: cake-wiggle 2s ease-in-out infinite;
        }
        
        .animate-cake-wiggle-delayed {
          animation: cake-wiggle 2s ease-in-out infinite 0.2s;
        }
        
        .animate-cake-wiggle-more-delayed {
          animation: cake-wiggle 2s ease-in-out infinite 0.4s;
        }
        
        @keyframes cake-wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        .animate-flame-dance {
          animation: flame-dance 0.8s ease-in-out infinite alternate;
        }
        
        @keyframes flame-dance {
          0% { 
            transform: scale(1) rotate(-2deg); 
            filter: brightness(1);
          }
          100% { 
            transform: scale(1.2) rotate(2deg); 
            filter: brightness(1.3);
          }
        }
        
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        .birthday-title {
          animation: bounce-in 1.5s ease-out;
        }
        
        .birthday-title-delayed {
          animation: bounce-in 1.5s ease-out 0.3s both;
        }
        
        @keyframes bounce-in {
          0% {
            transform: scale(0) rotate(-360deg);
            opacity: 0;
          }
          30% {
            transform: scale(1.3) rotate(-180deg);
          }
          50% {
            transform: scale(1.1) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        .message-card {
          animation: fadeInUp 1.2s ease-out;
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          60% {
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-button-glow {
          animation: button-glow 2s ease-in-out infinite;
        }
        
        .animate-button-glow-delayed {
          animation: button-glow 2s ease-in-out infinite 0.5s;
        }
        
        .animate-button-glow-more-delayed {
          animation: button-glow 2s ease-in-out infinite 1s;
        }
        
        @keyframes button-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
            transform: translateY(0px);
          }
          50% {
            box-shadow: 0 0 40px rgba(236, 72, 153, 0.8);
            transform: translateY(-2px);
          }
        }
        
        .cake-container:hover .flame {
          animation: flame-excited 0.3s ease-in-out infinite alternate;
        }
        
        @keyframes flame-excited {
          0% { 
            transform: scale(1.2) rotate(-5deg); 
            filter: brightness(1.5);
          }
          100% { 
            transform: scale(1.5) rotate(5deg); 
            filter: brightness(2);
          }
        }
      `}</style>
    </div>
  );
}

export default App;