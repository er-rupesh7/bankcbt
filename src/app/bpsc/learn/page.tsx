import React, { Suspense } from 'react';
import { getMasterBPSCCourse } from '@/data/bpsc/lms/lmsMasterCatalog';
import BPSCLmsDashboard from '@/components/bpsc-lms/BPSCLmsDashboard';
import TutorialReader from '@/components/bpsc-lms/TutorialReader';

interface PageProps {
  searchParams: Promise<{ topic?: string }>;
}

async function LearnContent({ searchParams }: PageProps) {
  const { topic } = await searchParams;
  const course = getMasterBPSCCourse();

  if (topic) {
    return <TutorialReader course={course} initialTopicId={topic} />;
  }

  return <BPSCLmsDashboard course={course} />;
}

export default function BPSCLearnPage(props: PageProps) {
  const course = getMasterBPSCCourse();

  return (
    <Suspense fallback={<BPSCLmsDashboard course={course} />}>
      <LearnContent searchParams={props.searchParams} />
    </Suspense>
  );
}
