  
import React from "react";
import { Container, Row, Column, Link, Title, Text, BreakIcon, Break, Link1, Link2,Icon } from "./footer.js";

export default function Footer({ children, ...restProps }) {
    return <Container{...restProps}></Container>
}

Footer.Row = function footerRow({ children, ...restProps }) {
   return <Row {...restProps}>{children}</Row>
}
Footer.Column = function FooterColumn({ children, ...restProps }) {
   return <Column {...restProps}>{children}</Column>
}
Footer.Link = function footerLink({ children, ...restProps }) {
   return <Link {...restProps}>{children}</Link>
}
Footer.Link1 = function footerLink1({ children, ...restProps }) {
   return <Link1 {...restProps}>{children}</Link1>
}
Footer.Link2 = function footerLink2({ children, ...restProps }) {
   return <Link2 {...restProps}>{children}</Link2>
}
Footer.Title = function footerTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>
}
Footer.Text = function footerText({ children, ...restProps }) {
   return <Text {...restProps}>{children}</Text>
}
Footer.Icon = function footerIcon({ children, ...restProps }) {
   return <Icon {...restProps}>{children}</Icon>
}
Footer.Break = function footerBreak({ children, ...restProps }) {
   return <Break {...restProps}>{children}</Break>
}
Footer.BreakIcon = function footerBreakIcon({ children, ...restProps }) {
   return <BreakIcon {...restProps}>{children}</BreakIcon>
}

