import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

// import Header from '../common/header/Header'
// import Footer from '../common/footer/Footer'

// We can use this component in the future to create
// AuthRoute and NonAuthRouth components to deal with
// checking if the user is authenticated or not
class BaseRoute extends Route {
  render() {
    const {
      component,
      render,
    } = this.props
    return (
      <React.Fragment>
        {/* <Header /> */}
        {this.decideHowToRender(component, render)}
        {/* <Footer /> */}
      </React.Fragment>
    )
  }

  decideHowToRender(Component, render) {
    if (Component) {
      return (<Component />)
    }
    return render(this.props)
  }
}

BaseRoute.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func,
}

BaseRoute.defaultProps = {
  component: null,
  render: null,
}

export default BaseRoute
