export interface StatCard {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down" | "neutral";
  icon: string;
}

export interface FileItem {
  id: string;
  name: string;
  size: string;
  type: string;
  modified: string;
  owner: string;
}

export interface Activity {
  id: string;
  action: string;
  target: string;
  user: string;
  time: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export const stats: StatCard[] = [
  {
    id: "1",
    title: "Total Files",
    value: "2,847",
    change: "+12.5%",
    changeType: "up",
    icon: "file",
  },
  {
    id: "2",
    title: "Storage Used",
    value: "45.2 GB",
    change: "+8.3%",
    changeType: "up",
    icon: "storage",
  },
  {
    id: "3",
    title: "Today Uploads",
    value: "134",
    change: "+23.1%",
    changeType: "up",
    icon: "upload",
  },
  {
    id: "4",
    title: "Total Visits",
    value: "12.4K",
    change: "-3.2%",
    changeType: "down",
    icon: "visits",
  },
];

export const recentFiles: FileItem[] = [
  {
    id: "1",
    name: "project-report.pdf",
    size: "2.4 MB",
    type: "PDF",
    modified: "2026-05-22 14:30",
    owner: "Alice",
  },
  {
    id: "2",
    name: "hero-image.png",
    size: "1.8 MB",
    type: "Image",
    modified: "2026-05-22 13:15",
    owner: "Bob",
  },
  {
    id: "3",
    name: "backup-db.sql.gz",
    size: "15.6 MB",
    type: "Archive",
    modified: "2026-05-22 11:42",
    owner: "Alice",
  },
  {
    id: "4",
    name: "config.json",
    size: "4.2 KB",
    type: "JSON",
    modified: "2026-05-22 10:20",
    owner: "Charlie",
  },
  {
    id: "5",
    name: "landing-page.html",
    size: "12.3 KB",
    type: "HTML",
    modified: "2026-05-22 09:08",
    owner: "Bob",
  },
];

export const activities: Activity[] = [
  {
    id: "1",
    action: "uploaded",
    target: "project-report.pdf",
    user: "Alice",
    time: "14:30",
  },
  {
    id: "2",
    action: "deleted",
    target: "old-backup.zip",
    user: "Bob",
    time: "13:55",
  },
  {
    id: "3",
    action: "shared",
    target: "design-assets/",
    user: "Charlie",
    time: "12:20",
  },
  {
    id: "4",
    action: "downloaded",
    target: "hero-image.png",
    user: "Alice",
    time: "11:45",
  },
  {
    id: "5",
    action: "renamed",
    target: "config.json → app-config.json",
    user: "Bob",
    time: "10:10",
  },
  {
    id: "6",
    action: "created",
    target: "new-project/",
    user: "Charlie",
    time: "09:30",
  },
];

export const storageTrend: ChartDataPoint[] = [
  { label: "Mon", value: 32 },
  { label: "Tue", value: 35 },
  { label: "Wed", value: 38 },
  { label: "Thu", value: 42 },
  { label: "Fri", value: 40 },
  { label: "Sat", value: 43 },
  { label: "Sun", value: 45 },
];

export const fileTypeDistribution: {
  label: string;
  value: number;
  color: string;
}[] = [
  { label: "Images", value: 35, color: "#6366f1" },
  { label: "Documents", value: 25, color: "#8b5cf6" },
  { label: "Archives", value: 20, color: "#a78bfa" },
  { label: "Videos", value: 12, color: "#c4b5fd" },
  { label: "Other", value: 8, color: "#e0e7ff" },
];
