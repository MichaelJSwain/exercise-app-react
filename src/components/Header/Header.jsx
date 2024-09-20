import ContentContainer from '../ContentContainer';
import Navbar from '../Navbar/Navbar.jsx';

const Header = ({children}) => {
    return (
        <>
          <Navbar/>
          <ContentContainer>
            {children}
          </ContentContainer>
        <footer>
          <small>footer</small>
        </footer>
        </>
    )
};

export default Header;