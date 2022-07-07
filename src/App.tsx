import React from 'react';
import styled from 'styled-components';
import './index.css';
import { Routes, Route } from 'react-router-dom';

const StyledContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url('https://cdn.jsdelivr.net/gh/toy-playground/imgs@master/bg.jpg');

    background-position: center;
    background-repeat: no-repeat;

    background-size: cover;
    position: relative;
    height: inherit;
    overflow: auto;

    @media (max-width: 450px) {
        height: inherit;
        flex-direction: column;
        flex: 1;
        height: calc(100vh - 60px);
    }

    @media (max-width: 900px) {
        height: 100%;
    }
`;

const StyledOverlay = styled.div`
    display: flex;
    flex: 1;
    padding: 48px 32px;
    align-items: center;
    transition: 1s all;
    justify-content: center;
    flex-direction: column;
    // background-color: #1e476c6e;

    @media (max-width: 900px) {
        font-size: 48px;
    }
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: invert(80%);
    color: #e6e6fa;
    &:hover {
        color: rgba(0, 0, 0, 0.8);
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: none;
    }
`;

const HomePage = () => {
    return (
        <StyledContainer>
            <StyledContent>
                <StyledOverlay>
                    <div style={{ fontSize: '64px' }}>Toy UI</div>
                    <div style={{ fontSize: '32px', marginTop: '16px' }}>一个面向自娱自乐的组件库</div>
                </StyledOverlay>
            </StyledContent>
        </StyledContainer>
    );
};
export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};
