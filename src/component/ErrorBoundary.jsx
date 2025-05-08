
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {

    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {

    this.setState({ errorInfo });
    console.error("Error occurred:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>
            <summary>Click to see error details</summary>
            {this.state.error && <pre>{this.state.error.toString()}</pre>}
            {this.state.errorInfo && <pre>{this.state.errorInfo.componentStack}</pre>}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
