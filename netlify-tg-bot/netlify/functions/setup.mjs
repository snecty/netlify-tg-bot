// Открой /api/setup один раз после деплоя — webhook подключится сам
export default async (req) => {
  if (!process.env.BOT_TOKEN) {
    return new Response("Нет переменной BOT_TOKEN в настройках Netlify", { status: 500 });
  }
  const origin = new URL(req.url).origin;
  const r = await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/setWebhook?url=${origin}/api/bot`
  );
  return new Response(await r.text(), { headers: { "Content-Type": "application/json" } });
};

export const config = { path: "/api/setup" };
