import React, { Component } from 'react'
import PropTypes from 'prop-types'
/**
 * @todo Change for custom icons, used temporarily
 */
import "material-design-icons/iconfont/material-icons.css";


import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}
