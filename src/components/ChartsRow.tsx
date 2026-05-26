import type { ChartDataPoint } from "../data/mock";
import "./ChartsRow.css";

interface StorageChartProps {
  data: ChartDataPoint[];
}

function StorageChart({ data }: StorageChartProps) {
  const maxVal = Math.max(...data.map((d) => d.value));

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3 className="chart-title">Storage Trend</h3>
        <span className="chart-subtitle">This week / GB</span>
      </div>
      <div
        className="bar-chart"
        role="img"
        aria-label="Storage trend chart showing daily usage this week"
      >
        <div className="bar-chart-bars">
          {data.map((point) => (
            <div key={point.label} className="bar-col">
              <div className="bar-wrapper">
                <div
                  className="bar-fill"
                  style={{ height: `${(point.value / maxVal) * 100}%` }}
                />
                <div className="bar-tooltip">{point.value} GB</div>
              </div>
              <span className="bar-label">{point.label}</span>
            </div>
          ))}
        </div>
        <div className="bar-chart-grid">
          {[0, 25, 50, 75, 100].map((pct) => (
            <div
              key={pct}
              className="bar-grid-line"
              style={{ bottom: `${pct}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface FileTypeData {
  label: string;
  value: number;
  color: string;
}

interface TypeChartProps {
  data: FileTypeData[];
}

function calcPiePath(startPercent: number, percent: number): string {
  const endPercent = startPercent + percent;
  const startAngle = (startPercent / 100) * 360;
  const endAngle = (endPercent / 100) * 360;
  const startRad = ((startAngle - 90) * Math.PI) / 180;
  const endRad = ((endAngle - 90) * Math.PI) / 180;
  const r = 70;
  const cx = 80;
  const cy = 80;

  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);
  const x2 = cx + r * Math.cos(endRad);
  const y2 = cy + r * Math.sin(endRad);

  const largeArc = percent > 50 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

function TypeChart({ data }: TypeChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0);

  const segments = data.reduce<{
    items: {
      label: string;
      value: number;
      color: string;
      percent: number;
      path: string;
    }[];
    cumPercent: number;
  }>(
    (memo, d) => {
      const percent = (d.value / total) * 100;
      const path = calcPiePath(memo.cumPercent, percent);
      return {
        items: [...memo.items, { ...d, percent, path }],
        cumPercent: memo.cumPercent + percent,
      };
    },
    { items: [], cumPercent: 0 },
  ).items;

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3 className="chart-title">File Type Distribution</h3>
        <span className="chart-subtitle">By storage volume</span>
      </div>
      <div className="pie-chart">
        <svg
          viewBox="0 0 160 160"
          role="img"
          aria-label="File type distribution donut chart"
        >
          {segments.map((seg) => (
            <path
              key={seg.label}
              d={seg.path}
              fill={seg.color}
              className="pie-segment"
            >
              <title>
                {seg.label}: {seg.percent.toFixed(1)}%
              </title>
            </path>
          ))}
          <circle cx="80" cy="80" r="45" fill="var(--color-surface)" />
          <text
            x="80"
            y="76"
            textAnchor="middle"
            fill="var(--color-text-heading)"
            fontSize="18"
            fontWeight="700"
          >
            {total}
          </text>
          <text
            x="80"
            y="94"
            textAnchor="middle"
            fill="var(--color-text-secondary)"
            fontSize="11"
          >
            Total GB
          </text>
        </svg>
        <div className="pie-legend">
          {segments.map((seg) => (
            <div key={seg.label} className="pie-legend-item">
              <span
                className="pie-legend-dot"
                style={{ background: seg.color }}
              />
              <span className="pie-legend-label">{seg.label}</span>
              <span className="pie-legend-value">
                {seg.percent.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ChartsRowProps {
  storageData: ChartDataPoint[];
  typeData: FileTypeData[];
}

function ChartsRow({ storageData, typeData }: ChartsRowProps) {
  return (
    <div className="charts-row">
      <StorageChart data={storageData} />
      <TypeChart data={typeData} />
    </div>
  );
}

export default ChartsRow;
