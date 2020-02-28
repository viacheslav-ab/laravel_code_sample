
import React, { useState } from 'react';

// Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

import MainButton from '@material-ui/core/Button';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col,
	FormFeedback
} from 'reactstrap';

const ConfirmationDialog = ({ yearMonth, rowData, onClose, ...rest }) => {

    const [pricePlan, setPricePlan] = useState()
    const [perform, setPerform] = useState()
    const [excecution, setExcecution] = useState()
    const [extra, setExtra] = useState()

    const handleCancel = () => {
        onClose({...rowData}, false);
    };

    const handleOk = () => {
        let isFill = true;
        if (!pricePlan && !perform && !excecution && !extra ) {
            console.log("==== no changed ====")
            isFill = false;
        }
        onClose({...rowData, nPrice: pricePlan, tPerform: perform, tExecution: excecution, tExtra: extra, nEditStatus: 1}, isFill);
    };

    const handleEntering = () => {
        setPricePlan(rowData.nPrice)
        setPerform(rowData.tPerform)
        setExcecution(rowData.tExecution)
        setExtra(rowData.tExtra)
    }

    return (
        <Dialog disableBackdropClick disableEscapeKeyDown
            onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"            
            {...rest}
        >
            <DialogTitle id="confirmation-dialog-title" style={{width: 600, textAlign: "center", marginTop: 20}}>
                {yearMonth.year + "year " + yearMonth.month + "month\t\t" + rowData.nWeek + "week"}
            </DialogTitle>
            <DialogContent>
                <Form>
                    <FormGroup row>
                        <Label for="text" sm={2}>pricePlan</Label>
                        <Col sm={10}>
                            <Input 
                                type="number" min={0} max={10000}
                                disabled={rowData.nCheckStatus > 0 ? true : false}
                                value={pricePlan || ""}
                                onChange={e => setPricePlan(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{height: 100}}>
                        <Label for="Text-1" sm={2}>perform</Label>
                        <Col sm={10}>
                            <Input 
                                type="textarea" multiple 
                                disabled={rowData.nCheckStatus > 0 ? true : false}
                                value={perform || ""}
                                onChange={e => setPerform(e.target.value)}
                                />
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{height: 50}}>
                        <Label for="Text-2" sm={2}>perform</Label>
                        <Col sm={10}>
                            <Input 
                                type="textarea" multiple 
                                disabled = {rowData.nCheckStatus === 2 ? true : false}
                                value={excecution || ""}
                                onChange={e => setExcecution(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{height: 50}}>
                        <Label for="Text-2" sm={2}>others</Label>
                        <Col sm={10}>
                            <Input 
                                type="textarea" multiple 
                                disabled = {rowData.nCheckStatus === 2 ? true : false}
                                value={extra || ""}
                                onChange={e => setExtra(e.target.value)}/>
                        </Col>
                    </FormGroup>
                </Form>
            </DialogContent>
            <DialogActions>
                <MainButton variant="contained" onClick={handleCancel} className="btn-danger text-white">
                    Cancel
                    </MainButton>
                <MainButton variant="contained" onClick={handleOk} color="primary" className="text-white">
                    Ok
                    </MainButton>
            </DialogActions>
        </Dialog>
    );

}

// ConfirmationDialog.propTypes = {
//     yearMonth: PropTypes.object,
//     row: PropTypes.object
// }

export default ConfirmationDialog