import Item from './Item';

const Avatar = ({body, hair, eyebrows, eyes, mouths, hats, glasses, clothes1, clothes2, clothes3, randomize}) => {
  return (
    <div className="avatar-wrapper">
      <div className="avatar-card">
        <Item path="body" index={body} zIndex={0} />
        <Item path="hair" index={hair} zIndex={1} />
        <Item path="eyebrows" index={eyebrows} zIndex={1} />
        <Item path="eyes" index={eyes} zIndex={1} />
        <Item path="noses" index={0} zIndex={1} />
        <Item path="mouths" index={mouths} zIndex={1} />
        <Item path="hats" index={hats} zIndex={2} />
        <Item path="glasses" index={glasses} zIndex={2} />
        <Item path="clothes1" index={clothes1} zIndex={2} />
        <Item path="clothes2" index={clothes2} zIndex={3} />
        <Item path="clothes3" index={clothes3} zIndex={4} />
      </div>
      <div className="btn-wrapper">
        <button className="button" onClick={() => randomize()}>
          Randomize!
        </button>
      </div>
    </div>
  );
}

export default Avatar