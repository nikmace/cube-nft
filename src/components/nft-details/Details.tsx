const Details = () => {
  return (
    <div className="details__block">
      <div className="details__block-info">
        <div className="info-item">
          <span className="info-item--dot green"></span>
          <span className="info-item--title">Date</span>
        </div>
        <div className="info-item--dash">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</div>
        <div className="info-item--text">Oct 11, 2021, 12:53 PM</div>
      </div>

      <div className="details__block-info">
        <div className="info-item">
          <span className="info-item--dot purple"></span>
          <span className="info-item--title">Genotype</span>
        </div>
        <div className="info-item--dash">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>
        <div className="info-item--text">Genotype</div>
      </div>

      <div className="details__block-info">
        <div className="info-item">
          <span className="info-item--dot peach"></span>
          <span className="info-item--title">Status</span>
        </div>
        <div className="info-item--dash">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</div>
        <div className="info-item--text">On Sale</div>
      </div>
    </div>
  );
};

export default Details;
