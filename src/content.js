function GridContent(props) {
  const count = props.count;
  const setCount = props.setCount;
  const fruits = props.fruits;
  const setFruits = props.setFruits;

  return (
    <div className="main-grid">
      <div className="grid-item"></div>
      <div className="grid-item">
        <div className="fruits">
          <label htmlFor="fruits">Choose a fruit:</label>
          <select id="fruits" value={fruits} name="fruits" onChange={(e) => {
            setFruits(e.target.value);
          }}>
            <option value="pineapple">Pineapple</option>
            <option value="blueberry">Blueberry</option>
            <option value="pomegranate">Pomegranate</option>
            <option value="fig">Fig</option>
          </select>
        </div>
      </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">
        <div className="button-clicker">
          <button onClick={() => {
            setCount(count + 1);
          }}>
            {count}
          </button>
        </div>
      </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item">
        <form onChange={(e) => {
          console.log(e.target.value)
        }}>
          <div className="radio-buttons">
            <input type="radio" name="radio-buttons" id="one" value="one" />
            <label htmlFor="one">One</label>
            <input type="radio" name="radio-buttons" id="two" value="two" />
            <label htmlFor="two">Two</label>
          </div>
        </form>
      </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
    </div>
  );
}

export default GridContent;