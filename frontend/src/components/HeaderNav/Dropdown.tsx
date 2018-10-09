import * as React from 'react';
import styled from 'styled-components';

interface ILocation {
  id: number;
  key: string;
  selected: boolean;
  title: string;
};

interface IProps {
  title: string;
  list: ILocation[];
}

interface IState {
  listOpen?: boolean;
  headerTitle?: string;


}

const HeaderTitle = styled.div`
background-color: #222;
width: 100%;
height: 37px;
display: block;
padding: 0px 10px 0px 10px;
position: relative;
`



const List = styled.ul`
    position: absolute;
    background-color: #373131;
    width: 160px;
    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  `

const MenuItem = styled.div`
  display: block !important;
  line-height: 38px;
  height: 38px;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  :hover {
    background-color: #eae4e4;
    color: #000;
  }
  `;

const Button = styled.div`
  position: relative;	
  transition: fill 0.25s;
  `
const Span = styled.span`{
  z-index: 2;	
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;	
  }`


class Dropdown extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props)
    this.state = {
      headerTitle: this.props.title,
      listOpen: false

    }
  }
  public handleClickOutside = (e: any): void => {
    this.setState({
      listOpen: false
    })
  }
  public toggleList = (e: any): void => {
    this.setState({
      listOpen: true
    })
  }



  public render() {
    const { list } = this.props
    const { listOpen, headerTitle } = this.state
    return (
      <div className="dd-wrapper" onMouseLeave={this.handleClickOutside} onMouseOver={this.toggleList}>
        <div className="dd-header">
          <HeaderTitle>{headerTitle}</HeaderTitle>
        </div>
        {listOpen && <List >
          {list.map((item: any) => (

            <MenuItem key={item.id} ><Button><Span>{item.title}</Span></Button></MenuItem>
          ))}
        </List>}
      </div>
    )
  }
}

export default Dropdown;