import React from 'react'
import styled from 'styled-components';

const RadioWrapper = styled.label`
  display: flex;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  font-weight: 700;
  line-height: 1.65;
  

  input {
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;

    top:6px;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid #2400ff;
    border-radius: 50%;
  }

  input:checked ~ span {
    background-color: #fff;
    border: 2px solid #2400ff;
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background:#2400ff ;
  }
`;
const CustomRadio = ({label,...restProps}) => {
  return (
    <RadioWrapper htmlFor={restProps.id}>
    {label}
    
    < input {...restProps} type="radio" />
    
 <span/>
  </RadioWrapper>
  )
}

export default CustomRadio
