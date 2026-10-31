// src/types/syllabusTree.ts

export type TreeFilterType = 'ALL' | 'PRELIMS' | 'MAINS' | 'UNCOMPLETED';

export type CheckboxState = 'UNCHECKED' | 'INDETERMINATE' | 'CHECKED';

export interface SyllabusSubtopic {
  id: string;
  name: string;
  techniques: string[];
}

export interface SpeedArsenalItem {
  id: string;
  name: string;
  tooltipExample: string;
}

export interface SyllabusTopicNode {
  id: string;
  name: string;
  stageTag?: 'PRELIMS' | 'MAINS' | 'BOTH';
  badgeTag?: 'Prelims Core' | 'Mains Advanced' | 'High Frequency' | 'Speed Drill';
  subtopics: SyllabusSubtopic[];
  speed_arsenal: string[];
  speed_arsenal_tooltips?: Record<string, string>;
}

export interface SyllabusClusterNode {
  id: string;
  name: string;
  weightage: string;
  accentColor?: string;
  topics: SyllabusTopicNode[];
}

export interface SyllabusSubjectNode {
  id: string;
  name: string;
  icon: string;
  exam_types: string[];
  clusters: SyllabusClusterNode[];
}

export interface CompleteSyllabusData {
  syllabus: SyllabusSubjectNode[];
}
