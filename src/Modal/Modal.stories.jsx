import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PropTypes from 'prop-types';

import Modal from './index';
import Button from '../Button';
import InputText from '../InputText';
import Variant from '../utils/constants';

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.resetModalWrapperState = this.resetModalWrapperState.bind(this);

    this.state = { open: false };
  }

  openModal() {
    this.setState({ open: true });
  }

  resetModalWrapperState() {
    this.setState({ open: false });
    this.button.focus();
  }

  render() {
    return (
      <div>
        <Modal
          open={this.state.open}
          title={this.props.title}
          body={this.props.body}
          parentSelector={this.props.parentSelector}
          onClose={this.resetModalWrapperState}
        />
        <Button
          onClick={this.openModal}
          label="Click me to open a modal!"
          buttonType="light"
          inputRef={(input) => { this.button = input; }}
        />
      </div>
    );
  }
}

ModalWrapper.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  parentSelector: PropTypes.string,
};

ModalWrapper.defaultProps = {
  parentSelector: 'body',
};

storiesOf('Modal', module)
  .add('basic usage', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      onClose={() => {}}
    />
  ))
  .add('configurable buttons', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      buttons={[
        <Button
          label="Blue button!"
          buttonType="primary"
        />,
        {
          label: 'Red button!',
          buttonType: 'danger',
        },
        <Button
          label="Green button!"
          buttonType="success"
        />,
      ]}
      onClose={() => {}}
    />
  ))
  .add('configurable title and body', () => (
    <Modal
      open
      title="Custom title!"
      body="Custom body!"
      buttons={[
        <Button
          label="Dark button!"
          buttonType="dark"
        />,
      ]}
      onClose={() => {}}
    />
  ))
  .add('configurable buttons that perform actions', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      buttons={[
        <Button
          label="Click me and check the console!"
          buttonType="light"
          onClick={action('button-click')}
        />,
      ]}
      onClose={() => {}}
    />
  ))
  .add('configurable close button', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      closeText="SHOO!"
      onClose={() => {}}
    />
  ))
  .add('modal invoked via a button', () => (
    <ModalWrapper
      title="I am the modal!"
      body="I was invoked by a button!"
    />
  ))
  .add('modal with element body', () => (
    <Modal
      open
      title="Modal title."
      body={(
        <div>
          <p>Enter your e-mail address to receive free cat facts!</p>
          <InputText
            name="e-mail"
            label="E-Mail Address"
          />
          <Button
            label="Get my facts!"
          />
        </div>
      )}
      onClose={() => {}}
    />
  ))
  .add('modal with warning variant', () => (
    <Modal
      open
      title="Warning Modal"
      body={(
        <p>Be careful! It is dangerous ahead.</p>
      )}
      closeText="Run Away!"
      buttons={[
        <Button
          label="Continue anyway..."
          buttonType="light"
        />,
      ]}
      onClose={() => {}}
      variant={{ status: Variant.status.WARNING }}
    />
  ))
  .add('modal inside special div', () => (
    <div>
      <div>
        <div className="special-div" />
      </div>
      <ModalWrapper
        title="I am the modal!"
        body="I was invoked by a button!"
        parentSelector=".special-div"
      />
    </div>
  ))
  .add('two modals with the same target', () => (
    <div>
      <div>
        <div className="target-div" />
      </div>
      <ModalWrapper
        title="I am the first modal!"
        body="I target one"
        parentSelector=".target-div"
      />
      <ModalWrapper
        title="I am the second modal!"
        body="I target one"
        parentSelector=".target-div"
      />
    </div>
  ))
  .add('two modals with seperate targets', () => (
    <div>
      <div>
        <div className="target-div-one" />
        <div className="target-div-two" />
      </div>
      <ModalWrapper
        title="I am the first modal!"
        body="I target one"
        parentSelector=".target-div-one"
      />
      <ModalWrapper
        title="I am the second modal!"
        body="I target two"
        parentSelector=".target-div-two"
      />
    </div>
  ));
