import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><h1>Something went wrong.</h1></div>;
        }

        return this.props.children;
    }
}
