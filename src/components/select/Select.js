import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SelectHeader from "./SelectHeader";
import SelectList from "./SelectList";

/**
 * @class Select -
 */
class Select extends React.PureComponent {
  /**
   * @property {bool} autofocus -
   * @property {bool} disabled -
   * @property {string} form -
   * @property {bool} multiple -
   * @property {string} name -
   * @property {number} size -
   * @property {node} children -
   */
  constructor(props){
    super(props)
    this.selectRef = React.createRef();
    this.state = {
      title: "Soy un select bonito",
      listOpen: false,
      list: [
        {
          title: "Yo soy una opción bonita",
          icon:"world",
          id: 1
        },
        {
          title: "Yo soy una opción más bonita",
          icon:"flag-outline",
          id: 2
        },
        {
          title: "Yo soy una opción muuucho más bonita",
          icon: "planet-outline",
          id: 3
        },
        {
          title: "Yo soy una opción meeeh bonita",
          icon:"flag-outline",
          id: 2
        },
        {
          title: "Yo soy una opción equisss",
          icon:"flag-outline",
          id: 2
        }
      ]
    }
  }
  static propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    window.addEventListener("resize", this.resize);
    document.addEventListener("keydown", this.handleEscPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("resize", this.resize);
    document.removeEventListener("keydown", this.handleEscPressed);
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  handleClickOutside = event => {
    if (
      this.selectRef.current &&
      !this.selectRef.current.contains(event.target) &&
      this.state.listOpen
    ) {
      this.setState({
        listOpen: false
      })
    }
  };

  selectItem = (event) =>{
    console.log(event.target.textContent);
    const itemTitle = event.target.textContent;
    this.setState({
      title: itemTitle
    })
    this.toggleList()
  }

  render() {
    const { disabled, form, multiple, name, size, children,className } = this.props;
    const {title, listOpen, list} = this.state
    return (
      <div className={classNames('select__wrapper', className)} ref={this.selectRef}>
        <SelectHeader title={title} icon="world" onClick={this.toggleList} listOpen={listOpen} onClickArrow={this.toggleList} />
        {listOpen && <SelectList list={list} onClick={this.selectItem}/>}
      </div>
    );
  }
}

Select.defaultProps = {
  disabled: false,
  multiple: false,
  className: ""
};

export default Select