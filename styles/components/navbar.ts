"use client";

import styled from "styled-components";
import { Group } from "../base/group";

export const Navbar = styled(Group).attrs({ as: "nav" })`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  padding-inline: ${({ theme }) => theme.spacing.xl};
`;