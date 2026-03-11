import React, { useState, useEffect } from 'react';
import { Users, Wand2, Printer, Trash2, Trophy, CheckCircle2, AlertTriangle, Dices, Eraser, Info } from 'lucide-react';

export default function App() {
  // 1. VÝCHOZÍ STRUKTURA ODDÍLŮ
  const defaultOddily = [
    { id: 1, pohlavi: 'Kluci', vek: 'Nejstarší', deti: [] },
    { id: 2, pohlavi: 'Holky', vek: 'Nejstarší', deti: [] },
    { id: 3, pohlavi: 'Kluci', vek: 'Starší', deti: [] },
    { id: 4, pohlavi: 'Holky', vek: 'Starší', deti: [] },
    { id: 5, pohlavi: 'Kluci', vek: 'Mladší', deti: [] },
    { id: 6, pohlavi: 'Holky', vek: 'Mladší', deti: [] },
    { id: 7, pohlavi: 'Kluci', vek: 'Nejmladší', deti: [] },
    { id: 8, pohlavi: 'Holky', vek: 'Nejmladší', deti: [] }
  ];

  // 2. NAČTENÍ DAT Z PAMĚTI PROHLÍŽEČE PŘI STARTU
  const [oddily, setOddily] = useState(() => {
    const ulozenaData = localStorage.getItem('taborRozdelovacData');
    if (ulozenaData) {
      try {
        return JSON.parse(ulozenaData);
      } catch (e) {
        return defaultOddily;
      }
    }
    return defaultOddily;
  });

  const [vysledneDruziny, setVysledneDruziny] = useState([]);
  const [pocetDruzin, setPocetDruzin] = useState(8);
  const [showModal, setShowModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [showEmptyWarningModal, setShowEmptyWarningModal] = useState(false);
  const [pocetTestovacichDeti, setPocetTestovacichDeti] = useState(85);

  // POMOCNÝ VÝPOČET CELKOVÉHO POČTU DĚTÍ - automaticky se aktualizuje při změně state
  const celkemDetiVSeznamech = oddily.reduce((sum, o) => sum + o.deti.length, 0);

  // 3. AUTOMATICKÉ UKLÁDÁNÍ PŘI KAŽDÉ ZMĚNĚ
  useEffect(() => {
    localStorage.setItem('taborRozdelovacData', JSON.stringify(oddily));
  }, [oddily]);

  const barvyDruzin = [
    { jmeno: 'Žlutá', bg: 'bg-yellow-400', text: 'text-yellow-950', border: 'border-yellow-200', light: 'bg-yellow-50' },
    { jmeno: 'Zelená', bg: 'bg-green-500', text: 'text-white', border: 'border-green-200', light: 'bg-green-50' },
    { jmeno: 'Modrá', bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-200', light: 'bg-blue-50' },
    { jmeno: 'Červená', bg: 'bg-red-500', text: 'text-white', border: 'border-red-200', light: 'bg-red-50' },
    { jmeno: 'Černá', bg: 'bg-gray-900', text: 'text-white', border: 'border-gray-300', light: 'bg-gray-50' },
    { jmeno: 'Fialová', bg: 'bg-purple-600', text: 'text-white', border: 'border-purple-200', light: 'bg-purple-50' },
    { jmeno: 'Bílá', bg: 'bg-slate-50', text: 'text-slate-900', border: 'border-slate-300', light: 'bg-white' },
    { jmeno: 'Duhová', bg: 'bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400', text: 'text-white', border: 'border-indigo-200', light: 'bg-indigo-50' },
  ];

  const kluciJmena = ['Adam', 'Marek', 'Filip', 'Lukáš', 'David', 'Tomáš', 'Jan', 'Petr', 'Ondřej', 'Matěj', 'Jakub', 'Šimon', 'Michal', 'Vojta', 'Štěpán', 'Daniel', 'Kryštof', 'Martin', 'Richard', 'Alex', 'Samuel', 'Tobiáš', 'Mikuláš', 'Prokop', 'Jáchym', 'Hugo', 'Oliver', 'Teodor', 'Bruno', 'Erik', 'Robin', 'Max', 'Denis', 'Patrik', 'Antonín', 'František', 'Vítek', 'Pepík', 'Toník', 'Ládík', 'Kubík', 'Daneček', 'Honzík', 'Filípek', 'Mareček', 'Adámek', 'Míša', 'Sebík'];
  const holkyJmena = ['Eliška', 'Anna', 'Tereza', 'Adéla', 'Karolína', 'Natálie', 'Lucie', 'Barbora', 'Kristýna', 'Kateřina', 'Verunka', 'Viktorka', 'Sofie', 'Amálie', 'Julie', 'Ema', 'Laura', 'Klára', 'Anežka', 'Nela', 'Sára', 'Jolana', 'Alice', 'Beáta', 'Mia', 'Ella', 'Lea', 'Inna', 'Agáta', 'Stella', 'Nina', 'Izabela', 'Mariana', 'Rozálie', 'Elena', 'Hana', 'Anička', 'Elinka', 'Terezka', 'Adélka', 'Kája', 'Natálka', 'Lucinka', 'Barunka', 'Kristýnka', 'Kačenka', 'Verunka', 'Viktorka'];
  const prijmeniKluci = ['Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Horák', 'Němec', 'Pokorný', 'Marek', 'Pospíšil', 'Hájek', 'Král', 'Jelínek', 'Růžička', 'Beneš', 'Fiala', 'Sedláček', 'Kříž', 'Zeman', 'Kolář', 'Navrátil', 'Čermák', 'Urban', 'Vaněk', 'Blažek', 'Kovář', 'Bartoš', 'Vlček', 'Polák', 'Kopecký', 'Konečný', 'Malý', 'Holub', 'Staněk', 'Štěpánek', 'Dostál', 'Kadlec', 'Soukup', 'Mareš', 'Sýkora', 'Valent', 'Moravec', 'Vávra', 'Matoušek', 'Bláha', 'Mach', 'Šmíd', 'Dušek', 'Janda', 'Hrubý', 'Látal', 'Toman', 'Liška', 'Vojtěch', 'Žák', 'Kroupa', 'Pavlík', 'Jaroš', 'Vacek', 'Vítek', 'Macháček', 'Bílek', 'Beran', 'Říha', 'Šimek', 'Horáček', 'Slaný', 'Zelený', 'Tichý'];
  const prijmeniHolky = prijmeniKluci.map(p => p.endsWith('ý') ? p.slice(0, -1) + 'á' : p + 'ová');

  const vygenerovatData = () => {
    let rozdeleni = Array(8).fill(Math.floor(pocetTestovacichDeti / 8));
    for (let i = 0; i < pocetTestovacichDeti % 8; i++) {
      rozdeleni[i]++;
    }
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const noveOddily = oddily.map((oddil, index) => {
      const pocet = rozdeleni[index];
      const noveDeti = [];
      for (let i = 0; i < pocet; i++) {
        const jmeno = oddil.pohlavi === 'Kluci' ? getRandom(kluciJmena) : getRandom(holkyJmena);
        const prijmeni = oddil.pohlavi === 'Kluci' ? getRandom(prijmeniKluci) : getRandom(prijmeniHolky);
        noveDeti.push(`${jmeno} ${prijmeni}`);
      }
      return { ...oddil, deti: noveDeti };
    });
    setOddily(noveOddily);
    setVysledneDruziny([]);
  };

  const potvrditVymazani = () => {
    setOddily(defaultOddily);
    setVysledneDruziny([]);
    setShowClearModal(false);
  };

  const pridejDite = (oddilId, jmeno) => {
    if (!jmeno.trim()) return;
    setOddily(prev => prev.map(o => o.id === oddilId ? { ...o, deti: [...o.deti, jmeno.trim()] } : o));
  };

  const smazDite = (oddilId, index) => {
    setOddily(prev => prev.map(o => o.id === oddilId ? { ...o, deti: o.deti.filter((_, i) => i !== index) } : o));
  };

  const handleRozdelitClick = () => {
    const maPrazdnyOddil = oddily.some(o => o.deti.length === 0);
    if (maPrazdnyOddil) {
      setShowEmptyWarningModal(true);
    } else {
      setShowModal(true);
    }
  };

  const potvrditRozdeleni = () => {
    generovatDruziny();
    setShowModal(false);
    setShowEmptyWarningModal(false);
  };

  const generovatDruziny = () => {
    const noveDruziny = Array.from({ length: pocetDruzin }, () => []);
    oddily.forEach((oddil, oIdx) => {
      const deti = [...oddil.deti];
      const N = deti.length;
      if (N === 0) return;
      let chunks = [];
      let pocetParu = N - pocetDruzin;
      let pocetSingles = pocetDruzin - pocetParu;
      if (pocetParu < 0) { pocetParu = 0; pocetSingles = N; }
      if (pocetSingles < 0) { pocetSingles = 0; pocetParu = pocetDruzin; }
      let aktualniIndex = 0;
      for (let i = 0; i < pocetSingles; i++) {
        chunks.push([{ jmeno: deti[aktualniIndex], oddil: oddil.id, rank: aktualniIndex + 1, pohlavi: oddil.pohlavi }]);
        aktualniIndex++;
      }
      let left = aktualniIndex;
      let right = N - 1;
      for (let i = 0; i < pocetParu && left < right; i++) {
        chunks.push([
          { jmeno: deti[left], oddil: oddil.id, rank: left + 1, pohlavi: oddil.pohlavi },
          { jmeno: deti[right], oddil: oddil.id, rank: right + 1, pohlavi: oddil.pohlavi }
        ]);
        left++;
        right--;
      }
      while (left <= right) {
        chunks[left % pocetDruzin].push({ jmeno: deti[left], oddil: oddil.id, rank: left + 1, pohlavi: oddil.pohlavi });
        left++;
      }
      while (chunks.length < pocetDruzin) {
        chunks.push([]);
      }
      chunks.forEach((chunk, cIdx) => {
        const dIdx = (cIdx + oIdx) % pocetDruzin;
        chunk.forEach(dite => noveDruziny[dIdx].push(dite));
      });
    });
    setVysledneDruziny(noveDruziny);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6 md:p-12 font-sans print:bg-white print:p-0 relative">
      
      {/* MODÁLNÍ OKNA */}
      {showEmptyWarningModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowEmptyWarningModal(false)}></div>
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-4 mb-6 text-orange-500">
              <div className="bg-orange-100 p-3 sm:p-4 rounded-2xl"><AlertTriangle size={32} /></div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight text-slate-800">Prázdné oddíly!</h3>
            </div>
            <p className="text-slate-600 text-base sm:text-lg font-medium mb-8 leading-relaxed">Některé oddíly neobsahují <strong className="text-orange-600">žádné děti</strong>. Algoritmus proběhne, ale rovnováha může být narušena. Opravdu chcete pokračovat?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button onClick={() => setShowEmptyWarningModal(false)} className="px-6 py-4 rounded-2xl font-bold text-slate-500 hover:bg-slate-100 transition-all uppercase w-full sm:w-auto">Doplnit děti</button>
              <button onClick={potvrditRozdeleni} className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-orange-600 active:scale-95 transition-all shadow-xl uppercase flex items-center justify-center gap-2 w-full sm:w-auto"><Wand2 size={20} /> Přesto rozdělit</button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-4 mb-6 text-amber-500">
              <div className="bg-amber-100 p-3 sm:p-4 rounded-2xl"><AlertTriangle size={32} /></div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight text-slate-800">Opravdu rozdělit?</h3>
            </div>
            <p className="text-slate-600 text-base sm:text-lg font-medium mb-8 leading-relaxed">Máte zkontrolovaná jména? Tento krok vygeneruje nové družiny a aktuální rozdělení přemaže. Akci nelze vrátit zpět.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button onClick={() => setShowModal(false)} className="px-6 py-4 rounded-2xl font-bold text-slate-500 hover:bg-slate-100 transition-all uppercase w-full sm:w-auto">Zrušit</button>
              <button onClick={potvrditRozdeleni} className="bg-yellow-400 text-yellow-950 px-8 py-4 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl uppercase flex items-center justify-center gap-2 w-full sm:w-auto"><Wand2 size={20} /> Pokračovat</button>
            </div>
          </div>
        </div>
      )}

      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowClearModal(false)}></div>
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-4 mb-6 text-red-500">
              <div className="bg-red-100 p-3 sm:p-4 rounded-2xl"><Trash2 size={32} /></div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight text-slate-800">Vymazat vše?</h3>
            </div>
            <p className="text-slate-600 text-base sm:text-lg font-medium mb-8 leading-relaxed">Opravdu chcete vymazat všechna zadaná jména z oddílů a zrušit aktuální družiny? <strong className="text-red-500 font-black">Tuto akci nelze vrátit zpět</strong>.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button onClick={() => setShowClearModal(false)} className="px-6 py-4 rounded-2xl font-bold text-slate-500 hover:bg-slate-100 transition-all uppercase w-full sm:w-auto">Zrušit</button>
              <button onClick={potvrditVymazani} className="bg-red-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-red-600 active:scale-95 transition-all shadow-xl uppercase flex items-center justify-center gap-2 w-full sm:w-auto"><Trash2 size={20} /> Vymazat tabulky</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1600px] mx-auto bg-white shadow-2xl rounded-3xl sm:rounded-[3rem] overflow-hidden print:shadow-none print:border-none print:rounded-none">
        
        {/* HEADER S PODPISEM */}
        <div className="bg-slate-900 p-6 sm:p-10 text-white flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 print:hidden border-b-4 border-blue-600">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="bg-blue-600 p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-500/20">
              <Users className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black uppercase italic tracking-tighter leading-none flex items-center gap-4">
                Rozřazovač Družin
              </h1>
              <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs mt-2 opacity-80 italic">
                vytvořil Karel Špitálník pro II. Běh
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
            <div className="bg-slate-800 p-2 pl-4 sm:pl-5 rounded-xl sm:rounded-2xl flex items-center justify-between sm:justify-start gap-4 border border-slate-700">
              <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">Počet družin</span>
              <div className="flex gap-1 sm:gap-2">
                {[6, 7, 8].map(n => (
                  <button key={n} onClick={() => setPocetDruzin(n)} className={`px-4 sm:px-5 py-2 rounded-lg sm:rounded-xl font-black transition-all ${pocetDruzin === n ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>{n}</button>
                ))}
              </div>
            </div>
            <button onClick={handleRozdelitClick} className="bg-yellow-400 text-black px-6 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-[2rem] font-black hover:scale-105 active:scale-95 transition-all shadow-xl uppercase text-lg sm:text-2xl flex items-center justify-center gap-3 sm:gap-4 border-b-4 border-yellow-600 w-full sm:w-auto"><Wand2 className="w-6 h-6 sm:w-8 sm:h-8" /> Rozdělit děti</button>
          </div>
        </div>

        <div className="p-4 sm:p-8 md:p-12">
          {/* KONTROLNÍ PANEL */}
          <div className="bg-slate-50 p-4 rounded-2xl sm:rounded-3xl border border-slate-200 mb-8 sm:mb-10 print:hidden flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-sm">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex items-center bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <span className="bg-slate-100 px-3 sm:px-4 py-3 text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest border-r border-slate-200 whitespace-nowrap">Test dětí:</span>
                <input type="number" value={pocetTestovacichDeti} onChange={(e) => setPocetTestovacichDeti(Number(e.target.value))} className="w-full sm:w-20 p-2 text-center font-black text-slate-700 outline-none" />
              </div>
              <button onClick={vygenerovatData} className="bg-blue-100 text-blue-700 border border-blue-200 px-4 sm:px-6 py-3 rounded-xl font-black text-[10px] sm:text-sm hover:bg-blue-200 transition-all uppercase flex items-center justify-center gap-2"><Dices size={16} className="sm:w-[18px] sm:h-[18px]"/> Vygenerovat náhodně</button>
            </div>
            <button onClick={() => setShowClearModal(true)} className="text-red-500 font-bold px-4 sm:px-6 py-3 rounded-xl hover:bg-red-50 transition-all uppercase flex items-center justify-center gap-2 text-[10px] sm:text-sm"><Eraser size={16} className="sm:w-[18px] sm:h-[18px]"/> Vymazat tabulky</button>
          </div>

          {/* EDITOR ODDÍLŮ - SOUČET CELKEM A PERMANENTNÍ NÁPOVĚDA */}
          <div className="mb-12 sm:mb-16 print:hidden">
            <div className="mb-6 sm:mb-8 flex flex-col items-start">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 uppercase flex items-center gap-2 sm:gap-3 italic tracking-tight underline decoration-blue-500 decoration-4 underline-offset-8">
                  <Trophy className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8" /> Seznamy dětí v oddílech
                </h2>
                <span className="bg-slate-800 text-white px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl font-black text-[10px] sm:text-xs shadow-lg border border-slate-700">
                    CELKEM: {celkemDetiVSeznamech}
                </span>
              </div>
              
              {/* PERMANENTNÍ TEXT POD NADPISEM */}
              <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-slate-500">
                 <Info size={12} className="sm:w-3.5 sm:h-3.5 text-blue-500" />
                 <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest italic opacity-70">Děti pište od nejlepšího po nejhorší</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {oddily.map(o => (
                <div key={o.id} className={`rounded-2xl sm:rounded-[2.5rem] border-2 p-4 sm:p-6 shadow-lg transition-transform hover:scale-[1.01] ${o.id % 2 === 0 ? 'border-pink-200 bg-pink-50/50' : 'border-blue-200 bg-blue-50/50'}`}>
                  <div className={`flex justify-between items-center mb-4 sm:mb-5 pb-2 sm:pb-3 border-b-2 ${o.id % 2 === 0 ? 'border-pink-100' : 'border-blue-100'}`}>
                    <h3 className={`font-black text-xl sm:text-2xl ${o.id % 2 === 0 ? 'text-pink-700' : 'text-blue-700'}`}>
                      {o.id}. Oddíl 
                      <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm opacity-50 font-black">({o.deti.length})</span>
                    </h3>
                    <span className="text-[8px] sm:text-[10px] font-black opacity-40 uppercase tracking-widest">{o.pohlavi}</span>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <input className="w-full text-base sm:text-lg p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-white bg-white shadow-inner outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400 font-bold transition-all" placeholder="Přidat jméno..." onKeyDown={e => {if(e.key==='Enter'){pridejDite(o.id, e.target.value); e.target.value=''}}} />
                    <div className="space-y-1.5 sm:space-y-2 max-h-[250px] sm:max-h-[350px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
                      {o.deti.map((d, i) => (
                        <div key={i} className="bg-white p-2.5 sm:p-3 rounded-xl flex justify-between items-center group shadow-sm border border-slate-100">
                          <span className="font-bold text-slate-700 text-sm sm:text-lg tracking-tight truncate pr-2"><span className="opacity-30 mr-1 sm:mr-2 italic text-xs sm:text-base">{i+1}.</span>{d}</span>
                          <button onClick={()=>smazDite(o.id, i)} className="text-red-300 hover:text-red-600 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all p-1 flex-shrink-0"><Trash2 size={18} className="sm:w-[22px] sm:h-[22px]"/></button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VÝSLEDKY */}
          {vysledneDruziny.length > 0 && (
            <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t-4 border-slate-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-10 print:hidden">
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">Finální Družiny</h2>
                <button onClick={() => window.print()} className="bg-slate-900 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-black flex items-center justify-center gap-2 sm:gap-3 hover:bg-slate-700 transition shadow-2xl text-base sm:text-xl w-full sm:w-auto"><Printer size={20} className="sm:w-[28px] sm:h-[28px]"/> TISK</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 print:block">
                {vysledneDruziny.map((druzina, idx) => {
                  const kluciCount = druzina.filter(d => d.pohlavi === 'Kluci').length;
                  const holkyCount = druzina.filter(d => d.pohlavi === 'Holky').length;
                  const oddilyStats = Array.from({length: 8}, (_, i) => i + 1).map(id => ({ id, count: druzina.filter(d => d.oddil === id).length })).filter(o => o.count > 0);
                  return (
                    <div key={idx} className={`border-2 rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl transition-all hover:scale-[1.02] flex flex-col mb-6 sm:mb-8 print:mb-0 print:break-after-page print:break-inside-avoid ${barvyDruzin[idx].border} ${barvyDruzin[idx].light}`}>
                      <div className={`${barvyDruzin[idx].bg} ${barvyDruzin[idx].text} p-4 sm:p-6 text-center font-black italic uppercase text-2xl sm:text-3xl print:bg-slate-100 print:text-black`}>Družina {barvyDruzin[idx].jmeno}</div>
                      <div className="p-4 sm:p-8 space-y-2 sm:space-y-3 flex-1">
                        {druzina.sort((a,b) => a.oddil - b.oddil).map((d, i) => (
                          <div key={i} className="flex justify-between items-center border-b-2 border-black/5 pb-2 last:border-0">
                            <div className="flex flex-col overflow-hidden mr-2">
                              <span className={`font-black text-base sm:text-xl tracking-tighter truncate ${d.pohlavi === 'Kluci' ? 'text-blue-800' : 'text-pink-600'}`}>{d.jmeno}</span>
                              <span className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase leading-none mt-0.5 sm:mt-1">Oddíl {d.oddil}</span>
                            </div>
                            <span className="bg-white/60 backdrop-blur-sm text-slate-500 font-black text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl italic shadow-sm border border-black/5 flex-shrink-0">#{d.rank}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-black/5 p-3 sm:p-4 border-t flex flex-col gap-2 sm:gap-3">
                        <div className="text-center text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest sm:tracking-[0.4em]">CELKEM {druzina.length} DĚTÍ</div>
                        <div className="flex justify-center gap-1.5 sm:gap-2">
                          <span className="bg-blue-500/10 text-blue-700 border border-blue-500/20 text-[9px] sm:text-[10px] font-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl uppercase">Kluci: {kluciCount}</span>
                          <span className="bg-pink-500/10 text-pink-700 border border-pink-500/20 text-[9px] sm:text-[10px] font-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl uppercase">Holky: {holkyCount}</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 mt-0.5">{oddilyStats.map(oz => (<span key={oz.id} className="text-[8px] sm:text-[9px] font-black text-slate-500 bg-black/5 px-1.5 sm:px-2 py-0.5 rounded-md uppercase">O{oz.id}: {oz.count}x</span>))}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 8px; } 
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } 
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; } 
        @media print { 
          .print\\:hidden { display: none !important; } 
          .print\\:block { display: block !important; }
          .print\\:break-after-page { break-after: page; page-break-after: always; }
          .print\\:break-inside-avoid { break-inside: avoid; page-break-inside: avoid; }
          body { background: white; margin: 0; padding: 0; } 
          @page { size: A4; margin: 1cm; } 
          .max-w-\\[1600px\\] { max-width: 100% !important; margin: 0 !important; }
        }
      `}} />
    </div>
  );
}