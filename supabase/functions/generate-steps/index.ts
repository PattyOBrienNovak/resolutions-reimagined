import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { goal } = await req.json();
    console.log('Received goal:', goal);

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not found');
    }

    console.log('Making request to OpenAI...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that breaks down goals into actionable steps. Generate exactly 5 specific, actionable steps. Format your response as a numbered list with each step on a new line, like this:\n1. First step\n2. Second step\n3. Third step\n4. Fourth step\n5. Fifth step'
          },
          {
            role: 'user',
            content: `Help me achieve this goal: ${goal}`
          }
        ],
        temperature: 0.7,
      }),
    });

    const openAIResponse = await response.json();
    console.log('OpenAI response:', JSON.stringify(openAIResponse, null, 2));

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${openAIResponse.error?.message || 'Unknown error'}`);
    }

    return new Response(
      JSON.stringify({ origin: openAIResponse }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in generate-steps function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});