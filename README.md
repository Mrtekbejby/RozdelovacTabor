# 🏕️ Táborový Rozřazovač
**Vytvořil Karel Špitálník pro II. Běh**

Tato aplikace neslouží jen k náhodnému zamíchání dětí. [cite_start]Na pozadí běží komplexní matematický algoritmus, který zaručuje absolutní spravedlnost, rovnoměrné rozložení sil a zajišťuje, že žádná družina nebude oproti ostatním ve výhodě[cite: 3].

## 🌟 Hlavní funkce

* [cite_start]**Spravedlivý algoritmus:** Automaticky balancuje síly v družinách tak, aby byly týmy z hlediska výkonnosti naprosto vyrovnané[cite: 3, 43].
* [cite_start]**Garantované zastoupení:** Každá družina má zaručený mix všech věkových kategorií a vyrovnaný poměr kluků a holek[cite: 34, 41].
* **Generátor testovacích dat:** Možnost vygenerovat náhodná jména pro rychlé otestování algoritmu.
* **Ochrana proti chybám:** Modální okna pro potvrzení nevratných akcí a upozornění na prázdné oddíly.
* **Lokální paměť:** Zadaná data se průběžně ukládají do prohlížeče (LocalStorage), takže se při nechtěném obnovení stránky (F5) nic nesmaže.
* **Print-ready výstup:** Finální rozdělení družin lze jedním kliknutím vytisknout v čistém designu přímo na nástěnku.

## 💡 Jak to funguje? (Podrobná logika) [cite_start][cite: 1]

[cite_start]Zde je kompletní vysvětlení logiky, na které je systém postaven[cite: 4]:

### [cite_start]1. Vstupní data [cite: 5]
* [cite_start]Děti jsou předem rozděleny do 8 oddílů podle věku a pohlaví[cite: 6].
* [cite_start]Děti jsou v každém oddílu seřazeny podle výkonnosti (Ranku)[cite: 7].
* [cite_start]Rank #1 označuje nejlepšího z oddílu, zatímco Rank #N je nejslabší[cite: 8, 9].
* [cite_start]Cílem je tyto oddíly rovnoměrně poskládat do zvoleného počtu družin (6, 7 nebo 8)[cite: 10].

### [cite_start]2. Příprava balíčků (Logika rozdělení oddílu) [cite: 11]
[cite_start]Při kliknutí na tlačítko „Rozdělit děti" algoritmus rozdělí první oddíl přesně na tolik „balíčků", kolik je cílových družin[cite: 12]. [cite_start]K tomu používá kombinaci dvou teorií[cite: 13]:
* **A) Logika Tahounů (Kdo jde sám):** Pokud je v oddíle více dětí než družin, algoritmus určí "Tahouny" (nejlepší Ranky #1, #2...). [cite_start]Ty pošle do balíčku samotné, protože jsou dostatečně silní, aby tým podrželi[cite: 14, 15, 16].
* [cite_start]**B) Zrcadlové párování (Teorie 1+12):** Slabší děti algoritmus nikdy nepošle do družiny samotné[cite: 17, 18]. [cite_start]Páruje je s někým lepším ze středu tabulky (např. Rank #5 jde do balíčku s Rankem #10)[cite: 19, 22]. [cite_start]Tím vzniknou dvojice, které mají v součtu vždy stejnou sílu[cite: 23].

### [cite_start]3. Distribuce do družin (Snake draft a Rotace) [cite: 24]
* [cite_start]Jakmile jsou děti z oddílu rozsekány na balíčky, musí se rozdat družinám pomocí Rotačního algoritmu[cite: 25, 26].
* [cite_start]U každého oddílu se startovní pozice pro rozdávání balíčků posune (např. oddíl 1 začne od Žluté družiny, oddíl 2 od Zelené)[cite: 27, 28, 29].
* [cite_start]**Výsledek:** Každá družina má svého "Tahouna" z jiné věkové kategorie a zároveň slabší páry z jiných kategorií[cite: 31].

### [cite_start]4. Garantované zastoupení a extrémy [cite: 32, 33]
* [cite_start]**Všichni zástupci:** Pokud má oddíl alespoň tolik dětí jako je družin, bude v každé družině vždy minimálně jeden zástupce z každého oddílu[cite: 34].
* [cite_start]**Lichý počet dětí:** Prostřední dítě, které nemá pár, je inteligentně přiřazeno k jednomu z balíčků[cite: 36, 37].
* [cite_start]**Nepravidelné počty:** Pokud počet dětí není dělitelný počtem družin, aplikace vytvoří družiny o různé velikosti, přičemž stále zachovává rovnováhu sil[cite: 38].

---

## 🚀 Jak aplikaci nainstalovat a spustit

### 🧰 Co potřebujete mít v PC (Prerekvizity)
* [Node.js](https://nodejs.org/) (verze LTS)
* [Git](https://git-scm.com/)

### 🛠️ Instalace a spuštění
Otevřete terminál a zadejte:
```bash
# Naklonování repozitáře
git clone [https://github.com/Mrtekbejby/RozdelovacTabor.git](https://github.com/Mrtekbejby/RozdelovacTabor.git)
cd RozdelovacTabor

# Instalace knihoven
npm install

# Spuštění aplikace
npm run dev