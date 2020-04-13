import React from 'react'
import PropTypes from 'prop-types';
import sliderStyles from './SliderItem.css';
import Icon from '../Utility/Icons/Icon';
import classNames from "classnames/bind";

const cx = classNames.bind(sliderStyles);

const SliderItem = ({ handleClick, isFart, items, selected, isTimer }) => {
  return (
    <>
      {items.map(item => {
        return <div
          key={item.key}
          onClick={() => handleClick(item.name)}
          className={cx("item", {
            "item-timer": isTimer,
            "item-clicked": selected === item.name
          })}>
          {selected === item.name &&
            <Icon identifier='record'
              viewBox='0 0 512 512'
              dimensions={{ width: 30, height: 30 }}
              fill="#e82e37" 
              styles='item-selected-txt'
            />}
          {isFart &&
            <Icon
              identifier='play'
              viewBox='0 0 512 512'
              dimensions={{ width: 60, height: 60 }}
              fill="#e82e37"
            />
          }
          <p className={cx("item-title", {
            "item-title-clicked": selected === item.name
          })}>{item.name}</p>
        </div>
      })}
    </>
  )
}

SliderItem.propTypes = {
  items: PropTypes.array.isRequired,
  isFart: PropTypes.bool,
  isTimer: PropTypes.bool
}


export default SliderItem
