import * as React from 'react';

interface IOwnProps {
    title: string;
    children: JSX.Element
}

const Tab = (props: IOwnProps) =>  {
        const { children } = props;
        return <div>{children}</div>;
    
}

export default Tab;