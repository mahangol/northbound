'use client';

import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  name: string;
}

interface State {
  hasError: boolean;
}

/**
 * Wraps each major section so a failure in one (e.g. a bad data shape,
 * a runtime error in a single component) cannot take down the rest of
 * the page. Failed sections simply render nothing rather than a crash
 * screen, per the resilience requirement.
 */
export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(`Section "${this.props.name}" failed to render:`, error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
