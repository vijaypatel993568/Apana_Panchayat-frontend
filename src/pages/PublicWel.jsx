import React, { useEffect, useState } from 'react'

import Wrapper from '../assets/wrappers/PublicRegistration'

import { useParams } from "react-router-dom";

const PublicWel = () => {

    let { data } = useParams();
    if (!data) {
        return (<>
            <Wrapper>
                <div className='container page'>
                    {/* info */}
                    <div className='info'>

                        <h2>Welcome to <span>Meri Panchayat</span>
                        </h2>
                    </div>
                    <div className="card">
                        <h3>Not Authorized Citizen</h3>

                    </div>
                </div>
            </Wrapper>
        </>)
    }

    return (
        <Wrapper>
            <div className='container page'>
                {/* info */}
                <div className='info'>

                    <h2>Welcome to <span>Meri Panchayat</span>
                    </h2>
                </div>
                <div className="card">
                    <h3>Welcome Citizen</h3>
                </div>
            </div>
        </Wrapper>
    )
}

export default PublicWel
