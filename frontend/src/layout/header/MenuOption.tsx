import styled from "styled-components";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Option = styled.div({
  display: "flex",
  justifyContent: "center",
  height: 40,
  width: 100,
  margin: 10,
  paddingTop: 10,

  "a:link": {
    textDecoration: "none",
  },

  "a:visited": {
    textDecoration: "none",
  },

  "a:hover": {
    textDecoration: "none",
  },

  "a:active": {
    textDecoration: "none",
  },
});

export const MenuOption = ({ href, children }: Props) => {
  return (
    <Option>
      <Link href={href}>{children}</Link>
    </Option>
  );
};
