### Uruchomienie aplikacji 

1. Otwórz w WebStormie folder `frontend`.
2. Otwórz terminal i pobierz zdefiniowane w `package.json` zależności:
```
npm install
```
3. Uruchom aplikację:
```
npm run dev
```

lub przez kliknięcie zielonej strzałki w `package.json` przy `scripts/dev` 
w analogiczny sposób jak robiliśmy to w aplikacji NestJS.

### Zadanie do wykonania

1. Uruchom backend na Dockerze:
```
cd nestjs
docker-compose build
docker-compose up
```

API będzie dostępne pod adresem: `http://localhost:9010`

2. Uruchom aplikację Next.js
3. Zmodyfikuj zawartość folderu `users` tak, aby wyświetlić dowolne dane 
pochodzące z uruchomionego API. 

Pamiętaj o zmianie `NEXT_PUBLIC_API_URL` w `.env`