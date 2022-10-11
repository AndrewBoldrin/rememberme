import ReactDOM from "react-dom";
import "../../../index.css";

export const PrintArea = ({ children }: any) => {
  return ReactDOM.createPortal(
    <div className="print">{children}</div>,
    document.body
  );
};
