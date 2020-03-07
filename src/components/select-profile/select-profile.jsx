import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import goToNextStep from '../picker/Picker.actions';

import styles from './select-profile.module.scss';
import Button from '../common/button/Button';

const SelectProfile = ({ boundGoToNextStep }) => (
  <div className={styles.container}>
    <p className={styles.title}>
      Please enter Instagram username of the profile you want to run contest on:
    </p>
    <div className={styles.form}>
      <input className={styles.input} type="text" />
      <Button
        type="button"
        label="Start"
        btnClass={styles.button}
        onClick={boundGoToNextStep}
      />
    </div>
  </div>
);

SelectProfile.propTypes = {
  boundGoToNextStep: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  boundGoToNextStep: goToNextStep,
};

export default connect(null, mapDispatchToProps)(SelectProfile);
