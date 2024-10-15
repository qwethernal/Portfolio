import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    render() {
        const { label, onDelete, onToggleImportant, onToggleChecked, onToggleLiked, like, important, checked } = this.props;
        
        
        let classNames = 'app-list-item d-flex justify-content-between';
        
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        if (checked) {
            classNames += ' checked';
        }

        return (
            <div className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className={`btn-star btn-sm ${important ? 'active' : ''}`} 
                        onClick={onToggleImportant}>
                        <i className={`fa fa-star ${important ? 'active' : ''}`}></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button
                        type="button"
                        className={`btn-check btn-sm ${checked ? 'active' : ''}`} 
                        onClick={onToggleChecked}>
                        <i className={`fa fa-check ${checked ? 'active' : ''}`}></i>
                    </button>
                </div>
            </div>
        )
    }
}
