import React from 'react';
import styled from 'styled-components';

const View = {
  Saved: 0,
  Manual: 1
};

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.toggleView = this.toggleView.bind(this);
    this.state = { input: '0', view: View.Manual };
  }

  toggleView() {
    const { view } = this.state;

    switch (view) {
      case View.Saved:
        return this.setState({ view: View.Manual });
      case View.Manual:
        return this.setState({ view: View.Saved });
    }
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
    const { view } = this.state;
    const { goal, consumed } = this.props;
    console.log(view);
    return (
      <Container>
        <Top>
          <Currently>
            <Banner>
              Goal: <br /> {goal} kCal
            </Banner>
            <Banner>
              Consumed: <br /> {consumed} kCal
            </Banner>
          </Currently>
          <NumDisplay>
            {this.state.input}
            <Undo onClick={this.onClick.bind(this, '<')}>{'<'}</Undo>
          </NumDisplay>
        </Top>
        {view === View.Manual ? (
          <React.Fragment>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '+'].map(num => {
              return (
                <Button onClick={this.onClick.bind(this, num)}>{num}</Button>
              );
            })}
          </React.Fragment>
        ) : (
          <h1>hi</h1>
        )}
        <Bottom>
          <BottomButton active onClick={this.toggleView}>
            Saved
          </BottomButton>
          <BottomButton active={false} onClick={this.toggleView}>
            Manual
          </BottomButton>
        </Bottom>
      </Container>
    );
  }
}

const BottomButton = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${p =>
    p.active &&
    'background: linear-gradient(to bottom,rgba(255, 119, 40, 1) 0%, rgba(252, 91, 31, 1) 100%)'}
`;

const Bottom = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
`;

const Undo = styled.span`
  position: fixed;
  right: 50px;
  color: white;
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
  flex-basis: 1;
  display: flex;
`;

const NumDisplay = styled.section`
  flex-grow: 1;
  flex-basis: 1;
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
  height: 70px;
  width: 70px;
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
  position: absolute;
  top: 50px;
  bottom: 30px;
  left: 20px;
  right: 20px;
  display: grid;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  /* padding: 15px; */
  grid-template-rows: 1.2fr 1fr 1fr 1fr 1fr 0.4fr;
  grid-template-columns: 1fr 1fr 1fr;
`;
