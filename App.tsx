
import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Activity, 
  Users, 
  ShieldCheck, 
  Sun, 
  ArrowRight, 
  Smartphone, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronRight, 
  Leaf, 
  Compass, 
  Zap, 
  Play, 
  Upload, 
  Layers, 
  SearchCode, 
  Settings2, 
  Atom, 
  Eye, 
  Mountain, 
  MonitorCheck, 
  BarChart3, 
  Cpu, 
  RefreshCcw, 
  Dna,
  Send,
  Loader2,
  CheckCircle2,
  FileVideo,
  Clock,
  Coins,
  ShieldAlert
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Custom Components ---

const PronoiaLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <circle cx="50" cy="18" r="9" />
    <g>
      <path d="M50 55 C48 55 10 45 8 20 C35 20 48 50 50 55 Z" />
      <path d="M50 55 C52 55 90 45 92 20 C65 20 52 50 50 55 Z" />
    </g>
  </svg>
);

const MysticDiagram = () => {
  return (
    <div className="relative w-full max-w-xl aspect-square flex items-center justify-center animate-float py-12">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[90%] h-[90%] bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4d] to-[#1a0b2e] rotate-45 rounded-[3rem] border border-[#d4af37]/30 shadow-[0_30px_70px_rgba(139,92_246,0.3)] flex items-center justify-center">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#d4af37]/40 -translate-x-3 -translate-y-3"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#d4af37]/40 translate-x-3 translate-y-3"></div>
        </div>
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center z-30">
        <div className="bg-[#1a0b2e]/60 backdrop-blur-md p-4 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] mb-4 inline-block border border-[#d4af37]/20">
          <PronoiaLogo className="w-16 h-16 text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
        </div>
        <h4 className="font-mystic text-4xl tracking-[0.3em] text-[#d4af37] leading-none drop-shadow-lg">PRONOIA</h4>
        <p className="text-[11px] tracking-[0.6em] text-purple-300 font-black uppercase mt-3">Energy Mastery</p>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center gap-10 mt-20">
        <div className="group relative">
          <div className="absolute -inset-6 bg-[#d4af37]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="w-44 h-44 md:w-52 md:h-52 bg-[#1a0b2e]/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center p-6 border-2 border-[#d4af37]/40 shadow-[0_15px_45px_rgba(212,175,55,0.15)] transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="text-[#d4af37] mb-2"><Zap size={36} /></div>
            <span className="text-[10px] font-black text-purple-300 tracking-widest uppercase">Wealth Life</span>
            <span className="text-2xl font-black text-[#d4af37] mt-1">부자인 삶</span>
          </div>
        </div>

        <div className="flex gap-10 -mt-6">
          <div className="group relative">
            <div className="absolute -inset-6 bg-emerald-400/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="w-44 h-44 md:w-52 md:h-52 bg-[#1a0b2e]/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center p-6 border-2 border-[#d4af37]/40 shadow-[0_15px_45px_rgba(16,185,129,0.15)] transform hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="text-emerald-400 mb-2"><Leaf size={36} /></div>
              <span className="text-[10px] font-black text-purple-300 tracking-widest uppercase">Healthy Life</span>
              <span className="text-2xl font-black text-[#d4af37] mt-1">건강한 삶</span>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-6 bg-blue-400/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="w-44 h-44 md:w-52 md:h-52 bg-[#1a0b2e]/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center p-6 border-2 border-[#d4af37]/40 shadow-[0_15px_45px_rgba(59,130,246,0.15)] transform hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="text-blue-400 mb-2"><Sun size={36} /></div>
              <span className="text-[10px] font-black text-purple-300 tracking-widest uppercase">Abundant Life</span>
              <span className="text-2xl font-black text-[#d4af37] mt-1">풍요로운 삶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '운영시스템', href: '#operating-system' },
    { name: '1:1 멘토링', href: '#mentoring-process' },
    { name: '실증사례', href: '#cases' },
    { name: '전수 창업', href: '#academy' },
    { name: '상담하기', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0f051d]/90 shadow-2xl py-2 backdrop-blur-xl border-b border-[#d4af37]/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-4 group cursor-pointer">
            <div className="bg-[#1a0b2e] p-2 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-[#d4af37]/30 transition-transform group-hover:scale-110">
              <PronoiaLogo className="w-7 h-7 text-[#d4af37]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-mystic tracking-widest leading-none text-[#d4af37] gold-glow">PRONOIA</span>
              <span className="text-[9px] font-black text-purple-300 tracking-[0.2em] uppercase mt-1">내몸애맞게</span>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-black tracking-[0.2em] text-purple-200 transition-all duration-300 hover:text-[#d4af37] relative group uppercase`}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full shadow-[0_0_8px_#d4af37]"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#d4af37] p-2 hover:bg-white/5 rounded-full transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0f051d] fixed inset-0 z-50 p-10 flex flex-col justify-center items-center gap-10 animate-in fade-in zoom-in-95 duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-[#d4af37] bg-white/5 p-3 rounded-full"><X size={24} /></button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-mystic text-[#d4af37] hover:gold-glow transition-all tracking-widest text-center"
            >
              {link.name}
            </a>
          ))}
          <PronoiaLogo className="w-20 h-20 text-[#d4af37] mt-10 opacity-20" />
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-[95vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          alt="Starry Night Cosmos"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0f051d] via-[#1a0b2e]/80 to-[#2d1b4d]/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-10 rounded-full bg-purple-900/40 backdrop-blur-sm text-[11px] font-black tracking-[0.4em] uppercase text-[#d4af37] border border-[#d4af37]/20 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <Sparkles size={14} className="text-[#d4af37] animate-pulse" /> Kinetic Energy Mastery
            </div>
            <h1 className="text-5xl md:text-7xl font-mystic font-bold text-white mb-10 leading-[1.1] tracking-tight">
              인체 에너지의 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fcd34d] to-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">신비로운 조화</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-14 leading-relaxed font-light max-w-2xl drop-shadow-lg text-center lg:text-left">
              물질의 운동에너지가 존재하듯 <strong className="text-[#d4af37]">인체에도 고유의 운동에너지</strong>가 있습니다. <br />
              25년의 연구와 23,000명의 데이터가 증명하는 <br />
              완벽한 생명 조화의 법칙을 만나보십시오.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start w-full sm:w-auto">
              <a href="#contact" className="px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:brightness-110 text-[#0f051d] rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 group">
                마스터 상담 신청 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#operating-system" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-[#d4af37] border border-[#d4af37]/40 rounded-full font-bold text-lg flex items-center justify-center transition-all backdrop-blur-md">
                시스템 원리 탐구
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center scale-100 md:scale-110 lg:scale-125">
            <MysticDiagram />
          </div>
        </div>
      </div>
    </div>
  );
};

const ScientificValidation = () => {
  const stats = [
    {
      label: "연구 기간",
      value: "25",
      unit: "Years",
      icon: <Clock size={36} className="text-[#d4af37]" />,
      desc: "단 한 순간도 멈추지 않은 인체 에너지 추적 연구의 역사"
    },
    {
      label: "대상자 규모",
      value: "23,000",
      unit: "Seekers",
      icon: <Users size={36} className="text-purple-400" />,
      desc: "실제 임상 데이터와 판독을 통해 검증된 압도적 표본"
    },
    {
      label: "총 투자 규모",
      value: "100",
      unit: "Billion KRW",
      icon: <Coins size={36} className="text-amber-400" />,
      desc: "인체 운동 에너지 상용화를 위해 투입된 전폭적인 자본"
    }
  ];

  return (
    <section className="py-32 bg-[#1a0b2e] border-y border-[#d4af37]/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[#d4af37] font-mystic font-bold mb-6 tracking-[0.5em] uppercase text-sm gold-glow">THE ABSOLUTE PROOF</h2>
          <h3 className="text-4xl md:text-5xl font-mystic font-bold text-white mb-8">검증된 과학, 확신하는 기적</h3>
          <p className="text-purple-200 text-lg md:text-xl font-light max-w-3xl mx-auto opacity-70 leading-relaxed">
            "물질이 존재하는 곳에 운동에너지가 있듯, 생명이 깃든 인체에도 운동에너지가 흐릅니다." <br />
            이 진리를 증명하기 위해 우리는 25년의 세월과 100억 이상의 가치를 쏟아부었습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="group relative p-12 bg-[#0f051d]/60 rounded-[3.5rem] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 shadow-2xl backdrop-blur-xl">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1a0b2e] p-5 rounded-2xl border border-[#d4af37]/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
                {stat.icon}
              </div>
              <div className="mt-8 text-center">
                <h4 className="text-[11px] font-black text-purple-300 uppercase tracking-[0.4em] mb-4">{stat.label}</h4>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-6xl font-mystic font-bold text-[#d4af37] gold-glow">{stat.value}</span>
                  <span className="text-xl font-bold text-white/50">{stat.unit}</span>
                </div>
                <p className="text-sm text-purple-100 opacity-60 font-light leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OperatingSystemSection = () => {
  const osFeatures = [
    {
      title: "에너지 분석 및 판독",
      icon: <BarChart3 size={28} className="text-[#d4af37]" />,
      desc: "개인별 인체 운동에너지의 미세 상태를 디지털화하여 정밀 분석하고, 불균형의 근원을 즉각 판독합니다."
    },
    {
      title: "맞춤 솔루션 알고리즘",
      icon: <Cpu size={28} className="text-purple-400" />,
      desc: "23,000건의 빅데이터를 기반으로 각 개인에게 최적화된 고유의 에너지 복원 가이드를 생성합니다."
    },
    {
      title: "실시간 조절 확인",
      icon: <MonitorCheck size={28} className="text-emerald-400" />,
      desc: "제시된 솔루션이 인체 시스템에 미치는 즉각적인 반응을 과학적 장비를 통해 실시간으로 확인합니다."
    },
    {
      title: "정밀 검증 및 전수",
      icon: <RefreshCcw size={28} className="text-blue-400" />,
      desc: "변화된 에너지 상태를 다각도로 검증하고, 대상자가 스스로 조절할 수 있는 영구적 방법론을 전수합니다."
    }
  ];

  return (
    <section id="operating-system" className="py-40 bg-[#0f051d] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d4af37]/5 blur-[150px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-[#d4af37] font-mystic font-bold mb-8 tracking-[0.4em] uppercase flex items-center justify-center lg:justify-start gap-5 text-sm gold-glow">
              <span className="w-16 h-px bg-[#d4af37]/30"></span> THE MYSTIC ENGINE
            </h2>
            <h3 className="text-5xl md:text-6xl font-mystic font-bold text-white mb-10 leading-tight">
              인체 에너지 <br />
              <span className="text-[#d4af37] italic">지능형 운영체제</span>
            </h3>
            <p className="text-purple-200 text-xl mb-16 font-light leading-relaxed opacity-80 max-w-xl mx-auto lg:mx-0">
              보이지 않는 인체의 흐름을 지배하는 독보적 엔진입니다. <br className="hidden md:block" /> 
              100억 이상의 투자가 빚어낸 황금빛 알고리즘이 <br className="hidden md:block" /> 
              당신의 생명 에너지를 재설계합니다.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              {osFeatures.map((feature, idx) => (
                <div key={idx} className="p-10 rounded-[3rem] bg-white/5 border border-[#d4af37]/10 hover:border-[#d4af37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.1)] transition-all group shadow-2xl backdrop-blur-sm">
                  <div className="mb-8 p-5 bg-[#1a0b2e] rounded-2xl inline-block group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-[#d4af37]/20 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-mystic font-bold text-[#d4af37] mb-5 leading-tight">{feature.title}</h4>
                  <p className="text-purple-100 font-light leading-relaxed opacity-70 text-sm md:text-base">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative glass-mystic rounded-[4rem] p-12 border border-[#d4af37]/20 shadow-[0_0_100px_rgba(139,92_246,0.1)] overflow-hidden group">
              <div className="flex justify-between items-center mb-12">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#d4af37]/40"></div>
                  <div className="w-3 h-3 rounded-full bg-[#d4af37]/40"></div>
                  <div className="w-3 h-3 rounded-full bg-[#d4af37]/40"></div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
                   <span className="text-[11px] font-black tracking-widest text-[#d4af37] uppercase">Divine OS Core Active</span>
                </div>
              </div>
              
              <div className="space-y-12">
                <div className="p-8 bg-[#1a0b2e]/60 rounded-[2.5rem] border border-[#d4af37]/20 shadow-inner text-left">
                  <div className="flex justify-between items-end mb-6">
                    <span className="text-xs font-black text-purple-300 uppercase tracking-widest">Resonance Stability</span>
                    <span className="text-4xl font-mystic text-[#d4af37] font-bold gold-glow">96.2%</span>
                  </div>
                  <div className="w-full h-4 bg-black/40 rounded-full overflow-hidden shadow-sm border border-[#d4af37]/10">
                    <div className="h-full bg-gradient-to-r from-purple-600 via-[#d4af37] to-amber-500 w-[96.2%] animate-pulse"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 bg-[#1a0b2e]/80 rounded-[2.5rem] border border-[#d4af37]/20 shadow-sm text-center transform group-hover:translate-y-[-5px] transition-transform">
                    <Activity size={40} className="mx-auto text-emerald-400 mb-4" />
                    <span className="block text-[10px] text-purple-300 uppercase font-black tracking-[0.2em] mb-2">Kinetic Pulse</span>
                    <span className="text-2xl font-bold text-[#d4af37] italic leading-none">Mastered</span>
                  </div>
                  <div className="p-8 bg-[#1a0b2e]/80 rounded-[2.5rem] border border-[#d4af37]/20 shadow-sm text-center transform group-hover:translate-y-[-5px] transition-transform delay-75">
                    <ShieldCheck size={40} className="mx-auto text-blue-400 mb-4" />
                    <span className="block text-[10px] text-purple-300 uppercase font-black tracking-[0.2em] mb-2">Divine Auth</span>
                    <span className="text-2xl font-bold text-white italic leading-none">Granted</span>
                  </div>
                </div>

                <div className="p-8 bg-[#2d1b4d]/40 rounded-[3rem] border border-[#d4af37]/10 relative overflow-hidden text-left">
                   <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4af37]/10 blur-3xl rounded-full"></div>
                  <h5 className="text-sm font-black text-[#d4af37] mb-6 flex items-center gap-3 uppercase tracking-widest">
                    <Dna size={20} /> Neural Harmony Loop
                  </h5>
                  <div className="space-y-4 text-sm text-purple-100 font-light opacity-80">
                    <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full shrink-0"></span>생체 주파수 대역폭 자동 확장</p>
                    <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full shrink-0"></span>심층 수면 시 셀룰러 재생 극대화</p>
                    <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full shrink-0"></span>외부 부정 에너지 간섭 실시간 차단</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-40 bg-[#1a0b2e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 w-full">
            <div className="relative group mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-10 bg-[#d4af37]/10 rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200" 
                className="relative z-10 rounded-[4rem] shadow-2xl w-full aspect-[4/5] object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 border border-[#d4af37]/20" 
                alt="Mystic Nature Energy" 
              />
              <div className="absolute -bottom-10 -left-6 md:-left-10 z-20 w-48 h-48 md:w-56 md:h-56 bg-[#0f051d]/90 backdrop-blur-xl border border-[#d4af37]/30 rounded-[3rem] flex flex-col items-center justify-center shadow-2xl p-6 md:p-8">
                  <Activity size={48} className="text-[#d4af37] mb-4 animate-pulse" />
                  <span className="text-[11px] font-black tracking-[0.3em] text-[#d4af37] uppercase text-center leading-tight">Principle of <br/>Eternal Energy</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-[#d4af37] font-mystic font-bold mb-8 tracking-[0.5em] uppercase flex items-center justify-center lg:justify-start gap-5 text-sm gold-glow">
              <span className="w-16 h-px bg-[#d4af37]/30"></span> THE ANCIENT PHILOSOPHY
            </h2>
            <h3 className="text-5xl md:text-7xl font-mystic font-bold text-white mb-12 leading-tight">
              인체 운동 에너지 <br />
              <span className="text-[#d4af37] italic">황금비의 복원</span>
            </h3>
            <div className="space-y-10 text-purple-100 text-xl leading-relaxed font-light text-left">
              <div className="bg-white/5 p-10 rounded-[3rem] border-l-8 border-[#d4af37] shadow-xl italic text-white/90 backdrop-blur-sm">
                "진동이 멈추면 물질은 흩어집니다. 인체의 진동을 황금비로 유지하는 것이 무병장수의 열쇠입니다."
              </div>
              <p className="opacity-80">
                우리는 우주의 법칙이 인체에 그대로 투영된다고 믿습니다. <br className="hidden lg:block" /> 
                실패한 인체 운동 에너지는 곧 우주와의 불협화음입니다. <br className="hidden lg:block" /> 
                프로노이아 멘토링은 당신의 에너지를 가장 신성한 주파수로 튜닝합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10">
                {[
                  { title: "에너지 환경 디자인", icon: <Compass className="text-[#d4af37]" /> },
                  { title: "생존 조건 최적화", icon: <ShieldCheck className="text-purple-400" /> },
                  { title: "정신적 공명 안정", icon: <Sparkles className="text-amber-400" /> },
                  { title: "사회적 에너지 연계", icon: <Users className="text-blue-400" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl border border-[#d4af37]/20 group-hover:bg-[#d4af37] group-hover:text-[#0f051d] transition-all duration-300 shadow-lg shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-bold text-white text-lg tracking-tight group-hover:text-[#d4af37] transition-colors leading-tight">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MentoringProcess = () => {
  const steps = [
    {
      id: "01",
      title: "에너지 판독",
      icon: <Layers className="text-[#d4af37]" />,
      desc: "프로노이아만의 심층 판독 시스템을 통해 영적/육체적 에너지의 실패 원인을 정밀하게 들여다봅니다."
    },
    {
      id: "02",
      title: "근원 원인 규명",
      icon: <SearchCode className="text-purple-400" />,
      desc: "데이터 너머의 근원적 불균형을 포착하여, 당신의 삶이 왜 궤도를 이탈했는지 명확히 안내합니다."
    },
    {
      id: "03",
      title: "신성한 환경 조성",
      icon: <Settings2 className="text-amber-400" />,
      desc: "에너지가 다시 용솟음칠 수 있는 절대적인 주거, 생활, 정신 환경을 개인 맞춤형으로 재구축합니다."
    }
  ];

  return (
    <section id="mentoring-process" className="py-40 bg-[#0f051d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-28">
          <h2 className="text-[#d4af37] font-mystic font-bold mb-6 tracking-[0.5em] uppercase text-sm gold-glow">THE RITUALS</h2>
          <h3 className="text-5xl md:text-6xl font-mystic font-bold text-white italic leading-tight">1:1 프로노이아 멘토링</h3>
          <p className="text-purple-300 mt-8 max-w-2xl mx-auto font-light text-lg opacity-60 px-4">단 한 영혼만을 위한 고귀한 에너지 재배열을 수행합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-[#d4af37]/10 -z-10"></div>
          {steps.map((item, idx) => (
            <div key={idx} className="group relative bg-[#1a0b2e]/60 p-14 rounded-[4rem] border border-[#d4af37]/10 hover:border-[#d4af37]/50 hover:shadow-[0_40px_100px_rgba(212,175,55,0.1)] transition-all duration-700 backdrop-blur-md text-left flex flex-col items-start">
              <div className="absolute -top-10 left-10 w-20 h-20 bg-[#d4af37] rounded-[2rem] flex items-center justify-center text-3xl font-mystic font-bold text-[#0f051d] shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-all">
                {item.id}
              </div>
              <div className="mb-10 p-6 bg-black/20 rounded-[2.5rem] inline-block group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-3xl font-mystic font-bold text-[#d4af37] mb-8 leading-tight">{item.title}</h4>
              <p className="text-purple-100 font-light leading-relaxed text-lg opacity-70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  // Upload related states
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const cases = [
    {
      id: 1,
      title: "인체 운동 에너지 조절을 통한 유방암 극복 실증",
      author: "62년생 여성 회원 (완치 사례)",
      thumbnail: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=800",
      tags: ["Cancer Recovery", "Kinetic Alchemy"]
    },
    {
      id: 2,
      title: "심층적 자아 평온 및 불면증 종식",
      author: "이OO 회원 (42세)",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
      tags: ["Deep Harmony"]
    },
    {
      id: 3,
      title: "생체 나이 20년 역행의 실증 데이터",
      author: "박OO 회원 (68세)",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      tags: ["Age Reversal"]
    }
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setIsSuccess(false);
      setUploadProgress(0);
    }
  };

  const startUpload = () => {
    if (!selectedFile) return;
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        setUploadProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          setIsSuccess(true);
          setSelectedFile(null);
        }, 800);
      } else {
        setUploadProgress(progress);
      }
    }, 400);
  };

  return (
    <section id="cases" className="py-40 bg-[#0f051d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h2 className="text-[#d4af37] font-mystic font-bold mb-6 tracking-[0.4em] uppercase text-sm gold-glow flex justify-center md:justify-start">TESTIMONIES</h2>
            <h3 className="text-5xl md:text-6xl font-mystic font-bold text-white leading-tight">현현하는 기적</h3>
            <p className="text-purple-300 mt-8 font-light text-xl opacity-60">23,000명이 증언하는 인체 에너지의 마법적 변화입니다.</p>
          </div>
          <button 
            onClick={() => {
              setShowUpload(true);
              setIsSuccess(false);
              setUploadProgress(0);
              setSelectedFile(null);
            }}
            className="mx-auto md:mx-0 flex items-center gap-4 px-10 py-5 bg-[#d4af37] hover:brightness-110 text-[#0f051d] rounded-full font-black transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] transform hover:-translate-y-1 active:scale-95"
          >
            <Upload size={22} /> 기적 제보하기
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {cases.map((item) => (
            <div key={item.id} className="group bg-[#1a0b2e]/40 rounded-[4rem] overflow-hidden border border-[#d4af37]/10 hover:border-[#d4af37]/40 hover:shadow-[0_40px_80px_rgba(212,175,55,0.1)] transition-all duration-700 hover:-translate-y-3 backdrop-blur-sm text-left">
              <div className="relative aspect-[16/10] overflow-hidden cursor-pointer" onClick={() => setActiveVideo(item.title)}>
                <img src={item.thumbnail} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={item.title} />
                <div className="absolute inset-0 bg-[#0f051d]/40 group-hover:bg-transparent transition-all flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#d4af37]/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-[#0f051d] shadow-[0_0_30px_rgba(212,175,55,0.5)] scale-90 group-hover:scale-110 transition-transform">
                    <Play fill="currentColor" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-12">
                <div className="flex gap-3 mb-6 flex-wrap">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-[#d4af37]/10 rounded-full text-[10px] font-black text-[#d4af37] uppercase tracking-widest border border-[#d4af37]/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-mystic font-bold text-white mb-5 group-hover:text-[#d4af37] transition-colors leading-snug">{item.title}</h4>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-[#d4af37]/40"></div>
                    <p className="text-sm font-bold text-purple-300 uppercase tracking-widest opacity-60 leading-none">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showUpload && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#0f051d]/90 backdrop-blur-2xl" onClick={() => !isUploading && setShowUpload(false)}></div>
          <div className="relative z-10 w-full max-w-3xl bg-[#1a0b2e] rounded-[5rem] p-12 md:p-20 animate-in zoom-in-95 duration-500 shadow-[0_60px_150px_rgba(0,0,0,0.5)] border border-[#d4af37]/30">
            {!isUploading && (
              <button onClick={() => setShowUpload(false)} className="absolute top-12 right-12 text-[#d4af37]/50 hover:text-[#d4af37] transition-colors p-3 hover:bg-white/5 rounded-full"><X size={32}/></button>
            )}
            
            <div className="text-center mb-12">
              <PronoiaLogo className="w-16 h-16 text-[#d4af37] mx-auto mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
              <h3 className="text-4xl font-mystic font-bold text-white mb-3">기적의 기록 전송</h3>
              <p className="text-purple-300 font-light opacity-60 text-lg">당신의 변화는 우주의 선물입니다.</p>
            </div>

            <div className="space-y-8">
              {isSuccess ? (
                <div className="py-20 flex flex-col items-center justify-center animate-in zoom-in-90 duration-500">
                  <CheckCircle2 size={100} className="text-emerald-400 mb-8" />
                  <h4 className="text-3xl font-mystic text-white mb-4">전송 완료</h4>
                  <p className="text-purple-200 text-center opacity-70">당신의 에너지가 마스터에게 전달되었습니다.<br/>검토 후 개별 연락 드리겠습니다.</p>
                  <button onClick={() => setShowUpload(false)} className="mt-12 px-12 py-5 bg-[#d4af37] text-[#0f051d] rounded-full font-black text-xl hover:brightness-110 transition-all">확인</button>
                </div>
              ) : (
                <>
                  <input 
                    type="file" 
                    accept="video/*" 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleFileSelect} 
                  />
                  
                  <div 
                    onClick={() => !isUploading && fileInputRef.current?.click()}
                    className={`border-4 border-dashed rounded-[3rem] p-12 md:p-20 flex flex-col items-center justify-center group transition-all cursor-pointer ${
                      selectedFile ? 'border-emerald-400/40 bg-emerald-400/5' : 'border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:bg-white/5'
                    } ${isUploading ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    {selectedFile ? (
                      <>
                        <FileVideo size={56} className="text-emerald-400 mb-6" />
                        <p className="font-bold text-white text-lg mb-2">{selectedFile.name}</p>
                        <p className="text-emerald-400/60 text-sm font-black uppercase tracking-widest">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB Ready</p>
                      </>
                    ) : (
                      <>
                        <Upload size={56} className="text-[#d4af37]/30 mb-6 group-hover:text-[#d4af37] group-hover:animate-bounce" />
                        <p className="font-black text-[#d4af37] tracking-widest uppercase text-sm opacity-60 group-hover:opacity-100 text-center">Select Energy Record (Video)</p>
                      </>
                    )}
                  </div>

                  {isUploading && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-end text-[#d4af37] font-black text-xs uppercase tracking-widest">
                        <span>Transmitting Kinetic Data...</span>
                        <span>{Math.round(uploadProgress)}%</span>
                      </div>
                      <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden border border-[#d4af37]/10">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-600 via-[#d4af37] to-amber-500 transition-all duration-300" 
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {!isUploading && (
                    <div className="space-y-6">
                      <input type="text" className="w-full px-10 py-6 bg-black/40 border border-[#d4af37]/20 rounded-3xl outline-none focus:ring-4 focus:ring-[#d4af37]/10 transition-all font-bold text-white placeholder:text-purple-300/30 text-lg" placeholder="기적의 테마 (예: 20년 역행의 기록)" />
                      <button 
                        onClick={startUpload}
                        disabled={!selectedFile}
                        className="w-full py-8 bg-[#d4af37] text-[#0f051d] rounded-full font-black text-2xl hover:brightness-110 shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        마스터 검토 신청
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {activeVideo && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#0f051d]/95 backdrop-blur-3xl" onClick={() => setActiveVideo(null)}></div>
          <div className="relative z-10 w-full max-w-6xl aspect-video bg-black rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(139,92_246,0.3)] border border-[#d4af37]/20">
            <button onClick={() => setActiveVideo(null)} className="absolute top-12 right-12 text-white z-20 bg-white/10 p-4 rounded-full backdrop-blur-md hover:bg-white/20 transition-all"><X size={32}/></button>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <Activity size={100} className="text-[#d4af37] mb-8 animate-pulse" />
              <h4 className="text-3xl font-mystic text-[#d4af37] tracking-widest gold-glow leading-tight">{activeVideo}</h4>
              <p className="text-purple-400 mt-6 tracking-[0.5em] uppercase text-xs opacity-60">Streaming Divine Resonance...</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const AcademySection = () => {
  const curriculum = [
    {
      title: "에너지 철학 계승",
      icon: <Atom size={32} className="text-[#d4af37]" />,
      desc: "인류 최고의 비기인 인체 운동에너지 법칙을 당신의 영혼에 각인시킵니다."
    },
    {
      title: "판독 비급 전수",
      icon: <Eye size={32} className="text-purple-400" />,
      desc: "타인의 에너지 실패 원인을 눈빛과 수치만으로 꿰뚫어 보는 법을 마스터합니다."
    },
    {
      title: "성소 환경 설계",
      icon: <Mountain size={32} className="text-amber-400" />,
      desc: "에너지가 자생하는 신성한 성소(Sanctuary)를 설계하고 구축하는 전수자가 됩니다."
    }
  ];

  return (
    <section id="academy" className="py-40 bg-[#1a0b2e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-28 items-center text-center lg:text-left">
          <div className="lg:w-1/2">
            <h2 className="text-[#d4af37] font-mystic font-bold mb-8 tracking-[0.5em] uppercase flex items-center justify-center lg:justify-start gap-5 text-sm gold-glow">
              <span className="w-16 h-px bg-[#d4af37]/30"></span> THE MASTER'S LINEAGE
            </h2>
            <h3 className="text-5xl md:text-7xl font-mystic font-bold text-white mb-14 leading-tight tracking-tight">
              멘토 장인 <br />
              <span className="text-[#d4af37] italic underline underline-offset-8 decoration-[#d4af37]/30">비기 전수</span>
            </h3>
            <p className="text-purple-200 text-2xl mb-16 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-80">
              기술을 넘어서는 계승입니다. <br className="hidden md:block" />
              세상을 치유하는 <strong className="text-[#d4af37]">황금빛 에너지 마스터</strong>로 <br className="hidden md:block" /> 거듭나십시오.
            </p>
            <button className="px-14 py-8 bg-[#d4af37] text-[#0f051d] rounded-full font-black text-2xl hover:brightness-110 transition-all shadow-[0_0_50px_rgba(212,175,55,0.3)] active:scale-95 transform hover:-translate-y-1">
              비기 전수 입학 신청
            </button>
          </div>
          
          <div className="lg:w-1/2 space-y-12 w-full text-left">
            {curriculum.map((item, idx) => (
              <div key={idx} className="group p-12 rounded-[4rem] bg-white/5 border border-[#d4af37]/10 hover:border-[#d4af37]/50 hover:bg-white/10 hover:shadow-[0_40px_100px_rgba(212,175,55,0.1)] transition-all duration-700 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="p-7 bg-[#1a0b2e] rounded-[2rem] shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#d4af37]/20 transition-all duration-500 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-3xl font-mystic font-bold text-[#d4af37] mb-5 leading-tight">{item.title}</h5>
                    <p className="text-purple-100 font-light leading-relaxed text-lg opacity-70">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AIConsultation = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAISearch = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `당신은 "내몸애맞게"의 PRONOIA 인체 운동 에너지 마스터 멘토입니다. 
        사용자의 고민: "${prompt}". 
        이 고민을 "인체 운동 에너지 실패"의 관점에서 해석하고 조언해주세요. 
        한국어로 300자 내외로 매우 신비스럽고 전문적인 어조로 작성하세요.`
      });
      setResponse(res.text || "에너지 통신에 지연이 발생했습니다.");
    } catch (err) {
      setResponse("신비로운 에너지가 일시적으로 차단되었습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-40 bg-[#0f051d]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a0b2e] rounded-[5rem] p-12 md:p-24 text-white border border-[#d4af37]/20 shadow-[0_0_100px_rgba(139,92_246,0.1)] relative overflow-hidden text-center">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full"></div>
          <div className="relative z-10 mb-16">
            <div className="inline-block p-4 bg-[#d4af37]/10 rounded-full mb-8 border border-[#d4af37]/20">
                <Sparkles size={32} className="text-[#d4af37] animate-pulse" />
            </div>
            <h3 className="text-4xl md:text-6xl font-mystic font-bold mb-8 italic text-[#d4af37] gold-glow leading-tight">AI 에너지 영문(靈問)</h3>
            <p className="text-purple-200 font-light text-xl max-w-2xl mx-auto opacity-70 leading-relaxed">현재 당신의 에너지적 고통을 들려주십시오. <br/> 마스터의 통찰이 깃든 해답을 전합니다.</p>
          </div>
          <div className="relative z-10 space-y-10 text-left">
            <textarea 
              className="w-full bg-black/40 border border-[#d4af37]/20 rounded-[3rem] p-10 text-xl text-white focus:ring-4 focus:ring-[#d4af37]/10 outline-none transition-all resize-none h-60 font-light placeholder:text-purple-300/20 shadow-inner"
              placeholder="당신의 고뇌를 적어주십시오..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button 
              onClick={handleAISearch}
              disabled={loading}
              className="w-full py-8 bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:brightness-110 text-[#0f051d] rounded-full font-black text-2xl flex items-center justify-center gap-5 transition-all disabled:opacity-50 shadow-[0_0_50px_rgba(212,175,55,0.3)] transform active:scale-95 hover:-translate-y-1"
            >
              {loading ? "에너지 주파수 공명 중..." : "마스터의 목소리 듣기"} 
            </button>
            {response && (
              <div className="mt-20 p-10 md:p-14 bg-[#0f051d]/60 rounded-[4rem] border border-[#d4af37]/30 animate-in fade-in slide-in-from-bottom-10 duration-1000 shadow-[0_0_30px_rgba(212,175,55,0.1)] backdrop-blur-md">
                <div className="flex items-center gap-5 mb-10 text-[#d4af37] font-mystic font-bold tracking-[0.3em] text-xl gold-glow justify-center lg:justify-start">
                  <PronoiaLogo className="w-10 h-10" /> MASTER'S ORACLE
                </div>
                <p className="text-purple-50 leading-relaxed font-light text-xl md:text-2xl whitespace-pre-wrap italic text-center lg:text-left">{response}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-40 bg-[#0f051d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-start">
          <div className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            <h2 className="text-[#d4af37] font-mystic font-bold mb-10 tracking-[0.5em] uppercase text-sm gold-glow">THE INITIATION</h2>
            <h3 className="text-6xl font-mystic font-bold text-white mb-12 italic leading-tight">마스터 접견</h3>
            <p className="text-purple-300 mb-20 font-light text-2xl leading-relaxed opacity-70">운명의 궤적을 바꿀 <br />마지막 기회를 잡으십시오.</p>
            <div className="space-y-12 w-full max-w-sm">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-[#1a0b2e] rounded-3xl flex items-center justify-center text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 group-hover:bg-[#d4af37] group-hover:text-[#0f051d] transition-all duration-300 shrink-0"><Smartphone size={28} /></div>
                <div className="text-left">
                  <p className="text-[11px] text-[#d4af37]/50 font-black uppercase tracking-[0.3em] mb-2 leading-none">Sacred Line</p>
                  <p className="text-3xl font-bold text-white leading-none">010-5078-5320</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-[#1a0b2e] rounded-3xl flex items-center justify-center text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-[#d4af37]/20 group-hover:bg-[#d4af37] group-hover:text-[#0f051d] transition-all duration-300 shrink-0"><Compass size={28} /></div>
                <div className="text-left">
                  <p className="text-[11px] text-[#d4af37]/50 font-black uppercase tracking-[0.3em] mb-2 leading-none">Temple Office</p>
                  <p className="text-2xl font-bold text-white leading-tight">경기도 여주시 우암로 135-20 1층</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 bg-[#1a0b2e] rounded-[5rem] p-10 md:p-16 lg:p-24 border border-[#d4af37]/20 shadow-2xl backdrop-blur-sm w-full">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                 <label className="text-[11px] font-black text-[#d4af37] uppercase tracking-widest ml-1 opacity-60">Seeker Name</label>
                 <input type="text" className="w-full px-8 py-5 bg-black/40 border border-[#d4af37]/20 rounded-2xl outline-none focus:ring-4 focus:ring-[#d4af37]/10 text-xl font-bold text-white transition-all placeholder:text-purple-300/10" placeholder="당신의 이름" />
              </div>
              <div className="space-y-4">
                 <label className="text-[11px] font-black text-[#d4af37] uppercase tracking-widest ml-1 opacity-60">Sacred Phone</label>
                 <input type="tel" className="w-full px-8 py-5 bg-black/40 border border-[#d4af37]/20 rounded-2xl outline-none focus:ring-4 focus:ring-[#d4af37]/10 text-xl font-bold text-white transition-all placeholder:text-purple-300/10" placeholder="연락처" />
              </div>
              <div className="sm:col-span-2 space-y-4">
                 <label className="text-[11px] font-black text-[#d4af37] uppercase tracking-widest ml-1 opacity-60">Spiritual Inquiry</label>
                 <textarea className="w-full px-8 py-8 bg-black/40 border border-[#d4af37]/20 rounded-[2.5rem] outline-none focus:ring-4 focus:ring-[#d4af37]/10 text-xl h-48 resize-none font-light text-white transition-all placeholder:text-purple-300/10" placeholder="문의 내용을 입력하세요"></textarea>
              </div>
              <button type="submit" className="sm:col-span-2 w-full py-8 bg-[#d4af37] text-[#0f051d] rounded-full font-black text-2xl hover:brightness-110 shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-2 active:scale-95">마스터 접견 예약 완료</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: '안녕하십니까. 프로노이아 인체 운동 에너지 센터에 오신 것을 환영합니다. 무엇을 도와드릴까요?' }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatSession, setChatSession] = useState<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const initChat = async () => {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `"내몸애맞게"의 PRONOIA 인체 운동 에너지 마스터 멘토입니다. 
          25년의 연구, 23,000명의 데이터, 100억 이상의 투자를 통해 검증된 인체 운동 에너지 원리를 바탕으로 상담합니다. 
          모든 문제는 인체 운동 에너지 실패에 기인하며, 이를 해결하기 위한 환경과 조건을 안내합니다.
          어조는 매우 정중하고 신비로우며, 깊은 통찰력을 가진 마스터처럼 답변하세요. 한국어만 사용합니다.`
        }
      });
      setChatSession(chat);
    };
    initChat();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || loading || !chatSession) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const result = await chatSession.sendMessage({ message: userMsg });
      const responseText = result.text || "에너지 통신이 고르지 못합니다. 다시 말씀해 주시겠습니까?";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "우주의 주파수가 불안정합니다. 잠시 후 다시 시도해 주십시오." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-[350px] md:w-[420px] h-[550px] glass-mystic rounded-[3rem] overflow-hidden flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-[#d4af37]/30 animate-in slide-in-from-bottom-10 duration-500">
          <div className="p-8 bg-gradient-to-r from-[#1a0b2e] to-[#2d1b4d] border-b border-[#d4af37]/20 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-[#d4af37] p-2 rounded-xl">
                <PronoiaLogo className="w-5 h-5 text-[#0f051d]" />
              </div>
              <div>
                <h4 className="font-mystic text-[#d4af37] font-bold tracking-widest text-sm leading-none">MASTER AI</h4>
                <p className="text-[9px] text-purple-300 uppercase font-black tracking-widest mt-1 opacity-60">Kinetic Intelligence</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#d4af37]/50 hover:text-[#d4af37] p-2 hover:bg-white/5 rounded-full transition-all">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-8 space-y-6 custom-scrollbar bg-black/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#d4af37] text-[#0f051d] font-bold rounded-tr-none' 
                    : 'bg-white/5 border border-[#d4af37]/20 text-purple-50 font-light rounded-tl-none backdrop-blur-md'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-[#d4af37]/20 p-5 rounded-[2rem] rounded-tl-none">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 bg-black/40 border-t border-[#d4af37]/10 flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="마스터에게 질문하십시오..."
              className="flex-grow bg-white/5 border border-[#d4af37]/20 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all text-sm placeholder:text-purple-300/20"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="p-4 bg-[#d4af37] hover:brightness-110 text-[#0f051d] rounded-2xl transition-all disabled:opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#d4af37] text-[#0f051d] flex items-center justify-center shadow-[0_10px_30px_rgba(212,175,55,0.5)] transform transition-all hover:scale-110 active:scale-95 group relative ${isOpen ? 'rotate-90' : ''}`}
      >
        <div className="absolute inset-0 rounded-full border-4 border-[#d4af37] animate-ping opacity-20"></div>
        {isOpen ? <X size={32} /> : <div className="flex flex-col items-center">
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
          <Sparkles size={14} className="absolute -top-1 -right-1 animate-pulse" />
        </div>}
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0f051d] py-28 border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-14 pb-20 border-b border-[#d4af37]/10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-[#d4af37] p-3 rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <PronoiaLogo className="w-10 h-10 text-[#0f051d]" />
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-mystic font-bold text-[#d4af37] tracking-widest gold-glow leading-none">PRONOIA</span>
              <span className="text-[10px] text-purple-300 uppercase font-black tracking-[0.4em] block mt-2 opacity-60 leading-none">내몸애맞게 : Universal Kinetic Intelligence</span>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0f051d] transition-all shadow-sm border border-[#d4af37]/20 active:scale-90"><MessageSquare size={24} /></a>
            <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0f051d] transition-all shadow-sm border border-[#d4af37]/20 active:scale-90"><Sun size={24} /></a>
            <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0f051d] transition-all shadow-sm border border-[#d4af37]/20 active:scale-90"><Leaf size={24} /></a>
          </div>
        </div>
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[12px] font-bold text-purple-300 uppercase tracking-widest gap-6 opacity-40 text-center">
          <p>© 2024 (주)내몸애맞게 PRONOIA Program. The Master's Secret. All rights reserved.</p>
          <div className="flex gap-10">
              <a href="#" className="hover:text-[#d4af37] transition-colors">Divine Privacy</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Temple Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ScientificValidation />
        <OperatingSystemSection />
        <PhilosophySection />
        <MentoringProcess />
        <CaseStudiesSection />
        <AcademySection />
        <AIConsultation />
        <ContactSection />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
