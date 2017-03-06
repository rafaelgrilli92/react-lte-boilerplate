import React, { Component, PropTypes } from 'react';

export default class InfoBox extends Component {
  PropTypes = {
    color: PropTypes.string, // default, primary, warning, danger
    collapsable: PropTypes.bool,
    collapsed: PropTypes.bool,
    icon: PropTypes.string, // just font-awesome name e.g.: envelope-o
    isLoading: PropTypes.bool,
    removable: PropTypes.bool,
    solidColor: PropTypes.bool,
    title: PropTypes.string
  }

  render() {
    var { 
      color = 'default', 
      collapsable,
      collapsed,
      icon, 
      isLoading,
      removable,
      solidColor,
      title
    } = this.props;

    return (
      <div className={"box box-" + color + (solidColor ? " box-solid" : "") + (collapsed ? " collapsed-box" : "")}>
        <div className="box-header with-border">
          <h3 className="box-title">
            { icon ? (<i className={('fa fa-' + icon : '')}>&nbsp;</i>) : '' }
            { title }
          </h3>
          <div className="box-tools pull-right">
            {
              removable ? (
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              ) : (
                collapsable && (
                  <button type="button" className="btn btn-box-tool" data-widget="collapse">
                    <i className={"fa fa-" + (collapsed ? "plus" : "minus")}></i>
                  </button>
                )
              )
            }
          </div>
        </div>
        <div className="box-body">
          { this.props.children }
        </div>
        {
          isLoading && (<div className="overlay"><i className="fa fa-refresh fa-spin"></i></div>)
        }
      </div>
    );
  }
}