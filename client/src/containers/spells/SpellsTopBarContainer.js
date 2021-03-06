import { connect } from 'react-redux'
import TopBarContainer from '../shared/TopBarContainer'

const mapStateToProps = state => ({
  title: 'Spells'
})

const SpellsTopBarContainer = connect(
  mapStateToProps
)(TopBarContainer)

export default SpellsTopBarContainer
