# FOOD2 Projekt

## Projekti Käivitamine

1. **Node.js Moodulite Paigaldamine**:
   - Laadige alla ja paigaldage vajalikud moodulid, käivitades terminalis järgmise käsu:
     ```bash
     npm install
     ```

2. **Projekti Ümberpaigutamine**:
   - Liigutage kogu projektikaust (FOOD2) kausta `C:\xampp7.4\htdocs`.

3. **Projekti Käivitamine**:
   - Avage terminal ja navigeerige kausta `C:\xampp7.4\htdocs\FOOD2`.
   - Käivitage järgmine käsk, et käivitada JSON-server, mis jälgib `db.json` faili:
     ```bash
     npx json-server --watch db.json
     ```

## Välised Paketid

Projekti jaoks kasutatud välised paketid võivad hõlmata:

- **json-server**: Simuleerib RESTful API-d, et võimaldada lihtsat andmehaldust.
- **webpack**: Moodulite ja ressursside haldamiseks ja pakendamiseks.
- **babel**: Modernse JavaScripti koodi transpileerimiseks vanemate brauserite jaoks.
- **axios**: HTTP-päringute tegemiseks.

## Kokkuvõte

Käivitamiseks tuleb esmalt paigaldada vajalikud Node.js moodulid, seejärel viia projekt õigele teele ning lõpuks käivitada JSON-server.
