import React from 'react'
import classnames from 'classnames'


export enum ButtonSize {
    Large = 'lg',
    Small =  'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}
interface BaseButtonProps {
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
  }


  // intersetion types 交叉类型
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps
// 
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

// 如何将全部属性变成可选的？ Partial

const Button: React.FC<ButtonProps> = (props) =>{
    const {className, disabled, size, btnType, children, href, ...restProps} = props

    const classes = classnames('btn', className, {
        [`btn-${btnType}`]:  btnType,
        [`btn-${size}`] : size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if(btnType === ButtonType.Link && href){
        return (
            <a 
            className={classes}
            {...restProps}
            href={href}>
                {children}
            </a>
        )
    }else{
        return (
            <button
            className = {classes}
            {...restProps}
            disabled = {disabled}
            >
            {children}
            </button>
        )
    }



}


Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default 
}

export default Button