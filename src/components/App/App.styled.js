import styled from '@emotion/styled';

export const PhonebookTitle = styled.h1`
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.xl};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.Bold};

  color: ${p => p.theme.colors.primaryText};
`;

export const ContactsTitle = styled.h2`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.l};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.Bold};

  color: ${p => p.theme.colors.primaryText};
`;
