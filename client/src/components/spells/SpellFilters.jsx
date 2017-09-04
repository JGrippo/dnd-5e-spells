import React from 'react'
import PropTypes from 'prop-types'
import SpellFilterLink from './SpellFilterLink'

const SpellFilters = ({ shouldShow, onFilterLevelClick, onFilterSchoolClick, onFilterClear }) => {
  if(shouldShow) {
    return (
      <div>
        <div>
          <span>Filter Level: </span>
          <SpellFilterLink text={'0'} onClick={onFilterLevelClick} />
          <SpellFilterLink text={'1'} onClick={onFilterLevelClick} />
          <SpellFilterLink text={'2'} onClick={onFilterLevelClick} />
          <SpellFilterLink text={'3'} onClick={onFilterLevelClick} />
          <SpellFilterLink text={'4'} onClick={onFilterLevelClick} />
          <SpellFilterLink text={'5'} onClick={onFilterLevelClick} />
          <SpellFilterLink text={'6'} onClick={onFilterLevelClick} />
          <SpellFilterLink text={'7'} onClick={onFilterLevelClick} />
          <SpellFilterLink text={'8'} onClick={onFilterLevelClick} />
        </div>
        <div>
          <span>Filter School: </span>
          <SpellFilterLink text={'Abjuration'} onClick={onFilterSchoolClick} />
          <SpellFilterLink text={'Conjuration'} onClick={onFilterSchoolClick} />
          <SpellFilterLink text={'Divination'} onClick={onFilterSchoolClick} />
          <SpellFilterLink text={'Enchantment'} onClick={onFilterSchoolClick} />
          <SpellFilterLink text={'Evocation'} onClick={onFilterSchoolClick} />
          <SpellFilterLink text={'Illusion'} onClick={onFilterSchoolClick} />
          <SpellFilterLink text={'Necromancy'} onClick={onFilterSchoolClick} />
          <SpellFilterLink text={'Transmutation'} onClick={onFilterSchoolClick} />
        </div>
        <div>
          <a onClick={e => {
              e.preventDefault()
              onFilterClear()
            }}
          >
            Clear Filters
          </a>
        </div>
      </div>
    )
  }

  return null
}

SpellFilters.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  onFilterLevelClick: PropTypes.func.isRequired,
  onFilterSchoolClick: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired
}

export default SpellFilters
