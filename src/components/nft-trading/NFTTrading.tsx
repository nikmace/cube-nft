const NFTTrading = () => {
  return (
    <div className="nft-trading">
      <h2 className="nft-trading__title">Trading History</h2>
      <div className="nft-trading__section">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Event</div>
            <div className="col col-2">Price</div>
            <div className="col col-3">From</div>
            <div className="col col-4">To</div>
            <div className="col col-5">Date</div>
          </li>
          {/* Row */}
          <li className="table-row">
            <div className="col col-1" data-label="Event">
              <img src="./images/nft-trading/sale.png" alt="" />
              Sale
            </div>
            <div className="col col-2" data-label="Price">
              0,1
            </div>
            <div className="col col-3 green" data-label="From">
              omars
            </div>
            <div className="col col-4" data-label="To">
              annek
            </div>
            <div className="col col-5" data-label="Date">
              12 days ago
            </div>
          </li>
          {/* Row */}
          <li className="table-row">
            <div className="col col-1" data-label="Event">
              <img src="./images/nft-trading/transfer.png" alt="" />
              Transfer
            </div>
            <div className="col col-2" data-label="Price">
              0,1
            </div>
            <div className="col col-3 purple" data-label="From">
              griffon
            </div>
            <div className="col col-4" data-label="To">
              annek
            </div>
            <div className="col col-5" data-label="Date">
              12 days ago
            </div>
          </li>
          {/* Row */}
          <li className="table-row">
            <div className="col col-1" data-label="Event">
              <img src="./images/nft-trading/list.png" alt="" />
              List
            </div>
            <div className="col col-2" data-label="Price">
              0,1
            </div>
            <div className="col col-3 peach" data-label="From">
              grace
            </div>
            <div className="col col-4" data-label="To">
              omars
            </div>
            <div className="col col-5" data-label="Date">
              a month ago
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NFTTrading;
