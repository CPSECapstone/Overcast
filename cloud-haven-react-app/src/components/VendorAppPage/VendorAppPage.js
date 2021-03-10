import React from "react";
import { FileList, CustomForm, FileViewer } from "../components";
import "./VendorAppPage.css";
import pdfTest1 from "../../static/test1.pdf";
import pdfTest2 from "../../static/test2.pdf";

const isOnVendorHomePage = false;

const files = [
  {
    id: 1,
    title: "New Patient Wavier",
    datePosted: "11/12/20",
    dueDate: "12/31/20",
    filePath: pdfTest1,
  },
  {
    id: 2,
    title: "Health Insurance",
    datePosted: "11/12/20",
    dueDate: "12/09/20",
    filePath: pdfTest2,
  },
  {
    id: 3,
    title: "New Patient Waiver",
    datePosted: "11/11/20",
    dueDate: "12/9/20",
    filePath: "",
  },
  {
    id: 4,
    title: "New Patient Waiver",
    datePosted: "11/11/20",
    dueDate: "12/9/20",
    filePath: "",
  },
  {
    itemId: 5,
    title: "New Patient Waiver",
    datePosted: "11/11/20",
    dueDate: "12/9/20",
    filePath: "",
  },
  {
    itemId: 6,
    title: "New Patient Waiver",
    datePosted: "11/11/20",
    dueDate: "12/9/20",
    filePath: "",
  },
  {
    itemId: 7,
    title: "New Patient Waiver",
    datePosted: "11/11/20",
    dueDate: "12/9/20",
    filePath: "",
  },
];

export default (props) => {
  const [currentFile, setCurrentFile] = React.useState(files[0]);

  return (
    <React.Fragment>
      {isOnVendorHomePage && <h1>{props.vendorId}</h1>}
      <div id="FileFeaturePage">
        <FileList
          files={files}
          setCurrentFile={setCurrentFile}
          currentFile={currentFile}
        />
        {currentFile.filePath == "" ? (
          <CustomForm fields={props.components[0].Fields} />
        ) : (
          <FileViewer filePath={currentFile.filePath} />
        )}
      </div>
    </React.Fragment>
  );
};
