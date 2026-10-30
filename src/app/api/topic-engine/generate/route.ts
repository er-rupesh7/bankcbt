// src/app/api/topic-engine/generate/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { DifficultyLevel } from '@/types/topicPractice';
import { generateDynamicTopicQuestions } from '@/lib/topicAiGenerator';
import { getTopicQuestions } from '@/data/topicSeedData';
import { getTopicBySlug } from '@/data/syllabusTaxonomy';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      topicSlug,
      difficulty = 'LEVEL_1_CLERK_PRE',
      count = 10,
      attemptSeed = Date.now(),
    } = body;

    if (!topicSlug) {
      return NextResponse.json(
        { success: false, error: 'topicSlug is required' },
        { status: 400 }
      );
    }

    const topicConfig = getTopicBySlug(topicSlug);
    if (!topicConfig) {
      return NextResponse.json(
        { success: false, error: `Invalid topic slug: ${topicSlug}` },
        { status: 404 }
      );
    }

    // Try preseeded questions first if count is small and seed is default
    const preseeded = getTopicQuestions(topicSlug, difficulty as DifficultyLevel);
    let questions = preseeded;

    // If more questions requested or user clicked "Generate Fresh", generate dynamically with entropy seed
    if (questions.length < count || body.forceFresh) {
      const dynamic = generateDynamicTopicQuestions(
        topicSlug,
        difficulty as DifficultyLevel,
        count,
        attemptSeed
      );
      // Combine or use dynamic set
      questions = dynamic;
    }

    return NextResponse.json({
      success: true,
      topicSlug,
      difficulty,
      count: questions.length,
      questions,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
