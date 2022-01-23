import renderer from 'react-test-renderer';
import InputForm from './input_form';

it('renders correctly', () => {
  const tree = renderer
    .create(<InputForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});