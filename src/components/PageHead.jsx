export function PageHead({ eyebrow, title, lede, code, location }) {
  return (
    <header className="page-head reveal">
      <div className="l">
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}
