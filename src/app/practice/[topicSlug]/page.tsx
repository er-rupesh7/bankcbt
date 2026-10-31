// src/app/practice/[topicSlug]/page.tsx

import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SYLLABUS_TAXONOMY, getTopicBySlug } from '@/data/syllabusTaxonomy';
import { TopicWorkspaceClient } from '@/components/practice/TopicWorkspaceClient';

interface PageProps {
  params: Promise<{ topicSlug: string }>;
}

export async function generateStaticParams() {
  return SYLLABUS_TAXONOMY.map((topic) => ({
    topicSlug: topic.slug,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { topicSlug } = await props.params;
  const topic = getTopicBySlug(topicSlug);

  if (!topic) {
    return {
      title: 'Topic Practice | Banking CBT Exam',
    };
  }

  return {
    title: `${topic.titleEn} - Concept Mastery & Practice | Banking CBT`,
    description: `Master ${topic.titleEn} (${topic.titleHi}) with LaTeX formulas, 20-second shortcuts, TCS iON examiner traps, and Level 1-3 practice drills.`,
  };
}

async function TopicWorkspaceContent({ params }: { params: Promise<{ topicSlug: string }> }) {
  const { topicSlug } = await params;
  const topic = getTopicBySlug(topicSlug);

  if (!topic) {
    notFound();
  }

  return <TopicWorkspaceClient topicSlug={topicSlug} />;
}

export default function TopicWorkspacePage(props: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0e3b64] flex items-center justify-center text-white">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border-4 border-[#ff9900] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-bold text-blue-200">Loading Topic Workspace...</p>
          </div>
        </div>
      }
    >
      <TopicWorkspaceContent params={props.params} />
    </Suspense>
  );
}
