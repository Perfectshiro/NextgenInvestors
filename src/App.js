import React from 'react';

const App = () => {
  // --- ใส่ URL สำหรับแต่ละปุ่มที่นี่ครับ ---
  const urls = {
    playThai: "https://board-game-delta.vercel.app/", // ลิงก์เล่นเกม (ภาษาไทย)
    playEnglish: "https://board-game-en.vercel.app/", // ลิงก์เล่นเกม (English)
    manualThai: "https://1drv.ms/b/c/97f16aae7837bd72/IQAMTYMdWharQKalRL9KU6UYAVDrzUHq4o--M9FyT8p5N5U?e=VH8zhW",  // ลิงก์คู่มือ (ภาษาไทย)
    manualEnglish: "https://1drv.ms/b/c/97f16aae7837bd72/IQDdUB16wjqBT730X348ZuloAVj_mNJHmFjnpOouAT8wEDY?e=tKHgz6" // ลิงก์คู่มือ (English)
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-kanit text-white">
      
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700;800&display=swap');
        
        .font-kanit { font-family: 'Kanit', sans-serif; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade { animation: fadeIn 0.3s ease-out forwards; }

        .description-box {
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .text-yellow-custom {
          color: #f7d23d; font-weight: 800;
          text-shadow: 0px 2px 4px rgba(0,0,0,0.5);
        }

        /* ปุ่มคู่มือด้านล่าง */
        .btn-manual {
          background-color: rgba(55, 65, 81, 0.8); /* สีเทาเข้มแบบในรูป */
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-manual:hover {
          background-color: rgba(75, 85, 99, 1);
          transform: scale(1.05);
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 bg-center bg-no-repeat" style={{ backgroundImage: `url('https://img2.pic.in.th/Background4x.png')`, backgroundSize: 'cover' }} />
      <div className="absolute inset-0 z-10 bg-bottom bg-no-repeat" style={{ backgroundImage: `url('https://img5.pic.in.th/file/secure-sv1/Middleground4x.png')`, backgroundSize: 'contain' }} />
      <div className="absolute inset-0 z-20 bg-bottom bg-no-repeat" style={{ backgroundImage: `url('https://img5.pic.in.th/file/secure-sv1/Artboard-16052b888d11f366d.png')`, backgroundSize: 'contain' }} />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-30 flex flex-col items-center gap-4 p-6 text-center max-w-4xl w-full">
        
        {/* โลโก้และคำอธิบาย */}
        <div className="mb-2 animate-fade flex flex-col items-center">
          <img src="https://img2.pic.in.th/Logo7503add0726196b3.png" alt="Logo" className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto drop-shadow-2xl mx-auto" />
          
          <div className="mt-4 px-6 py-4 description-box rounded-3xl max-w-2xl mx-auto">
            <p className="text-sm md:text-base font-normal leading-relaxed text-white">
              <span className="text-yellow-custom italic">NextGen Investors</span> เป็นเกมที่มุ่งเน้นให้ผู้เล่นได้พัฒนาและฝึกฝนทักษะทางการเงินและการลงทุนผ่านการจำลองสถานการณ์จริง โดยบูรณาการหลักปรัชญาเศรษฐกิจพอเพียงเข้ามาเป็นแกนหลัก ผู้เล่นจะได้เรียนรู้การวางแผน จัดการเงิน และตัดสินใจลงทุนภายใต้ความเสี่ยงอย่าง มีเหตุผล พอประมาณ และมีภูมิคุ้มกันที่ดี เพื่อสร้างความมั่งคั่งให้ตนเองและก้าวสู่การเป็นผู้ประกอบการที่ประสบความสำเร็จ นอกจากนี้ยังช่วยปลูกฝังความเข้าใจในหลักการบริหารเงินอย่างยั่งยืน และเตรียมความพร้อมสำหรับอนาคตทางการเงินที่มั่นคง โดยผู้เล่นที่มีมูลค่ารวมของเงินมากที่สุดเมื่อจบเกมจะเป็นผู้ชนะ
            </p>
          </div>
        </div>

        {/* ปุ่มเข้าเล่นหลัก (สีส้ม-น้ำเงิน) */}
        <div className="flex flex-row gap-6 w-full max-w-2xl justify-center items-center">
          <a 
            href={urls.playThai} 
            className="flex-1 py-6 px-4 bg-orange-600 text-white text-2xl md:text-3xl font-bold rounded-3xl border-4 border-white shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-center no-underline"
            style={{ backgroundColor: '#ea580c' }}
          >
            ภาษาไทย
          </a>
          <a 
            href={urls.playEnglish} 
            className="flex-1 py-6 px-4 bg-blue-600 text-white text-2xl md:text-3xl font-bold rounded-3xl border-4 border-white shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-center no-underline"
            style={{ backgroundColor: '#2563eb' }}
          >
            English
          </a>
        </div>

        {/* ปุ่มวิธีเล่น (แยกภาษา และเป็นลิงก์ออกภายนอก) */}
        <div className="flex flex-row gap-4 mt-2">
          <a 
            href={urls.manualThai}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-manual px-8 py-3 text-white text-lg md:text-xl rounded-full transition-all"
          >
            วิธีการเล่น (TH)
          </a>
          <a 
            href={urls.manualEnglish}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-manual px-8 py-3 text-white text-lg md:text-xl rounded-full transition-all"
          >
            How to Play (EN)
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;