import React, { Component } from 'react'
import styles from './quiz.module.css'
 class QuizComponent extends Component {
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.playarea}>
            <h1 className={styles.heading}>Question</h1>
            <h4 className={styles.number}>1 of 15</h4>
            <h3 className={styles.question}>What is the only mammal that can't jump?</h3>
            <div className={styles.option}>
                <div className={styles.box}>
                    <h3>Dog</h3>
                </div>
                <div  className={styles.box}>
                    <h3>Elephant</h3>
                </div>
                <div  className={styles.box}>
                    <h3>Goat</h3>
                </div>
                <div  className={styles.box}>
                    <h3>Lion</h3>
                </div>
            </div>
            <button className={styles.btn1}>Previous</button>
            <button className={styles.btn2}>Next</button>
            <button className={styles.btn3}>Quit</button>
        </div>
      </div>
    )
  }
}
export default QuizComponent
