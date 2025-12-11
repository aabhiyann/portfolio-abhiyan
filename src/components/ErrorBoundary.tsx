import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
          <div className="max-w-2xl w-full">
            <h1 className="text-3xl font-bold text-red-500 mb-4">Something went wrong.</h1>
            <div className="bg-gray-900 p-6 rounded-lg overflow-auto border border-gray-800">
              <p className="font-mono text-sm text-gray-300">
                {this.state.error && this.state.error.toString()}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
