import React from 'react';
import styled from 'styled-components';

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '0' };
  }

  onClick(val) {
    const { input } = this.state;
    const { addCalories, subtractCalories } = this.props;

    if (val === '<') {
      if (input.length === 1) {
        return this.setState({ input: '0' });
      } else {
        return this.setState({ input: input.slice(0, -1) });
      }
    } else if (Number(input) === 0) {
      return this.setState({ input: String(val) });
    } else if (Number(val) || Number(val) === 0) {
      return this.setState({ input: String(input + val) });
    } else if (val === '+') {
      this.setState({ input: '0' });
      addCalories(val);
    } else if (val === '-') {
      this.setState({ input: '0' });
      subtractCalories(val);
    }
  }

  render() {
    return (
      <Container>
        <Top>
          <Currently>
            <Banner>
              Goal: <br /> 3500 kCal
            </Banner>
            <Banner>
              Consumed: <br /> 1500 kCal
            </Banner>
          </Currently>
          <NumDisplay>
            {this.state.input}
            <Undo onClick={this.onClick.bind(this, '<')}>{'<'}</Undo>
          </NumDisplay>
        </Top>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '+'].map(num => {
          return <Button onClick={this.onClick.bind(this, num)}>{num}</Button>;
        })}
      </Container>
    );
  }
}

const Undo = styled.span`
  position: absolute;
  right: 30px;
  color: white;
  width: 50px;
`;

const Banner = styled.section`
  flex-grow: 1;
  flex-basis: 1;
  color: #ededed;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Currently = styled.section`
  flex-grow: 1;
  display: flex;
`;

const NumDisplay = styled.section`
  flex-grow: 1;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Top = styled.section`
  padding: 15px;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 4;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: linear-gradient(
    to bottom,
    rgba(255, 119, 40, 1) 0%,
    rgba(252, 91, 31, 1) 100%
  );
  display: flex;
  flex-direction: column;
`;

const Button = styled.span`
  border-radius: 50%;
  border: 2px solid rgb(25, 27, 27);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  margin: auto;
  background: linear-gradient(
    to bottom,
    rgba(45, 48, 47, 1) 0%,
    rgba(18, 19, 20, 1) 100%
  );
  box-shadow: 0 0 2px 2px rgb(25, 27, 27);
  font-size: 2rem;
`;

const Container = styled.div`
  height: calc(100vh - 100px);
  display: grid;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  /* padding: 15px; */
  grid-template-rows: 1.2fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;
