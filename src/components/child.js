import React from 'react'

class Child extends React.Component {

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps children", props)
        return null
    }

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}

export default Child;