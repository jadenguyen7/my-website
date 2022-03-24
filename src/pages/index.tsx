import * as React from "react";
import * as styles from "./styles.module.css";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Jade Nguyen | Home Page</title>
      <h1 className={styles.heading}>Jade Nguyen</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>My Journey</li>
          <li>My Notes</li>
        </ul>
      </nav>
     
    </main>
  )
}

export default IndexPage
