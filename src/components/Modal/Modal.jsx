import { Component } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

export  class Modal extends Component{


   componentDidMount() {
        window.addEventListener('keydown', this.addKeyDown);

    }
   
    componentWillUnmount() {
        window.removeEventListener('keydown', this.addKeyDown);
    }

     addKeyDown = evt => {
         if (evt.code === 'Escape') {
                console.log('object закрити');
                this.props.onCloseModal();
            }
     }
    addOverlay = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onCloseModal();
        }
    }
    render() {
        return createPortal(
            <div 
            className={css.backdrop}
            onClick={this.addOverlay}
            >
                {/* получаем переиспользованую модалку */}
                <div className={css.content}>
                    {this.props.children}
                </div>
            </div>,
            modalRoot)
    }
}