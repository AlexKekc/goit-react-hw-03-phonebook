import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  margin-left: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const FilterInput = styled.input`
  display: flex;
  margin-left: ${p => p.theme.space[4]}px;

  border: ${p => p.theme.borders.bold};
  border-color: ${p => p.theme.colors.transparentGray};
  outline: none;

  font-size: ${p => p.theme.fontSizes.s};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border-color: ${p => p.theme.colors.blue};
  }
`;
