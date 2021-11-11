import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import { XLg } from "react-bootstrap-icons";

const StyledModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.article`
  width: 500px;
  height: 500px;
  background-color: white;
`;

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: { duration: 250 },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <StyledModalBg ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <StyledModal>
              <XLg
                color="black"
                size={48}
                aria-labe="close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </StyledModal>
          </animated.div>
        </StyledModalBg>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;
