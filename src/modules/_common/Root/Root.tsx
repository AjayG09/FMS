import { Outlet, useNavigate } from 'react-router-dom';
import useStyles from './Root.styles';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

/**
 * This component serves as the shell for the entire application. It
 * will render all components as defined in the application routes.
 */
const Root = () => {
  const classes = useStyles();
  const auth = useSelector((state: RootState) => state?.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.authenticated) {
      navigate('/login');
    }
  }, [auth.authenticated, navigate]);
  return (
    <div className={classes.mainContainer} data-qa="main-container">
      <div className={classes.navContainer}>
        {/* TODO: Needs to add <Navigation /> component here */}
      </div>
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
