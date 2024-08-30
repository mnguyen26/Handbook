import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { modalContentMap } from './modalContentMap';

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
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <ModalContent />
            </Box>
        </Modal>
    );
};

export default DynamicModal;
