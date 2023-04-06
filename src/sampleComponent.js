// @flow
import React, { useState } from 'react';

import Button from '../Button';
import ConfirmModal from '../common/ConfirmModal';

import '../../styles/components/shuffle/shuffle-modal-header.scss';

type Props = {
    onRequestClose: Function,
    onSave: Function
};

const ShuffleModalHeader = ({ onRequestClose, onSave }: Props) => {
    const [showModal, setShowModal] = useState(false);

    const onClick = () => setShowModal(true);

    const onCancel = () => {
        setShowModal(false);
        onSave();
        onRequestClose();
    };

    const onConfirm = () => {
        setShowModal(false);
        onRequestClose();
    };

    const onClose = () => setShowModal(false);

    return (
        <div className="shuffle-modal-header">
            <div className="shuffle-modal-header-title">Social Shuffle</div>
            <Button className="dismiss-modal" onClick={onClick}>
                <i className="glyphicons glyphicons-remove" />
            </Button>
            <ConfirmModal
                showModal={showModal}
                modalTitle="Are you sure you want to exit without saving?"
                modalContent="This will remove any progress you made while using Social Shuffle."
                onConfirm={onConfirm}
                confirmBtnText="Exit Shuffle"
                cancelBtnText="Save Now"
                onCancel={onCancel}
                onClose={onClose}
                appElement="shares-mount-point"
            />
        </div>
    );
};

export default ShuffleModalHeader;