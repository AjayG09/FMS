import FormControl from '@/components/FormControl/FormControl';
import useStyles from './PurchaseOrder.styles';
import { PDFViewer } from '@react-pdf/renderer';
import PurchaseOrderReport from '../../Templates/PurchaseOrderReport';

const PurchaseOrder = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.layout}>
        <h2>Purchase order</h2>

        <div className={classes.border}>
          <section className={classes.section}>
            <div className={classes.title}>view</div>
            <div className={classes.content}>
              <div className={classes.content}>
                <div className={classes.contentControls}>
                  <FormControl
                    containerClass={classes.input}
                    label="All Orders"
                    name="ordersType"
                    type="radio"
                    value="allOrders"
                  />
                  <FormControl
                    containerClass={classes.input}
                    label="Outstanding Orders"
                    name="ordersType"
                    type="radio"
                    value="outstandingOrder"
                  />
                </div>
              </div>
              <FormControl
                containerClass={classes.input}
                label="Financial year"
                name="financialYear"
                type="text"
              />
              <FormControl
                containerClass={classes.input}
                label="Supplier"
                name="supplier"
                type="text"
              />
              <FormControl
                containerClass={classes.input}
                label="Source"
                name="source"
                type="text"
              />
              <div className={classes.controls}>
                <div className={classes.label}>Order Date</div>
                <div className={classes.inputs}>
                  <FormControl
                    containerClass={classes.input}
                    label="from"
                    name="orderDateFrom"
                    type="date"
                  />
                  <FormControl
                    containerClass={classes.input}
                    label="to"
                    name="orderDateTo"
                    type="date"
                  />
                </div>
              </div>

              <div className={classes.controls}>
                <div className={classes.label}>Order Number</div>
                <div className={classes.inputs}>
                  <FormControl
                    containerClass={classes.input}
                    label="from"
                    name="orderNumberFrom"
                    type="date"
                  />
                  <FormControl
                    containerClass={classes.input}
                    label="to"
                    name="orderNumberTo"
                    type="date"
                  />
                </div>
              </div>

              <FormControl
                containerClass={classes.checkbox}
                label="Include cancelled purchase orders"
                name="cancelledPurchaseOrders"
                type="checkbox"
              />
            </div>
          </section>
          <section className={classes.section}>
            <div className={classes.title}>Sequence</div>
            <div className={classes.content}>
              <div className={classes.contentControls}>
                <FormControl
                  containerClass={classes.checkbox}
                  id="orderNumber"
                  label="Order Number"
                  name="orderType"
                  type="radio"
                  value="orderType"
                />
                <FormControl
                  containerClass={classes.checkbox}
                  id="orderDate"
                  label="Order Date"
                  name="orderType"
                  type="radio"
                  value="orderDate"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className={classes.buttons}>
        <button type="submit">OK</button>

        <button>Cancel</button>
      </div>
      <div className={classes.outputPdf}>
        <PDFViewer height={'500px'} showToolbar={false} width={'1000px'}>
          <PurchaseOrderReport />
        </PDFViewer>
      </div>
    </div>
  );
};

export default PurchaseOrder;
