import { clearData } from '../../actions/nested-list';

export const mapStateToProps = ({ nestedList }) => ({ data: nestedList });

export const mapDispatchToProps = { clearData };
