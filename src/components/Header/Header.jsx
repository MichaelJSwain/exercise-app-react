import { useContext } from 'react';
import ContentContainer from '../ContentContainer';
import Navbar from '../Navbar/Navbar.jsx';
import { AuthDrawerContext } from '../Context/AuthDrawerContext.jsx';
import AuthDrawer from '../Modals/AuthDrawer.jsx';

const Header = ({children}) => {
    const {isAuthDrawerOpen, hideAuthDrawer} = useContext(AuthDrawerContext);

    return (
        <>
          <Navbar/>
          <ContentContainer>
            {children}
          </ContentContainer>
          <div className="ReactModalPortal">
              {isAuthDrawerOpen ? (
                  <div className="ReactModal_Overlay"
                    onClick={(e) => {
                      if (e.target.className === "ReactModal_Overlay") {
                        hideAuthDrawer();
                      }
                    }}

                    style={{
                      position: "fixed",
                      top: "0",
                      bottom: "0",
                      right: "0",
                      left: "0",
                      display: "flex",
                      justifyContent: "flex-end",
                      zIndex: "101",
                      backgroundColor: "rgba(0,23,79,.7)"
                    }}
                  >
                    <AuthDrawer />
                  </div>
              ) : null}
          </div>
        <footer>
          <small>footer</small>
        </footer>
        </>
    )
};

export default Header;