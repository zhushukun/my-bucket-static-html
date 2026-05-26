import type { FileItem } from "../data/mock";
import "./FileTable.css";

interface FileTableProps {
  files: FileItem[];
}

const typeColors: Record<string, string> = {
  PDF: "type-pdf",
  Image: "type-image",
  Archive: "type-archive",
  JSON: "type-json",
  HTML: "type-html",
};

function formatSize(size: string) {
  return size;
}

function FileTable({ files }: FileTableProps) {
  return (
    <div className="file-table-card">
      <div className="file-table-header">
        <h3 className="file-table-title">Recent Files</h3>
        <a href="#" className="file-table-action">
          View all
          <svg width="14" height="14" aria-hidden="true">
            <use href="/icons.svg#icon-chevron-right" />
          </svg>
        </a>
      </div>
      <div className="file-table-wrap">
        <table className="file-table" aria-label="Recent files list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Size</th>
              <th>Owner</th>
              <th>Modified</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td>
                  <div className="file-name-cell">
                    <svg
                      className="file-icon"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#icon-file" />
                    </svg>
                    <span>{file.name}</span>
                  </div>
                </td>
                <td>
                  <span
                    className={`file-type-badge ${typeColors[file.type] || ""}`}
                  >
                    {file.type}
                  </span>
                </td>
                <td className="file-size">{formatSize(file.size)}</td>
                <td className="file-owner">{file.owner}</td>
                <td className="file-date">{file.modified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileTable;
