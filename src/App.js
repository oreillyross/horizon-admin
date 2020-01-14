import React, { Component } from "react";
import SourceManagement from "./SourceManagement";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="grid">
        <header>Horizon Management Dashboard</header>

        <aside className="sidebar-left">Left Sidebar</aside>

        <article>
          <SourceManagement />
        </article>

        <aside className="sidebar-right">Right Sidebar</aside>

        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;