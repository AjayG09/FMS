import { ErrorResponse, useRouteError } from 'react-router-dom';
import useStylesRoot from '../../../Root/Root.styles';
import useStyles from './ErrorPage.styles';

const ErrorPage = () => {
  /** Normally components should utilize a single useStyles(). This is an exception, since we really do want to share styles in this scenario */
  const classesRoot = useStylesRoot();
  const classes = useStyles();
  const error = useRouteError() as ErrorResponse;

  const getErrorMessageLocale = () => {
    switch (error?.status) {
      case 404:
        return 'Page not found!!';
      default:
        return 'Something Went Wrong!!';
    }
  };

  return (
    <div className={classesRoot.mainContainer}>
      <div className={classes.errorPage}>
        <h1>Error</h1>
        <p>{getErrorMessageLocale()}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
