export interface XPData {
  xp: number;
  level: number;
  levelName: string;
}

export type TimelineItem = {
  id: string;
  year: string;
  title: string;
  description: string;
  achievement: string;
};

export type QuestItem = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type StatItem = {
  label: string;
  value: string;
  icon: string;
};

export type SkillItem = {
  name: string;
  progress: number; // 0-100
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
};

export type BossItem = {
  id: string;
  name: string;
  image: string;
  description: string;
};
