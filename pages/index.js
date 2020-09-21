import React from "react"
import { string } from "prop-types"
import { connect } from "react-redux"

import "./index.less"

export const Index = () => {
  return (
    <div className="Index" data-test="Index">
      Index Page
    </div>
  )
}

Index.propTypes = {
  example: string,
}

export const getStaticProps = async () => {
  return { props: {} }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
