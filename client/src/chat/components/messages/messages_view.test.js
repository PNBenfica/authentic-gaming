import renderer from 'react-test-renderer';
import MessagesView from './messages_view';

const messages = [
  {
    userName: 'Paulo',
    messages: 'SLB',
    timestamp: 123456789
  }
]

it('renders correctly', () => {
  const tree = renderer
    .create(<MessagesView messages={messages} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders no messages warning', () => {
  const tree = renderer
    .create(<MessagesView messages={[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});