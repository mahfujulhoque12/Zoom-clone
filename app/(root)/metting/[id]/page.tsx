import React from 'react';

const Metting = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <h2>metting room # {params.id}</h2>
        </div>
    );
};

export default Metting;