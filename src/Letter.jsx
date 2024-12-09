import React, { useState } from "react";
import { Heart } from "lucide-react";

const Letter = () => {
  const [stage, setStage] = useState(0);

  const handleButtonClick = () => {
    setStage((prevStage) => Math.min(prevStage + 1, 2));
  };

  const showLoveMessage = stage === 2;

  return (
    <div className="relative w-screen h-screen bg-pink-50 overflow-hidden flex items-center justify-center">
      {!showLoveMessage && (
        <button
          onClick={handleButtonClick}
          className="absolute bg-pink-500 text-white text-xl p-6 rounded-full shadow-2xl hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
        >
          {stage === 0 ? "Click Me" : "One More Time"}
        </button>
      )}

      {showLoveMessage && (
        <div className="relative w-full h-full overflow-y-auto p-8 bg-white">
          <div className="absolute inset-0 animate-heart-burst pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <Heart
                key={i}
                className="absolute text-red-500 animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                }}
              />
            ))}
          </div>
          <div className="max-w-4xl mx-auto relative z-10 bg-white p-6 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
              A Letter to Soap 🧼
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Hello soap, you're mad at me right now because I wouldn't give you
              the water while you were eating the sweet treat that you were hiding
              from me. But i love you berry much 🍓. More than you can imagine,
              and I want you to know that you mean the world to me. We officially
              became boyfriend and girlfriend one year ago, and time has flown by.
              I met you when i was at a low point in life and had no hope in
              finding anyone and not very happy with where I was at or where my
              life was heading. I was lost, I didn't know where I wanted to be in
              five years and let alone in the future. But then I met you. I
              remember the moment that I knew you were going to be the one. It was
              a moment in the car watching Taylor Swift tik toks with you on our
              first date that I could relax my shoulders and thank god for sending
              me someone. You were and are the girl that would make me happy to go
              to class. A reason to go early for physics, and a reason to smile
              again. You make me very happy. As time went on, we had our
              differences but never have I felt more inclined to work and love
              someone the way I did for you. You are my happy place and my home.
              Being with you makes me feel like my old self again, something that
              nobody has made me feel. I feel like my true self and nobody can
              ever make me feel the way you do. That feeling of pure joy that I
              used to feel when I was with my family, when it felt safe to space
              out and just be myself. It's something that I don't feel very often,
              and has taken me years to feel again. Life used to feel like a
              rollercoaster, and as things started panning out it felt like I was
              getting to the worst part and that the ride was over. You helped me
              out of it. You give me confidence, strength, clarity, and a sense of
              fullfilment that helped me feel like I was doing things right again.
              I have my hiccups and I like to leep a lot but I have not felt this
              whole and this determied since my best years in 2020. So I want this
              day to be a celebration of where we are, what we have done together,
              and what is still to come. I know we can get through it, through bad
              times and worse. I see a bright future ahead and I love picturing
              you in it. I will never be the poet boyfriend that you always wanted
              but I speak from the heart and I stay true to what I feel. I'm so
              happy to have spent a year of my life together with you and hope to
              continue growing with you. We empower each other to be the best
              versions ourselves and you really are my anchor. You tell me the
              truth and are there through the hard times. This was not an easy
              year for me and I have spent a lot of time going through life
              reacting to everything that came my way instead of paving a way and
              taking control. You showed me how to take that back. I admire your
              courage, your perserverance and your intelligence. They are some of
              the qualities that you don't show to everyone (especially
              intelligence jejeje), but I know how lucky I am to bring this out of
              you and I love the way you shine when we are together. Your smile
              gives me the power of 100 vikings and fills me up with the energy of
              a million suns. I am happy to be another homosapiens that celebrates
              one rotation around the sun as boyfriend and girlfriend next to you.
              To many more years of happiness and love.
            </p>
            <p className="text-center mt-6 text-pink-600 font-semibold">bik</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Letter;