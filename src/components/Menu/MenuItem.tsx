import React from 'react'
import classnames from 'classnames'


type MenuMode = 'horizontal' | 'vertical'

interface MenuItemProps{
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    onSelect?: (selectIndex: number) => void 
}



const Menu: React.FC<MenuItemProps> = (props) =>{
    const {index, className, style, disabled, children} = props
    const classes = classnames('peanut-menu', className, {
        'is-disabled': disabled
    })
    return (
        <li 
        className={classes}
        style={style}
        >
            {children}
        </li>
    )
}