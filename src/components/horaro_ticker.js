import { h, Component } from 'preact';
import TickerEntry from './ticker_entry';

class HoraroTicker extends Component {
  getItemField(column, item, columns) {
    return item.data[columns.indexOf(column)];
  }

  render({data}) {
    const {name, link, columns, items} = data;
    let lastDate = -1;

    return (
      <div class="horaro-ticker">
        {
          items.map((item) => {
            return <TickerEntry item={item} columns={columns} />;
          })
        }
      </div>
    );
  }
}

export default HoraroTicker;
