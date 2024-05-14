const ModalAction = ({ primaryBtnConfig, secondaryBtnConfig }) => {
  return (
    <div>
      <button
        className="modal-primary-action"
        onClick={primaryBtnConfig.onClick}
      >
        {primaryBtnConfig.text}
      </button>
      <button
        className="modal-secondary-action"
        onClick={secondaryBtnConfig.onClick}
      >
        {secondaryBtnConfig.text}
      </button>
    </div>
  );
};
export default ModalAction;
