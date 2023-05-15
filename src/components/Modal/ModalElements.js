import Modal from "styled-react-modal";
import styled from "styled-components";

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101522;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`;

export const ModalNav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  ${({ hidden }) => hidden && `
    @media screen and (max-width: 768px) {
      display: none;
    }
  `}
  `;

export const ModalBtn = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;    sa  sad
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;

