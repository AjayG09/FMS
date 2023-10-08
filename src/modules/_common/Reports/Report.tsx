import Basic from './Templates/Basic';
import useStyles from './Report.styles';
import { PDFViewer, usePDF, PDFDownloadLink } from '@react-pdf/renderer';
import { useRef, useState } from 'react';
import Loading from '@/components/Loading/Loading';

const Report = () => {
  const classes = useStyles();
  const testInput = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string | undefined>('');
  // const [instance, updateInstance] = usePDF({ document: Basic });

  return (
    <div className={classes.layout}>
      <div>
        <div>test</div>
        <input
          name="test"
          onChange={() => {
            setValue(testInput.current?.value);
            console.log(testInput.current?.value);
          }}
          ref={testInput}
          type="text"
        />
      </div>
      <div>
        <PDFViewer height={'500px'} showToolbar={false} width={'1000px'}>
          <Basic text={value} />
        </PDFViewer>
      </div>
    </div>
  );
};

export default Report;
