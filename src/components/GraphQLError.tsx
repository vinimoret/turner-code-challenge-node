import React, { PureComponent } from 'react';
import { Alert } from 'antd';
import { ApolloError } from 'apollo-client';

interface IGraphQLErrorProps {
  message?: string;
  className?: string;
  error: ApolloError | undefined;
}

class GraphQLError extends PureComponent<IGraphQLErrorProps> {
  static defaultProps = {
    message: '',
    className: 'mb-4',
  };

  render() {
    const { message, className, error } = this.props;
    const parsedMessage = message ? message.replace('GraphQL error: ', '') : error ? error.message.replace('GraphQL error: ', '') : '';

    return error ? <Alert message={parsedMessage} type="error" closeText="Close Now" className={className} /> : null;
  }
}

export default GraphQLError;
