import React from 'react'
import classnames from 'classnames'


type MenuMode = 'horizontal' | 'vertical'

interface MenuProps{
    defaultIndex?: number;
    mode?: MenuMode;
    className?: string;
    style?: React.CSSProperties;
    onSelect?: (selectIndex: number) => void 
}



const Menu: React.FC<MenuProps> = (props) =>{
    const {defaultIndex, className, mode, style, onSelect, children} = props
    const classes = classnames('peanut-menu', className, {
        'menu-verital': mode === 'vertical'
    })
    return (
        <ul 
        className={classes}
        style={style}
        >
            {children}
        </ul>
    )
}