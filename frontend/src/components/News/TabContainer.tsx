import * as React from 'react';

interface IPropsContainer {
    index: number;
    updateIndex: any;
    children?: any;

}

class TabContainer extends React.Component<IPropsContainer, {}> {
    private index: number
    public render() {
        const { children, index = 0 } = this.props;
        this.index = index;
        if (index >= children.length) {
            this.index = children.length - 1;
        } else if (index <= 0) {
            this.index = 0;
        }
        const kid = children[index];
        const tabs = children.map(this.renderTab);
        return (
            <div>
                <div className="flex bb b--black-10">{tabs}</div>
                <div className="pa2">{kid}</div>
            </div>
        );
    }


    private renderTab = (t: any, i: number) => {
        const { updateIndex } = this.props;
        const c = C(
            "bb bw1 br0",
            "pv2 ph3",
            i === this.index ? "red" : "b--transparent"
        );
        const onClick = () => updateIndex(i);
        return (
            <button
                className="b bn bg-transparent pointer pa0 dim"
                key={i}
                onClick={onClick}
            >
                <div className={c}>
                    {t.props.title}
                </div>
            </button>
        );
    };
}

function C(...args: string[]) {
    return args.filter(Boolean).join(" ");
}

export default TabContainer