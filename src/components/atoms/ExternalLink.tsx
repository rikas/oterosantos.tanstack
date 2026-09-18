import { StyledLink } from './StyledLink'
import type { StyledLinkProps } from './StyledLink'

export function ExternalLink({
  children,
  href,
  ...props
}: StyledLinkProps): React.ReactElement {
  return (
    <StyledLink href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </StyledLink>
  )
}
