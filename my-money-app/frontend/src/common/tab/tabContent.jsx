import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabContent extends Component {
    render() {
        const isSelected = this.props.tab.selected === this.props.id

        return (
            <div
                id={this.props.id}
                className={`tab-pane ${isSelected ? 'active' : ''}`}
            >
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })

export default connect(mapStateToProps)(TabContent)
