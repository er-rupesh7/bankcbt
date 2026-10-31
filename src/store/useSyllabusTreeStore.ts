// src/store/useSyllabusTreeStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TreeFilterType, CheckboxState } from '@/types/syllabusTree';
import { OFFICIAL_SYLLABUS_TREE } from '@/data/syllabusTreeData';

interface SyllabusTreeState {
  checkedItemIds: Record<string, boolean>;
  expandedNodeIds: Record<string, boolean>;
  activeSubjectId: string;
  activeFilter: TreeFilterType;
  searchQuery: string;

  // Actions
  toggleNodeExpanded: (nodeId: string) => void;
  setNodeExpanded: (nodeId: string, expanded: boolean) => void;
  expandAll: () => void;
  collapseAll: () => void;
  toggleLeafItem: (itemId: string) => void;
  toggleParentNode: (childLeafIds: string[], forceCheck?: boolean) => void;
  setActiveSubject: (subjectId: string) => void;
  setActiveFilter: (filter: TreeFilterType) => void;
  setSearchQuery: (query: string) => void;
  resetAllProgress: () => void;

  // Computations
  isItemChecked: (itemId: string) => boolean;
  getNodeCheckboxState: (childLeafIds: string[]) => CheckboxState;
  getLeafProgress: (leafIds: string[]) => { completed: number; total: number; percentage: number };
  getSubjectProgress: (subjectId: string) => { completed: number; total: number; percentage: number };
  getGlobalProgress: () => { completed: number; total: number; percentage: number };
}

// Extract all leaf IDs for a topic, cluster, or subject
export function getTopicLeafIds(topic: {
  id: string;
  subtopics: { id: string; techniques: string[] }[];
  speed_arsenal: string[];
}): string[] {
  const leaves: string[] = [];
  topic.subtopics.forEach((sub, subIdx) => {
    sub.techniques.forEach((_, techIdx) => {
      leaves.push(`${topic.id}_sub_${subIdx}_tech_${techIdx}`);
    });
  });
  topic.speed_arsenal.forEach((_, arsenalIdx) => {
    leaves.push(`${topic.id}_arsenal_${arsenalIdx}`);
  });
  return leaves;
}

export function getAllSubjectLeafIds(subjectId: string): string[] {
  const subject = OFFICIAL_SYLLABUS_TREE.syllabus.find((s) => s.id === subjectId);
  if (!subject) return [];
  const leaves: string[] = [];
  subject.clusters.forEach((c) => {
    c.topics.forEach((t) => {
      leaves.push(...getTopicLeafIds(t));
    });
  });
  return leaves;
}

export function getAllSyllabusLeafIds(): string[] {
  const leaves: string[] = [];
  OFFICIAL_SYLLABUS_TREE.syllabus.forEach((s) => {
    leaves.push(...getAllSubjectLeafIds(s.id));
  });
  return leaves;
}

export const useSyllabusTreeStore = create<SyllabusTreeState>()(
  persist(
    (set, get) => ({
      checkedItemIds: {},
      expandedNodeIds: {
        cluster_speed_math: true,
        topic_simplification_approx: true,
      },
      activeSubjectId: 'quant',
      activeFilter: 'ALL',
      searchQuery: '',

      toggleNodeExpanded: (nodeId) => {
        set((state) => ({
          expandedNodeIds: {
            ...state.expandedNodeIds,
            [nodeId]: !state.expandedNodeIds[nodeId],
          },
        }));
      },

      setNodeExpanded: (nodeId, expanded) => {
        set((state) => ({
          expandedNodeIds: {
            ...state.expandedNodeIds,
            [nodeId]: expanded,
          },
        }));
      },

      expandAll: () => {
        const expanded: Record<string, boolean> = {};
        OFFICIAL_SYLLABUS_TREE.syllabus.forEach((sub) => {
          sub.clusters.forEach((cluster) => {
            expanded[cluster.id] = true;
            cluster.topics.forEach((topic) => {
              expanded[topic.id] = true;
            });
          });
        });
        set({ expandedNodeIds: expanded });
      },

      collapseAll: () => {
        set({ expandedNodeIds: {} });
      },

      toggleLeafItem: (itemId) => {
        set((state) => {
          const current = !!state.checkedItemIds[itemId];
          const updated = { ...state.checkedItemIds };
          if (current) {
            delete updated[itemId];
          } else {
            updated[itemId] = true;
          }
          return { checkedItemIds: updated };
        });
      },

      toggleParentNode: (childLeafIds, forceCheck) => {
        set((state) => {
          const updated = { ...state.checkedItemIds };
          const allCurrentlyChecked = childLeafIds.every((id) => !!updated[id]);
          const targetState = forceCheck !== undefined ? forceCheck : !allCurrentlyChecked;

          childLeafIds.forEach((id) => {
            if (targetState) {
              updated[id] = true;
            } else {
              delete updated[id];
            }
          });

          return { checkedItemIds: updated };
        });
      },

      setActiveSubject: (subjectId) => set({ activeSubjectId: subjectId }),
      setActiveFilter: (filter) => set({ activeFilter: filter }),
      setSearchQuery: (query) => set({ searchQuery: query }),

      resetAllProgress: () => set({ checkedItemIds: {} }),

      isItemChecked: (itemId) => {
        return !!get().checkedItemIds[itemId];
      },

      getNodeCheckboxState: (childLeafIds) => {
        if (childLeafIds.length === 0) return 'UNCHECKED';
        const checkedMap = get().checkedItemIds;
        let checkedCount = 0;
        childLeafIds.forEach((id) => {
          if (checkedMap[id]) checkedCount++;
        });

        if (checkedCount === 0) return 'UNCHECKED';
        if (checkedCount === childLeafIds.length) return 'CHECKED';
        return 'INDETERMINATE';
      },

      getLeafProgress: (leafIds) => {
        if (leafIds.length === 0) return { completed: 0, total: 0, percentage: 0 };
        const checkedMap = get().checkedItemIds;
        let completed = 0;
        leafIds.forEach((id) => {
          if (checkedMap[id]) completed++;
        });
        const total = leafIds.length;
        const percentage = Math.round((completed / total) * 100);
        return { completed, total, percentage };
      },

      getSubjectProgress: (subjectId) => {
        const leafIds = getAllSubjectLeafIds(subjectId);
        return get().getLeafProgress(leafIds);
      },

      getGlobalProgress: () => {
        const leafIds = getAllSyllabusLeafIds();
        return get().getLeafProgress(leafIds);
      },
    }),
    {
      name: 'bankcbt-syllabus-tree-storage',
      partialize: (state) => ({
        checkedItemIds: state.checkedItemIds,
        expandedNodeIds: state.expandedNodeIds,
        activeSubjectId: state.activeSubjectId,
        activeFilter: state.activeFilter,
      }),
    }
  )
);
