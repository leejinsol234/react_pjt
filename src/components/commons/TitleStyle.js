import styled, { css } from 'styled-components';
import colorNames from '../../styles/Colors';
import sizeName from '../../styles/sizes';

const { big, extraBig } = sizeName;

export const MainTitle = styled.h1``;
export const SubTitle = styled.h2`
  font-size: ${big};
  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align || `left`};
  color: ${({ color }) => (color ? colorNames[color] : '#000')};
  ${({ border_width, color }) =>
    border_width &&
    css`
      padding-bottom: 10px;
      border-bottom: ${border_width}px solid ${color ? color : '#000'};
    `}

  margin-bottom: 20px;
`;
