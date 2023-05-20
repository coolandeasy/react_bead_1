# Függvénytesztelő komponens készítése React-ben
*Kliensoldali webprogramozás 1. beadandó 2022-23-2*

## Kontextus

> Képzeljünk el egy olyan alkalmazást, ahol egy kiírt feladatot kell úgy megoldani, hogy egy JavaScript függvényt írunk
> rá. Pl: "bemenetként adott két szám és add meg az összegüket". A felületen megírjuk a függvényünket (`({a, b}) => a + b`
> szövegként, majd abból igazi JS függvényt készítünk, mindegy, hogyan), majd szeretnénk letesztelni, hogy jó-e a
> megoldásunk. Innen kezdődik a feladat.

## Pontozás

- [X] Keretprogram használata (*1p*)
- [ ] Legalább 4 komponens (*1p*)
- [X] A függvény megjelenítésre került (*1p*)

#### Előre megadott tesztek:

- [ ] Az előre megadott tesztek nevei felsorolásra kerülnek (*1p*)
- [ ] Az előre megadott tesztek egyesével futtathatók, eredményükről vizuális visszajelzést kapunk (*1p*)
- [ ] Az előre megadott tesztek egyszerre is futtathatók, ekkor is megfelelően változnak az egyes tesztek vizuális
  visszajelzései (*1p*)
- [ ] Egy előre megadott teszt sikeres futtatásánál megjenelítésre kerül a kapott pontszám (*1p*)
- [ ] Az összes előre megadott teszt futtatásánál megjelenik az elért összpontszám (*1p*)

#### Egyedi tesztek:

- [ ] Az egyedi tesztek listája megjelenik, sorszámuk és neveik felsorolásával (*1p*)
- [ ] Új egyedi teszt hozzáadása lehetséges (*1p*)
- [ ] Egy egyedi teszt szerkeszthető (*1p*)
- [ ] Egy egyedi teszt törölhető (*1p*)
- [ ] Egy teszt kiválasztásakor (=szerkesztésekor) megjelennek az `input` paraméterben **legfelső szinten** megadott
  szerkezetleírásnak megfelelő mezők. (*1p*)
- [ ] Az `input` paraméterben megadott szerkezet legfelső szintjén lévő **szöveg** típus megfelelően jelenik meg (*1p*)
- [ ] Az `input` paraméterben megadott szerkezet legfelső szintjén lévő **szám** típus megfelelően jelenik meg (*1p*)
- [ ] Az `input` paraméterben megadott szerkezet legfelső szintjén lévő **logikai** típus megfelelően jelenik meg (*1p*)
- [ ] Az `input` paraméterben megadott szerkezet legfelső szintjén lévő **tömb** típus megfelelően jelenik meg,
  lehetőség van új elemeket hozzáadni, meglévőeket szerkeszteni, törölni (*3p*)
- [ ] Az `input` paraméterben megadott szerkezet legfelső szintjén lévő **objektum** típus megfelelően jelenik meg,
  látszanak az objektum mezőnevei, amelyek típusuknak megfelelően szerkeszthetők (*3p*)
- [ ] A megjelenített űrlapmezők kitöltöttsége ellenőrzésre kerül, a hibák listában kiíródnak (*1p*)
- [ ] A hibalista egy elemére kattintva a fókusz a megfelelő elemre ugrik (*1p*)
- [ ] **Tetszőleges** `input` struktúra megjelenítésre kerül rekurzívan (*1p*)
- [ ] Az egyedi tesztek egyesével futtathatók, eredményükről vizuális visszajeltést kapunk (*1p*)
- [ ] Az egyedi tesztek egyszerre is futtathatók, ekkor is megfelelően változnak az egyes tesztek vizuális
  visszajelzései (*1p*)

#### "OK" gomb

- [?] Az "OK" gomb helyes működése (*1p*)

- [ ] Felhasználóbarát működés (*1p*)
- [ ] Igényes megjelenés (*2p*)
- [X] 1 hét késés (*-3p*)
- [ ] 2 hét késés (*-6p*)

```text
Csányi Szabolcs Attila
BDJB68
Kliensoldali webprogramozás - beadandó
Ezt a megoldást a fent írt hallgató küldte be és készítette a Kliensoldali webprogramozás kurzus számonkéréséhez.
Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy használtam harmadik féltől
származó megoldásokat. Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé.
Az Eötvös Loránd Tudományegyetem Hallgatói Követelményrendszere
(ELTE szervezeti és működési szabályzata, II. Kötet, 74/C. §) kimondja, hogy mindaddig,
amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak jelentős részét -
saját munkájaként mutatja be, az fegyelmi vétségnek számít.
A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.
```

## Telepítés

```bash
npm install
```

## Futtatás

```bash
npm run dev
```

## Tesztelés

A tesztelés a futtatással párhuzamosan is történhet. Ezt elsősorban a tanári értékelés megkönnyítésére hoztuk létre, de a hallgatók is láthatják ezt a felületet. Alapvetően a `stories` könyvtárhoz nem kell hozzányúlni. Ha azonban látod, hogyan működik, és saját tesztekkel kiegészítenéd, akkor azt nyugodtan tedd meg. A komponens interfészén azonban változtatni nem szabad!

```bash
npm run storybook
```

## Leírás

A keretprogram egy egyszerű és lecsupaszított alkalmazás Vite-tel létrehozva. A fő `App` komponens egyszerűen csak megjeleníti a `FunctionTester` komponenst. A feladatod ennek a `FunctionTester` komponensnek az elkészítése. A legjobb az lenne, ha a megoldásod a `function-tester` könyvtárba kerülne, és azon belül hoznál létre további fájlokat és könyvtárakat igény szerint.
