import React, { Suspense } from 'react';
import { getMasterBPSCCourse, getAllLMSTopics } from '@/data/bpsc/lms/lmsMasterCatalog';
import TutorialReader from '@/components/bpsc-lms/TutorialReader';

interface PageProps {
  params: Promise<{
    sectionKey: string;
    subjectKey: string;
    chapterKey: string;
    topicKey: string;
  }>;
}

export async function generateStaticParams() {
  const all = getAllLMSTopics();
  return all.map(({ topic, chapter, subject, section }) => ({
    sectionKey: section.key,
    subjectKey: subject.key,
    chapterKey: chapter.id,
    topicKey: topic.id,
  }));
}

async function TopicTutorialContent({ params }: PageProps) {
  const { topicKey } = await params;
  const course = getMasterBPSCCourse();

  return <TutorialReader course={course} initialTopicId={topicKey} />;
}

export default function BPSCTopicTutorialPage(props: PageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading Tutorial...</div>}>
      <TopicTutorialContent params={props.params} />
    </Suspense>
  );
}
