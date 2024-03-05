import React, { useState } from 'react';
import styled from "styled-components"

export const Header = () => {
    return (
        <StyledHeaderBody>
            <StyledHeader>
                <menu>

                </menu>
                <burger>
                    
                </burger>
            </StyledHeader>
        </StyledHeaderBody>
    )
}


const StyledHeaderBody = styled.div`
    background-color: #3d3c3c;
    width: 100%;
    height: 100vh; 
    overflow-y: hidden;
`

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 20px;

`

const menu = styled.nav`
    
`

const burger = styled.div`
    
`