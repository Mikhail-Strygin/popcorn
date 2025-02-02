import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
    // Обновляем состояние
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Логируем ошибку
    console.log("componentDidCatch - Ошибка:", error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так...</h1>;
    }

    return this.props.children; // Рендерим дочерние компоненты
  }
}
