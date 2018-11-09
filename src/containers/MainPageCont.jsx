import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';

export default class BlogPosts extends PureComponent {
  render() {
    return (
      <main>
        <Container>
          <h1>Hello from Main Page</h1>
        </Container>
      </main>
    );
  }
}
