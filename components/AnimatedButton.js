import React from 'react';
import { Animated } from 'react-native';
import Button from './Button'

export default class AnimatedButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      borderRadius: new Animated.Value(0),
      opacity: new Animated.Value(.75),
      width: new Animated.Value('auto')
    }
  }

  componentWillReceiveProps(next) {
    if (next.selected && !this.props.selected) {
      this.select()
    } else if (!next.selected && this.props.selected) {
      this.deselect()
    }
  }

  select() {
    const borderRadiusAnimation = this.state.borderRadius.spring(this.state.borderRadius, 50)
    const widthAnimation = this.state.width.spring(this.state.width, 50)
    Animated.parallel([borderRadiusAnimation, widthAnimation]).start()
  }

  deselect() {
    const borderRadiusAnimation = this.state.borderRadius.spring(this.state.borderRadius, 0)
    const widthAnimation = this.state.width.spring(this.state.width, 'auto')
    Animated.parallel([borderRadiusAnimation, widthAnimation]).start()
  }

  render() {
    const {
      onPress,
      label,
      backgroundColor,
      accessibilityLabel,
      color
    } = this.props
    return (
      <Button
        onPress={onPress}
        label={label}
        color={color}
        style={this.state}
        backgroundColor={backgroundColor}
        accessibilityLabel={accessibilityLabel}
      />
    )
  }
}
