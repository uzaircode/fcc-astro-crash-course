// Define Http endpoint
export async function GET() {
  return new Response(
    JSON.stringify({
      greeting: 'Hello',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
