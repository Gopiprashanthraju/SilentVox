import styled from "styled-components";
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.medium};
  background-color: ${({ theme }) => theme.colors.base};
  color: ${({ theme }) => theme.colors.accent};
`;
const Anchor = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.navlink};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  padding: ${({ theme }) => theme.paddings.medium};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export default function Navbar() {
  return (
    <div>
      <Nav>
        <Anchor href="/">Home</Anchor>
        <Anchor href="/about">About</Anchor>
      </Nav>
    </div>
  );
}
