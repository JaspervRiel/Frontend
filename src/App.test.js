import { render, screen } from '@testing-library/react';
import Feeds from './Components/Feeds/Feeds';
import Home from './Home'
import UploadImage from './UploadImage'
import uploadComment from './UploadComment'

test('Test render feeds', () => {
render(<Feeds/>)

screen.debug();
});

test('Test render Home', () => {
  render(<Home/>)
  
  screen.debug();
  });

test('Test render uploadimage', () => {
  render(<UploadImage/>)
   
  screen.debug();
  });
test('Test render uploadComment', () => {
  render(<uploadComment/>)
   
  screen.debug();
  });

test("Testing placing comment", ()=>{
render (<uploadComment/>)
});


