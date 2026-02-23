import React, { useState, useEffect } from 'react';

// สร้าง SVG Icons แทนการใช้ lucide-react เพื่อให้ใช้งานได้โดยไม่ต้องติดตั้ง library เพิ่ม
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const App = () => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ลิงก์รูปภาพวิธีการเล่น
  const manualPages = [
    "https://placehold.co/600x800/222/white?text=How+to+Play+1",
    "https://placehold.co/600x800/444/white?text=How+to+Play+2",
    "https://placehold.co/600x800/666/white?text=How+to+Play+3",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === manualPages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? manualPages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowHowToPlay(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-kanit text-white">
      
      {/* โหลด Tailwind CSS ผ่าน CDN และ Import Google Fonts */}
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,700;0,900&family=Itim&display=swap');
        
        .font-kanit { font-family: 'Kanit', sans-serif; }
        .font-itim { font-family: 'Itim', cursive; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade {
          animation: fadeIn 0.3s ease-out forwards;
        }

        /* สไตล์พื้นหลังข้อความให้อ่านง่ายขึ้น */
        .description-box {
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        /* ปรับสีเหลืองตามรูปภาพที่ระบุ */
        .text-yellow-custom {
          color: #f7d23d; /* สีเหลืองทองที่สอดคล้องกับภาพตัวอย่าง */
          font-weight: 800;
          text-shadow: 0px 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      
      {/* Layer 1: หลังสุด */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://img2.pic.in.th/Background4x.png')`,
          backgroundSize: 'cover'
        }}
      />

      {/* Layer 2: เลเยอร์กลาง */}
      <div 
        className="absolute inset-0 z-10 bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url('https://img5.pic.in.th/file/secure-sv1/Middleground4x.png')`,
          backgroundSize: 'contain'
        }}
      />

      {/* Layer 3: หน้าสุด */}
      <div 
        className="absolute inset-0 z-20 bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url('https://img5.pic.in.th/file/secure-sv1/Artboard-16052b888d11f366d.png')`,
          backgroundSize: 'contain' 
        }}
      />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-30 flex flex-col items-center gap-4 p-6 text-center max-w-4xl w-full">
        
        {/* ส่วนโลโก้และคำอธิบาย */}
        <div className="mb-2 animate-fade flex flex-col items-center">
          <img 
            src="https://img2.pic.in.th/Logo7503add0726196b3.png" 
            alt="Board Game Online Logo" 
            className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto drop-shadow-2xl mx-auto"
          />
          
          {/* คำอธิบายเกม - ปรับปรุงสีตัวหนังสือเป็นสีเหลืองและเพิ่มความชัดเจนของกล่อง */}
          <div className="mt-4 px-6 py-4 description-box rounded-3xl max-w-2xl mx-auto">
            <p className="text-sm md:text-base font-normal leading-relaxed text-white">
              <span className="text-yellow-custom italic">NextGen Investors</span> เป็นเกมที่มุ่งเน้นให้ผู้เล่นได้พัฒนาและฝึกฝนทักษะทางการเงินและการลงทุนผ่านการจำลองสถานการณ์จริง โดยบูรณาการหลักปรัชญาเศรษฐกิจพอเพียงเข้ามาเป็นแกนหลัก ผู้เล่นจะได้เรียนรู้การวางแผน จัดการเงิน และตัดสินใจลงทุนภายใต้ความเสี่ยงอย่าง มีเหตุผล พอประมาณ และมีภูมิคุ้มกันที่ดี เพื่อสร้างความมั่งคั่งให้ตนเองและก้าวสู่การเป็นผู้ประกอบการที่ประสบความสำเร็จ นอกจากนี้ยังช่วยปลูกฝังความเข้าใจในหลักการบริหารเงินอย่างยั่งยืน และเตรียมความพร้อมสำหรับอนาคตทางการเงินที่มั่นคง โดยผู้เล่นที่มีมูลค่ารวมของเงินมากที่สุดเมื่อจบเกมจะเป็นผู้ชนะ
            </p>
          </div>
        </div>

        {/* ปุ่มภาษาเรียงข้างกันในแนวนอน */}
        <div className="flex flex-row gap-6 w-full max-w-2xl justify-center items-center">
          <a 
            href="https://board-game-delta.vercel.app/" 
            className="flex-1 py-6 px-4 bg-orange-600 text-white text-2xl md:text-3xl font-bold rounded-3xl border-4 border-white shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-center no-underline"
            style={{ backgroundColor: '#ea580c' }}
          >
            ภาษาไทย
          </a>
          <a 
            href="/play/en" 
            className="flex-1 py-6 px-4 bg-blue-600 text-white text-2xl md:text-3xl font-bold rounded-3xl border-4 border-white shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-center no-underline"
            style={{ backgroundColor: '#2563eb' }}
          >
            English
          </a>
        </div>

        <button 
          onClick={() => {
            setCurrentSlide(0);
            setShowHowToPlay(true);
          }}
          className="font-kanit mt-2 px-10 py-4 bg-black bg-opacity-40 hover:bg-opacity-60 text-white text-2xl rounded-full border-2 border-white border-opacity-50 transition-all flex items-center gap-2"
        >
          วิธีการเล่น (How to Play)
        </button>
      </div>

      {/* --- HOW TO PLAY POPUP (MODAL) --- */}
      {showHowToPlay && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 p-4 animate-fade"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex' }}
          onClick={() => setShowHowToPlay(false)}
        >
          <div 
            className="relative max-w-3xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowHowToPlay(false)}
              className="absolute -top-12 right-0 text-white"
              style={{ position: 'absolute', top: '-3rem', right: 0 }}
            >
              <XIcon />
            </button>

            <div className="relative w-full aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white border-opacity-20" style={{ backgroundColor: '#1f2937', minHeight: '300px' }}>
              <img 
                src={manualPages[currentSlide]} 
                alt={`Manual Page ${currentSlide + 1}`} 
                className="max-h-full max-w-full object-contain"
              />

              <button 
                onClick={prevSlide}
                className="absolute left-4 p-3 bg-white bg-opacity-10 rounded-full text-white"
              >
                <ChevronLeftIcon />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-4 p-3 bg-white bg-opacity-10 rounded-full text-white"
              >
                <ChevronRightIcon />
              </button>
            </div>

            <div className="mt-4 text-white font-bold text-xl bg-black bg-opacity-50 px-6 py-2 rounded-full font-kanit">
              {currentSlide + 1} / {manualPages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;