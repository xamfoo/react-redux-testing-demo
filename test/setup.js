import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.use(chaiEnzyme()); // Note the invocation at the end
