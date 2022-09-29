import React from "react";
import { useFabricJSEditor } from "fabricjs-react";
import "./styles.css";

export default function AddCaption() {
  const { editor } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {};
  const onAddPolygon = () => {};
  const onAddtriangle = () => {};

  return (
    <>
      <div className="App">
        <button onClick={onAddCircle}>Add circle</button>
        <button onClick={onAddRectangle}>Add Rectangle</button>
        <button onClick={onAddtriangle}>Add Triangle</button>
        <button onClick={onAddPolygon}>Add Polygon</button>
      </div>
      <div className="btnDiv">
        <button id="downloadBtn" value="download">
          Download
        </button>
      </div>
    </>
  );
}
