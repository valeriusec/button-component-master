import React, { useState } from "react";
import styled, { css } from "styled-components";

const DefaultButton = styled.button`
  width: 81px;
  height: 36px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  &:hover,
  &:focus {
    background-color: #aeaeae;
  }

  ${(props) =>
    props.outline &&
    css`
      width: 88px;
      border: 1px solid #3d5afe;
      background-color: transparent;
      color: #3d5afe;
      &:hover,
      &:focus {
        background-color: rgba(41, 98, 255, 0.1);
      }
    `}

  ${(props) =>
    props.text &&
    css`
      color: #3d5afe;
      background-color: transparent;
      box-shadow: none;
      &:hover,
      &:focus {
        background-color: rgba(41, 98, 255, 0.1);
      }
    `}
    
      ${(props) =>
    props.disableShadow &&
    css`
      background: #2962ff;
      box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.5);
      color: #fff;
      &:hover,
      &:focus {
        background-color: #2962ff;
      }
    `}

      ${(props) =>
    props.disabled &&
    css`
      &:disabled {
        width: 88px;
        background-color: #e0e0e0;
        cursor: default;
        box-shadow: none;
        &:hover,
        &:focus {
          background-color: #e0e0e0;
        }
      }
    `}

    ${(props) =>
    props.startIcon &&
    css`
      width: 105px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    `}

    ${(props) =>
    props.endIcon &&
    css`
      width: 105px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-evenly;
    `}

    ${(props) => 
    props.small &&
    css`
      width: 73px;
      height: 32px;
    `
    }

    ${(props) => 
    props.medium &&
    css`
      width: 81px;
      height: 36px;
    `
    }

    ${(props) => 
    props.large &&
    css`
      width: 93px;
      height: 42px;
    `
    }
    
      ${(props) =>
    props.primary &&
    css`
      background: #2962ff;
      box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
      color: #fff;
      &:hover,
      &:focus {
        background-color: #0039cb;
      }
    `}

    ${(props) =>
    props.secondary &&
    css`
      background: #455A64;
      box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
      color: #fff;
      &:hover,
      &:focus {
        background-color: #1c313a;
      }
    `}

    ${(props) =>
    props.danger &&
    css`
      background: #D32F2F;
      box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
      color: #fff;
      &:hover,
      &:focus {
        background-color: #9A0007;
      }
    `}


`;

export default DefaultButton;
