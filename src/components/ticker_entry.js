import { h, Component } from 'preact';
import { relativeTimeString } from '../util';

class TickerEntry extends Component {
  getItemField(column, item, columns) {
    return item.data[columns.indexOf(column)];
  }

  render({item, columns}) {
    const game = this.getItemField("Game", item, columns);
    const category = this.getItemField("Category", item, columns);
    const runners = this.getItemField("Runners", item, columns);
    const isRace = this.getItemField("Race?", item, columns);
    const startTime = new Date(item.scheduled);
    const estimate = item.length_t;

    return (
      <div class="ticker__entry">
        <div class="ticker-entry__section ticker-entry__section--leader">
        </div>
        <div class="ticker-entry__section">
          <p class="ticker-entry__game">{game}</p>
          <p class="ticker-entry__category">
            {category}
            { isRace &&
              " Race"
            }
          </p>
        </div>
        <div class="ticker-entry__separator is-pulled-right"></div>
        <div class="ticker-entry__section is-pulled-right has-text-right">
          <p class="ticker-entry__runners">{runners}</p>
          <p class="ticker-entry__start-time">{relativeTimeString(startTime, new Date())}</p>
        </div>
      </div>
    );
  }
}

export default TickerEntry;
