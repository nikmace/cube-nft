import { Details, Bids, NFTTrading } from "../components";

import { useState } from "react";

const NFTShowcase = () => {
  const [selected, setSelected] = useState<Boolean>(true);

  return (
    <>
      <div className="nft">
        {/* Image section */}
        <div className="nft__image">
          <div className="nft__image-tag">
            <span>Rarity 100%</span>
          </div>
          <img src="./images/monke.jfif" alt="NFT" />
        </div>

        {/* Details section for NFT */}
        <div className="nft__details">
          <div className="nft__details-wrapper">
            {/* Details title */}
            <div className="nft__details-title">
              <h1>Pink + White</h1>
            </div>

            {/* Buy/Bid NFT */}
            <div className="nft__details-bid">
              <div className="nft__details-bid--info">
                <p>Current Bid</p>
                <span>0.978 ETH</span>
              </div>
              <button className="nft__details-bid--button">Buy Now</button>
            </div>

            {/* Selector for Details or Bids section */}
            <div className="nft__details-selector">
              {/* TODO: Make switch to change through different tabs */}
              <button
                className={selected ? "--selected" : ""}
                onClick={() => setSelected(true)}
              >
                Details
              </button>
              <button
                className={!selected ? "--selected" : ""}
                onClick={() => setSelected(false)}
              >
                Bids
              </button>
            </div>

            {/* Section with conditional rendered components */}
            <div className="nft__details-section">
              {selected && <Details />}
              {!selected && <Bids />}
            </div>

            {/* Creator details & NFT price section */}
            <div className="nft__details-creator">
              <div className="creator__info">
                <div className="creator__info-avatar">
                  <img src="./images/portrait.jpg" alt="Avatar" />
                </div>
                <div className="creator__info-name">
                  <p>Creator</p>
                  <span>Mark Grace</span>
                </div>
              </div>
              <div className="creator__info">
                <div className="creator__info-circle"></div>
                <div className="creator__info-name">
                  <p>Instant Price</p>
                  <span>2.3 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading History table with data */}
      <NFTTrading />
    </>
  );
};

export default NFTShowcase;
