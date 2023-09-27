import classnames from 'classnames';
import { useMemo, HtmlHTMLAttributes } from 'react';
import useStyles from './Loading.styles';

interface ILoadingProps extends HtmlHTMLAttributes<HTMLDivElement> {
  /** If true, shows loading indicator, else shows children */
  isLoading: boolean;
  /** Internal JSS classes */
  classes?: Record<string, string>;
  /** Height and width of loading indicator (overrides theme) */
  size?: number | string;
}

const Loading = ({
  children,
  className,
  classes: classesProp,
  isLoading,
  size = 0,
  ...rest
}: ILoadingProps) => {
  const classes = useStyles(useMemo(() => ({ size, classes: classesProp }), [size, classesProp]));
  const loading = ' Loading...'
  return (
     
    <>
      {isLoading ? (
         
        <div aria-live="polite" className={classnames(classes.root, className)} {...rest}>
          {loading}
        </div>
      ) : (
        children || <div />
      )}
    </>
  );
};

export default Loading;
