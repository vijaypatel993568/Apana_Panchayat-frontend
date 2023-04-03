import Wrapper from '../assets/wrappers/LandingPage';

import Button from '../components/Button';
import { Link } from 'react-router-dom';



const Welcome = () => {
  return (
    <Wrapper>

      <h2>Welcome to Meri Panchayat</h2>
      <div className='container page'>
        {/* info */}
        <div className='info'>

          <div className="card-landing">
            <h3>Cetizen/Panchayat Residence</h3>
            <div className="card-landing-container">
              <span>New User?</span>
              <Link to='public-registration'>
                <Button text="Sign Up" />
              </Link>
            </div>

            <div className="card-landing-container">
              <span>Existing User?</span>
              <Link to='public-login'>
                <Button text="Login" />
              </Link>
            </div>
          </div>

          <div className="card-landing">
            <h3>Official User</h3>

            <div className="card-landing-container">
              <span>Existing User?</span>
              <Link to='official-login'>
                <Button text="Login" />
              </Link>
            </div>
          </div>

        </div>
      </div>


    </Wrapper>
  );
};

export default Welcome
