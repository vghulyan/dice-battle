import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

const StyledButton = (props) => {
    const attack = () => {
        props.handleAttack();
    };

    return (
        <Button disabled={false} onClick={attack}>
            {props.text}
        </Button>
    )
};

export default StyledButton;
