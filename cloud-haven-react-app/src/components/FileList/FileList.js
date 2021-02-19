import React from 'react';
import './FileList.css';

export default props => {
   return (
      <div id="FileList">
         <h2 id="FileListTitle">File List</h2>
         <FileItem
            itemId={1}
            title="New Patient Waiver"
            datePosted="11/12/20"
            dueDate="12/31/20"
            onClick={() => {console.log("temp onClick function");}}
         />
         <FileItem
            itemId={2}
            title="Health Insurance"
            datePosted="11/12/20"
            dueDate="12/09/20"
            onClick={() => {console.log("temp onClick function");}}
         />
         <FileItem
            itemId={3}
            title="New Patient Waiver"
            datePosted="11/11/20"
            dueDate="12/9/20"
            onClick={() => {console.log("temp onClick function");}}
         />
         <FileItem
            itemId={4}
            title="New Patient Waiver"
            datePosted="11/11/20"
            dueDate="12/9/20"
            onClick={() => {console.log("temp onClick function");}}
         />
         <FileItem
            itemId={5}
            title="New Patient Waiver"
            datePosted="11/11/20"
            dueDate="12/9/20"
            onClick={() => {console.log("temp onClick function");}}
         />
         <FileItem
            itemId={6}
            title="New Patient Waiver"
            datePosted="11/11/20"
            dueDate="12/9/20"
            onClick={() => {console.log("temp onClick function");}}
         />
         <FileItem
            itemId={7}
            title="New Patient Waiver"
            datePosted="11/11/20"
            dueDate="12/9/20"
            onClick={() => {console.log("temp onClick function");}}
         />
      </div>
   )
}

const FileItem = (props) => {
   const { itemId, title, datePosted, dueDate, onClick } = props;
   return (
      <React.Fragment>
         <div className="ItemDivider" />
         <button className="FileItem" onClick={onClick}>
            <h3 className="ItemTitle">{title}</h3>
            <div className="DateField">Posted: {datePosted}</div>
            <div className="DateField">Posted: {dueDate}</div>
         </button>
      </React.Fragment>
   );
}
