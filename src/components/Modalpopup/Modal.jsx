export default function Modal({ body, header, id, footer, close }) {
  return (
    <div className="containers" id={id ? id : "name"}>
      <div className="modal">
        <span className="cross" onClick={close}>
          &times;
        </span>
        <div className="header">{header ? header : <h2>Header</h2>}</div>
        <div className="Body">
          {body ? (
            body
          ) : (
            <div>
              <p>body</p>
            </div>
          )}
        </div>
        <div className="Footer">
          {footer ? (
            footer
          ) : (
            <div>
              <p>footer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
