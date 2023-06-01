import cn from "classnames";
import s from './Price.module.css';
import React from "react";
import styled, {css} from 'styled-components'

const fontStyle = css`
    display: flex
`
const Container = styled.div`
    font-weight: 600;
    font-size: ${({ size = '24px' }) => size};
    margin-bottom: ${({ mb = '4px' }) => mb};
    ${fontStyle}
    
`
const OldPrice = styled.span`
    font-weight: 500;
    color: ${({ col = '#c5c5c5'}) => col};
    position: relative;
    font-size: ${({ d_size = '18px' }) => d_size};
    margin-left: ${({ ml = '8px' }) => ml};
    margin-bottom: ${({ d_mb = '6px' }) => d_mb};
    :before{
    content: ' ';
    width: 100%;
    height: 1px;
    background: #ffa900;
    display: inline-block;
    position: absolute;
    top: ${({ top = '50%'}) => top}
}

`


const Price = ({discountPrice, price, size, mb, d_size, d_mb, ml, col, top}) => {
    return (
        <>
                <Container size={size} mb={mb} color=''>
                        <span className={discountPrice < price && s.discount}>{price}</span>
                        <span className={discountPrice < price && cn(s.rouble, s.discount)}>₽</span>
                    {discountPrice < price &&
                        <OldPrice d_size={d_size} d_mb={d_mb} ml={ml} col={col} top={top}>
                            <span>{discountPrice}</span>
                            <span className={s.rouble}>₽</span>
                        </OldPrice>
                    }
                </Container>

            {/*<div className={discountPrice < price ? cn(s.price, s.discount) : s.price}>

            </div>*/}
        </>

    )
}
export default Price