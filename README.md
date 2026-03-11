# 🏕️ Táborový Rozřazovač

Chytrá webová aplikace pro spravedlivé a automatické rozdělování dětí do táborových družin. Aplikace využívá pokročilý matematický algoritmus (Logika Tahounů a zrcadlové párování 1+12) pro zajištění absolutní vyrovnanosti týmů napříč věkem, pohlavím i dovednostmi.

## 🌟 Hlavní funkce

* **Spravedlivý algoritmus:** Automaticky balancuje síly v družinách (Top hráči jsou rozděleni, slabší mají oporu).
* **Garantované zastoupení:** Každá družina má zaručený mix všech věkových kategorií a vyrovnaný poměr kluků a holek.
* **Generátor testovacích dat:** Možnost vygenerovat náhodná jména pro rychlé otestování algoritmu.
* **Ochrana proti chybám:** Modální okna pro potvrzení nevratných akcí a upozornění na prázdné oddíly.
* **Print-ready výstup:** Finální rozdělení družin lze jedním kliknutím vytisknout v čistém designu přímo na nástěnku.

## 🛠️ Technologie

Aplikace je postavena na moderním front-end stacku:
* [React](https://reactjs.org/) (uživatelské rozhraní)
* [Vite](https://vitejs.dev/) (bleskový build tool)
* [Tailwind CSS](https://tailwindcss.com/) (stylování a design)
* [Lucide React](https://lucide.dev/) (krásné vektorové ikony)

## 🚀 Jak aplikaci nainstalovat a spustit

1.  **Naklonování repozitáře:**
    ```bash
    git clone [https://github.com/Mrtekbejby/RozdelovacTabor.git](https://github.com/Mrtekbejby/RozdelovacTabor.git)
    cd RozdelovacTabor
    ```

2.  **Instalace závislostí:**
    Ujistěte se, že máte nainstalovaný Node.js. Poté spusťte:
    ```bash
    npm install
    ```

3.  **Spuštění pro vývoj (Development server):**
    ```bash
    npm run dev
    ```
    Aplikace poběží na adrese (obvykle `http://localhost:5173`), kterou vám terminál vypíše.

## 💡 Jak to funguje?

Aplikace používá kombinaci několika přístupů:
1.  **Zrcadlové párování:** Nejsilnější dítě z oddílu tvoří pár s tím nejslabším (Rank #1 + Rank #12), aby byl součet jejich "síly" roven průměru.
2.  **Logika Tahounů:** Pokud není možné vytvořit páry pro všechny družiny, do družin vstupují jako jednotlivci výhradně "Tahouni" (děti z vrchní části žebříčku), zatímco slabší děti jsou vždy chráněny v páru.
3.  **Snake draft:** Distribuce balíčků dětí do družin probíhá s rotačním posunem, aby se předešlo nakumulování všech nejlepších dětí v prvních družinách.