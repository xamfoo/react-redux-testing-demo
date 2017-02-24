import Polyglot from 'node-polyglot';
import phrases from '../constants/polyglot-phrases';

const polyglot = new Polyglot({ phrases });

export const t = polyglot.t.bind(polyglot);

export default polyglot;
