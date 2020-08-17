import React, { useReducer } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Backdrop from '../../common/Backdrop/Backdrop';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const ManagementModal = ({ linkedCities, show, onSubmit, onHide }) => {
  const [first, second, third] = linkedCities;
  const [values, setValues] = useReducer((state, newState) => ({ ...state, ...newState }), {
    first,
    second,
    third,
  });

  const classNames = cx('modal', { 'modal--is-open': show });

  return (
    <>
      <Backdrop show={show} onClick={onHide} />
      <div className={classNames}>
        <h4 className="modal__title">choose linked cities</h4>
        <form onSubmit={e => onSubmit(e, values)}>
          <Input
            className="modal__input"
            onChange={e => setValues({ first: e.target.value })}
            id="firstCity"
            name="firstCity"
            value={values.first}
          />
          <Input
            className="modal__input"
            onChange={e => setValues({ second: e.target.value })}
            id="secondCity"
            name="secondCity"
            value={values.second}
          />
          <Input
            className="modal__input"
            onChange={e => setValues({ third: e.target.value })}
            id="thirdCity"
            name="thirdCity"
            value={values.third}
          />
          <div className="modal__buttons">
            <Button btnType="default" onClick={onHide}>
              Cancel
            </Button>
            <Button type="submit" className="modal__button--save">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
ManagementModal.propTypes = {
  linkedCities: PropTypes.arrayOf(PropTypes.string).isRequired,
  show: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ManagementModal.defaultProps = {
  show: false,
};

export default ManagementModal;
