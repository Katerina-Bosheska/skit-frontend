import React from 'react';
import {useHistory} from 'react-router';
import "../recipient.css"

const DetailedRecipientItem = ({ background, transaction }) => {

    console.log(transaction);

    return(
        <div className="row recipient-item-container" style={{backgroundColor:`${background}`}}>
            <div className="col">
                <h6>{transaction.date}</h6>
            </div>
            <div className="col">
                <h6>{transaction.recipient.name}</h6>
            </div>
            <div className="col">
                <h6>{transaction.payer.name}</h6>
            </div>
            <div className="col">
                <h6>{transaction.payer.billNumber}</h6>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h6>{transaction.konto}</h6>
                    </div>
                    <div className="col">
                        <h6>{transaction.program}</h6>
                    </div>
                </div>
            </div>
            {/*<div className="col">*/}
            {/*    <h6>{transaction.konto}</h6>*/}
            {/*</div>*/}
            {/*<div className="col">*/}
            {/*    <h6>{transaction.program}</h6>*/}
            {/*</div>*/}
            <div className="col">
                <h6 className="amount">{transaction.amount.toLocaleString()}</h6>
            </div>
        </div>
    );

}

export default DetailedRecipientItem;