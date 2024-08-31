import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { modalContentMap } from './modalContentMap';
import './Styles/Pages.css';

interface DynamicModalProps {
    isOpen: boolean;
    contentKey: string | null;
    onClose: () => void;
}

const DynamicModal = (props: DynamicModalProps) => {
    if (!props.contentKey) return null;

    const ModalContent = modalContentMap[props.contentKey];

    return (
        <Modal
            open={props.isOpen}
            onClose={props.onClose}
            aria-labelledby="dynamic-modal-title"
        >
            <Box className="modal-box">
                <div className='modal-content'>
                    <ModalContent />
                </div>
            </Box>
        </Modal>
    );
};

export default DynamicModal;
