import renderer from 'react-test-renderer';
import Box from './box';

it('renders correctly', () => {
  const tree = renderer
    .create(<Box className='my-class'>content</Box>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});