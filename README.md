# 🏕️ Táborový Rozřazovač
**Vytvořil Karel Špitálník pro II. Běh**

Chytrá webová aplikace pro spravedlivé a automatické rozdělování dětí do táborových družin. Aplikace využívá pokročilý matematický algoritmus (Logika Tahounů a zrcadlové párování 1+12) pro zajištění absolutní vyrovnanosti týmů napříč věkem, pohlavím i dovednostmi.

## 🌟 Hlavní funkce

* **Spravedlivý algoritmus:** Automaticky balancuje síly v družinách (Top hráči jsou rozděleni, slabší mají oporu).
* **Garantované zastoupení:** Každá družina má zaručený mix všech věkových kategorií a vyrovnaný poměr kluků a holek.
* **Generátor testovacích dat:** Možnost vygenerovat náhodná jména pro rychlé otestování algoritmu.
* **Ochrana proti chybám:** Modální okna pro potvrzení nevratných akcí a upozornění na prázdné oddíly.
* **Print-ready výstup:** Finální rozdělení družin lze jedním kliknutím vytisknout v čistém designu přímo na nástěnku.

## 🧰 Co si musíte stáhnout (Prerekvizity)
Pokud nemáte v počítači žádné programátorské nástroje, musíte si nejprve nainstalovat tyto dva programy

1.  **[Node.js (verze LTS)](https://nodejs.org/)** – Základní prostředí, které umožňuje aplikaci v počítači spustit.
2.  **[Git](https://git-scm.com/downloads)** – Nástroj pro stažení kódu z GitHubu do vašeho počítače.

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
      ```
    ```bash
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
👉 **[Podrobný manuál k algoritmu najdete zde](./taborový_rozdělovač.pdf)**

Algoritmus pracuje v několika krocích pro zajištění maximální spravedlnosti:

### 1. Vstupní data a Ranky
* Děti jsou rozděleny do 8 oddílů podle věku a pohlaví.
* V každém oddílu jsou seřazeny podle výkonnosti (Ranku).
* Rank #1 je nejlepší dítě z oddílu, Rank #N je dovednostně nejslabší.

### 2. Příprava balíčků (Logika rozdělení oddílu)

Při rozdělování algoritmus rozdělí oddíl na tolik „balíčků“, kolik je cílových družin. Využívá k tomu dvě teorie:

* **Logika Tahounů:** Nejsilnější děti (Rank #1, #2...) jdou do balíčku samotné jako jednotlivci, aby tým za svůj oddíl podržely. 
* **Zrcadlové párování (1+12):** Slabší děti jsou spárovány se silnějšími ze středu tabulky (nejlepší ze zbývajících + úplně nejhorší), čímž vzniknou dvojice se stejnou souhrnnou silou.

### 3. Distribuce a Rotace (Snake draft)
* Jakmile jsou balíčky připraveny, jsou rozdávány družinám pomocí rotačního algoritmu. 
* Startovní pozice pro rozdávání se u každého oddílu posouvá (např. 2. oddíl začne od 2. družiny), aby jedna družina nezískala nejlepší děti ze všech kategorií.
* Výsledkem je absolutní promíchání sil a garantované zastoupení všech kategorií v každém týmu.
