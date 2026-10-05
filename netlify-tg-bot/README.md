# Telegram бот на Netlify

1. Залей папку в GitHub.
2. Netlify → Add new site → Import from Git → выбери репозиторий (настройки сборки не трогай).
3. Site settings → Environment variables → добавь BOT_TOKEN = токен от @BotFather.
4. Deploys → Trigger deploy (чтобы переменная подхватилась).
5. Открой https://ТВОЙ-САЙТ.netlify.app/api/setup — должно вернуть "ok":true.
6. Напиши боту — он ответит "Эхо: ...".
