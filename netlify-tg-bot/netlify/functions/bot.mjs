export default async (req) => {
  if (req.method !== "POST") return new Response("ok");

  const update = await req.json();
  const msg = update.message;

  if (msg?.text) {
    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: msg.chat.id, text: `Эхо: ${msg.text}` }),
    });
  }
  return new Response("ok");
};

export const config = { path: "/api/bot" };
