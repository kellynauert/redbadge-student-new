//Create a class component based on the functionalProps.jsx file
//Keep the usage of destructuring props in this challenge.
import React from 'react';
import { Alert, Container } from 'reactstrap';

class ClassComponentProps extends React.Component {
  render() {
    const displayAlerts = () =>
      this.props.numbers.map((num, index) => (
        <Alert key={index} color={num % 2 === 0 ? 'success' : 'danger'}>
          The number is {num}{' '}
        </Alert>
      ));
    return (
      <Container>
        <h3>From the Class Component</h3>
        {displayAlerts()}
      </Container>
    );
  }
}

export default ClassComponentProps;
