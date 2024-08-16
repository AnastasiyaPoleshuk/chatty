import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./ModalWindow.scss";

interface IProps {
  children: React.ReactNode;
  type: string;
}

const ModalWindow = ({ children, type }: IProps) => {
  const { closeModal } = useContext(AppContext);
  return (
    <section
      className="overlay"
      onClick={() => {
        return closeModal(type);
      }}
    >
      <div
        className="modal-window"
        onClick={(e) => {
          return e.stopPropagation();
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default ModalWindow;
