import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'OPENAI_API_KEY が未設定です。' }, { status: 500 });

    const form = await req.formData();
    const audio = form.get('audio');
    if (!(audio instanceof File)) return NextResponse.json({ error: 'audio ファイルがありません。' }, { status: 400 });

    const openai = new OpenAI({ apiKey });
    const transcription = await openai.audio.transcriptions.create({
      file: audio,
      model: process.env.OPENAI_TRANSCRIBE_MODEL || 'gpt-4o-mini-transcribe'
    });
    const transcript = transcription.text || '';

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_SUMMARY_MODEL || 'gpt-4.1-mini',
      messages: [
        { role: 'system', content: 'あなたは日本語の会議議事録作成アシスタントです。出力はJSONのみ。' },
        { role: 'user', content: `次の文字起こしから、summary と tasks のJSONを作ってください。tasksは文字列配列です。\n\n${transcript}` }
      ],
      response_format: { type: 'json_object' }
    });
    const parsed = JSON.parse(completion.choices[0]?.message?.content || '{}');
    return NextResponse.json({ transcript, summary: parsed.summary || '要約を生成できませんでした。', tasks: Array.isArray(parsed.tasks) ? parsed.tasks : [] });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'AI処理に失敗しました。' }, { status: 500 });
  }
}
