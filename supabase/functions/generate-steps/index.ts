import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { goal } = await req.json()

    if (!goal) {
      return new Response(
        JSON.stringify({ error: 'Goal is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Sending request to OpenAI with goal:', goal)

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful goal achievement assistant. Generate a numbered list of 5-7 specific, actionable steps for achieving the user's goal. Format each step as a number followed by a period and then the step description, like this:\n1. First step\n2. Second step\netc.",
          },
          {
            role: "user",
            content: `My goal is: ${goal}`,
          },
        ],
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    console.log('OpenAI response:', JSON.stringify(data, null, 2))

    if (!data.choices?.[0]?.message?.content) {
      console.error('Invalid OpenAI response format:', data)
      throw new Error('Invalid response format from OpenAI')
    }

    return new Response(
      JSON.stringify({ origin: data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in generate-steps function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})