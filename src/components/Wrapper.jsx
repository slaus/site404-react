import React from 'react';

const Wrapper = ({children}) => {

    return (
        <div className="wrapper pt-28 lg:pt-44">
            {children}
        </div>
    );
};

export default Wrapper;
