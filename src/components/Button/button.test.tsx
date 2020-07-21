import React from 'react'

import {render} from '@testing-library/react'

import Button from './button'


// 为组件添加测试用例

describe('test Button component', ()=>{
    it('shoud render the corrent default button', ()=>{
        const wrapper = render(<Button>Nice</Button>)
        // 查找一个节点
        const element = wrapper.getByText('Nice')
        // const element1 = wrapper.queryByText('Nice')
        // console.log(element, element1)
        // jest-dom的断言
        expect(element).toBeInTheDocument()
        // jest的断言
        expect(element.tagName).toEqual('BUTTON')
        // jest-dom
        expect(element).toHaveClass('btn btn-default')        
    })


})