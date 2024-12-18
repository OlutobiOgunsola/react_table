import styled from "styled-components";

export const TableWrapper = styled.div`
    width: ${({ width }) => {
        return width ? width : '100%';
    }};
    height: ${({ height }) => {
        return height ? height : '100%';
    }};
    margin: ${({ margin }) => {
        return margin ? margin : '0 auto';
    }};
    font-family: ${({ fontFamily }) => {
        return fontFamily ? fontFamily : 'sans-serif';
    }};
    font-size: ${({ fontSize }) => {
        return fontSize ? fontSize : '14px';
    }};
    
    min-height: 400px;
    
    #table_header_container {
        height: 80px;
    };
    
    #table_inner_container {
        height: calc(100% - 120px);
    }
`;