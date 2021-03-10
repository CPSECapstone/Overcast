import React from "react";
import "./FileList.css";

export default ({ files, setCurrentFile, currentFile }) => {
  return (
    <ul id="FileList">
      <h2 id="FileListTitle">File List</h2>
      {files.map((file) => {
        const { id, title, datePosted, dueDate, filePath } = file;
        return (
          <FileItem
            itemId={id}
            title={title}
            datePosted={datePosted}
            dueDate={dueDate}
            filePath={filePath}
            onClick={() => setCurrentFile(file)}
            isSelected={id == currentFile.id}
          />
        );
      })}
    </ul>
  );
};

const FileItem = (props) => {
  const {
    itemId,
    title,
    datePosted,
    dueDate,
    filePath,
    onClick,
    isSelected,
  } = props;
  return (
    <li key={itemId}>
      <div className="ItemDivider" />
      <button
        className={isSelected ? "FileItem SelectedItem" : "FileItem"}
        onClick={onClick}
      >
        <h3 className="ItemTitle">{title}</h3>
        <div className="DateField">Posted: {datePosted}</div>
        <div className="DateField">Posted: {dueDate}</div>
      </button>
    </li>
  );
};
