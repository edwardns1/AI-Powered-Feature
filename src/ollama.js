export async function generateTags(title, notes) {
  const response = await fetch("http://localhost:11434/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gemma4:e2b",
      stream: false,
      messages: [
        {
          role: "user",
          content: `Generate 3-5 short tags for the following media entry. Return only a comma-separated list, no explanation.\n\nTitle: ${title}\nNotes: ${notes}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
}
